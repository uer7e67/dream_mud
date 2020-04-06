var wsprotocol = require("./wsprotocol"); 
var EventEmitter = require('events').EventEmitter;
var util = require("util"); 

var STARTED = 1; 
var STOPED = 2; 

class server {

    constructor(args){
        EventEmitter.call(this);
        this.args = args || {}; 
        this.state = STOPED; 
        this.acceptor = null; 
    }

    start() {
        if(this.state == STARTED) {
            return; 
        }
        this.state = STARTED; 
        this.acceptor = wsprotocol.create(this.args); 
        this.acceptor.listen();
    }

    stop() {
        if(this.state === STOPED) {
            return; 
        }
        this.state = STOPED; 
        this.acceptor.stop();
    }
}


util.inherits(server, EventEmitter);

module.exports.create = function(args){
    if(!args) {
        console.error("远程服务错误 参数");
        return; 
    }
    return new server(args); 
}
