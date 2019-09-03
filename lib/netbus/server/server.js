var wsprotocol = require("./wsprotocol"); 

var STARTED = 1; 
var STOPED = 2; 


class server {

    constructor(args) {
        this.config = args.config || {}; 
        this.state = null; 
        this.acceptor = null; 
    }

    start() {
        if(this.state == STARTED) {
            return; 
        }
        console.log("========= 主服务启动 =========")
        this.state = STARTED; 
        this.acceptor = wsprotocol.create(this.config);
        this.acceptor.start(); 
    }

    stop() {
        this.state= STOPED; 
    }

}

module.exports.create = function(args){
    if(!args || !args.config) {
        return; 
    }
    return new server(args); 
}