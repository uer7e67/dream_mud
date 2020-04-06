var EventEmitter = require('events').EventEmitter;
var util = require("util"); 
var ws = require("ws"); 
var msg_manager = require("../../../manager/msg_manager"); 

class wsprotocol {

    constructor(args) {
        EventEmitter.call(this); 
        this.args = args || {}; 
        this.sockets = [];    // 这里的 socket列表是一类服务的链接维护
        this.msgQueues = {}; 
        this.sid = 0; 
        this.index = 0; 
    }

    listen() {
        this.server = new ws.Server({ port: this.args.rpc_port}); 
        msg_manager.on_rpc_server_start(); 

        this.server.on("connection", function(socket) {
            msg_manager.on_rpc_client_connect(socket._socket.remoteAddress); 
            this.clientListener(socket); 
        }.bind(this)); 
    
        this.server.on("error", function(err) {
            console.log("error ====> ", err); 
        }); 
    
        this.server.on("close", function() {
            console.log("error ====> ", err);
        }); 
    }

    sendMsg(data){
    }

    clientListener(socket) {
        this.sockets.push(socket); 
        socket.on("message", function(data) {
            console.log("接收到rpc消息 =====>", data); 
            msg_manager.on_rpc_client_msg(data);
        }); 
        
        socket.on("error", function(error) {
            console.log("error", error); 
        }); 
    
        socket.on("close", function(code, message) {
            // delete this.sockets[id]; 
        });

    }
}

util.inherits(wsprotocol, EventEmitter);

module.exports.create = function(args) {
    if(!args || !args.rpc_port) {
        return;
    }
    var server = new wsprotocol(args);
    return server; 
}