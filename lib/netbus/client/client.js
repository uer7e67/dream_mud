var ws = require("ws"); 
var log = require("../../utils/log"); 
var msg_manager = require("../../manager/msg_manager"); 
var net_manager = require("../../manager/net_manager"); 

var STARTED = 1; 
var STOPED = 2; 

class ClientTmp {

    constructor(conf) {
        this.host   = conf.host; 
        this.port   = conf.port; 
        this.socket = null; 
        this.conf   = conf; 
        this.time_handle = null; 
        this.state  = STOPED; 
    }

    connect_server() {
        if(this.state == STARTED) {
            return; 
        }
        if(this.time_handle != null) {
            clearTimeout(this.time_handle); 
            this.time_handle = null; 
        }
        this.socket = new ws("ws://"+this.host+":"+this.port); 
        
        this.socket.on("open", () => {
            this.state = STARTED; 
            log.info("连接", this.host, ":", this.port, "服务器成功 ..."); 
            msg_manager.on_net_client_start(); 
        }); 
        
        this.socket.on("message", (data) => {
            msg_manager.on_net_server_msg(data);
        }); 

        this.socket.on("error", (error) =>{
            this.state = STOPED; 
            log.error("连接", this.host, ":", this.port, "连接到服务器发生错误 ...")
            return; 
        }); 
        
        this.socket.on("close", () => {
            this.state = STOPED; 
            log.error("连接", this.host, ":", this.port, "服务器失败 ..."); 
            this.again_connection_server(); 
        });
    }

    send_msg (data) {
        if(this.state == STOPED) {
            log.error("net client 已断开连接"); 
            return; 
        }
        this.socket.send(data); 
    }

    again_connection_server() {
        this.time_handle = setTimeout(() => {
            this.connect_server();
        }, 3000);
    }
}

// String type {game, pvp}
module.exports.create = function(args) {
    if(!args)  {
        return; 
    }
    return new ClientTmp(args); 
}; 



