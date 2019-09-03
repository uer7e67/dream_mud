var ws = require("ws"); 
var log = require("../utils/log"); 

class Server{

    constructor(param, handle, openHb, ping){
        this.name = param.name || "default name"; 
        this.host = param.host || null; 
        this.port = param.port || null; 
        this.handle = handle   || {}; 
        this.handle.config = param;
        this.isOpenHb = openHb || false; 
        this.pingInterval = ping || 60;
        this.count = 1; 
        this.timeHandle = null; 
        this.sessionLst = []; 
    }

    start() {
        log.info("server:", this.name, "start up success"); 
        this.server = new ws.Server({
            host: this.host, 
            port: this.port, 
        }); 
        this.server.on("connection", function(session) {
            if(!session) {
                return; 
            }
            this.sessionLst.push(session); 
            this.clientListener(session); 
        }.bind(this)); 
    
        this.server.on("error", function(err) {
            log.error("服务器错误 ====>", err); 
        }); 
    
        this.server.on("close", function() {
            log.error("服务器关闭"); 
        }); 

        if(this.isOpenHb) {
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
    }

    clientListener(session) {
        var self = this; 
        self.handle.on_connect_client(session); 

        session.on("error", function(error) {
            log.error("error ====> ", error); 
            session.close(); 
        }); 
    
        session.on("close", function() {
            self.handle.on_disconnect(session); 
        });

        session.on("message", function(data) {
            self.handle.on_recv_client(session, data);
        }); 
    }
}


module.exports = Server; 
