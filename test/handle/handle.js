var log = require("log4js").getLogger("test");
var EventEmitter = require('events').EventEmitter;
var util = require("util"); 

var Handle = function(){
    
    EventEmitter.call(this); 

    this.start = function(){}

    this.on_net_server_start = function() {
    }

    this.on_net_client_connect = function(session){
    }, 

    this.on_net_client_msg = function (session, data) {
        var ctype = data.ctype; 
        switch (ctype) {
            case value:
                break;
            default:
                break;
        }
    }    
}

util.inherits(Handle, EventEmitter);

var instance = new Handle(); 
module.exports = instance; 