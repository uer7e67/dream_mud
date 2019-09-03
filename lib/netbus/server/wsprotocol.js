var ws = require("ws"); 
var log = require("../../utils/log"); 
var msg_manager = require("../../manager/msg_manager"); 

class wsprotocol{

    constructor(args){
        this.host = args.host;
        this.port = args.port; 
        this.isfont = args.isfont; 
        this.isOpenHb = true; 
        this.pingInterval = 60;
        this.count = 1; 
        this.timeHandle = null; 
        this.sessionLst = []; 
    }

    start() {
        log.info("server: start up success "); 
        this.server = new ws.Server({
            host: this.host, 
            port: this.port, 
        }); 
        msg_manager.on_net_server_start(); 
        this.server.on("connection", function(session) {
            this.sessionLst.push(session);
            this.clientListener(session);
        }.bind(this)); 
        this.server.on("error", function(err) {
            log.error("服务器错误 ====>", err); 
        }); 
        this.server.on("close", function() {
            log.error("服务器关闭"); 
        });         
        // this.openHeartbeat(); 
    }

    openHeartbeat(){
        this.timeHandle = setInterval(()=> {
            var nowTime = new Date(); 
            var list = this.sessionLst; 
            list.forEach( (v) =>　{
                if(!v.lastMessageTime) {
                    v.lastMessageTime = nowTime.getTime(); 
                }
                if((nowTime.getTime() - v.lastMessageTime)/1000 > this.pingInterval) {
                    v.close(); 
                }
            })
        })
    }

    clientListener(session) {
        if(this.isfont == false) {  // 如果是后端服务器
            msg_manager.gate_session = session; 
        }
        msg_manager.on_net_client_connect(session); 

        session.on("message", function(data) {
            msg_manager.on_net_client_msg(session, data); 
        }); 

        session.on("error", function(error) {
            log.error("error ====> ", error); 
            session.close(); 
        }); 
    
        session.on("close", function() {
            log.error("===== net client close ======="); 
        });
    }

}

module.exports.create = function(args) {
    if(!args || !args.host || !args.port) {
        console.log("======= 参数错误 ws 主服务=======", args); 
        return; 
    }
    return new wsprotocol(args); 
}


