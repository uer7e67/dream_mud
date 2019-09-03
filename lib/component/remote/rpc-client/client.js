var EventEmitter = require('events').EventEmitter;
var wsprotocol = require("./wsprotocol");
var util = require("util"); 

var STARTED = 1; 
var STOPED = 2; 

class client {

    constructor(args) {
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
        this.acceptor.connect();  
    }

    stop() {
        
    }
}

util.inherits(client, EventEmitter);

module.exports.create = function(args) {
    if(!args) {
        console.log("参数错误2", args);
        return; 
    }
    return new client(args); 
}