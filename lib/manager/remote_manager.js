var proto_tools = require("../utils/proto_tool");

var STARTED = 1; 
var STOPED = 2; 

function remote_manager() {
    this.clients = [];
    this.index = 0; 
    this.send_msg = function(data) {
        console.log("发送数据 ===>",data, this.clients.length); 
        if(this.clients.length == 0) {
            console.log("没有发现rpc服务器");
            return; 
        }
        if(this.clients[this.index].acceptor.state == STOPED) {
            this.clients[this.index] = null; 
            delete this.clients[this.index]; 
            console.log(this.clients.length); 
            this.send_msg(data); 
        }else{
            var data =proto_tools.Encode(data);
            this.clients[this.index].acceptor.send_msg(data);
            this.index ++;
        }
        if((this.index) >= this.clients.length) {
            this.index = 0; 
        }
    }
}


module.exports = remote_manager;