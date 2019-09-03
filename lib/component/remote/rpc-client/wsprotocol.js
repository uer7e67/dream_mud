var ws = require("ws"); 
var util = require("util"); 
var EventEmitter = require('events').EventEmitter;
var msg_manager = require("../../../manager/msg_manager"); 
var log = require("../../../utils/log"); 

var STARTED = 1; 
var STOPED = 2; 
var TIMEOUT = 3 * 1000; 

class wsprotocol {
    constructor(args) {
        EventEmitter.call(this); 
        this.host = args.host; 
        this.port = args.rpc_port; 
        this.socket = null;    // rpc服务器 
        this.last_ping_time = -1; 
        this.last_pong_time = -1; 
        this.state = STOPED; 
        this._interval = null;  // 定时器的句柄
        this.time_handle = null; 
    }

    connect() {

        if(this.time_handle != null) {
            clearTimeout(this.time_handle); 
            this.time_handle = null; 
        }

        this.socket = new ws("ws://"+this.host+":"+this.port); 

        this.socket.on("open", () => {
            log.info("connnect to rpc server ======="); 
            this.state = STARTED; 
            msg_manager.on_rpc_connect_server(); 
            // this._interval = setInterval(() => {
            //     this.keepActive(); 
            // }, TIMEOUT);
        }); 
        
        this.socket.on("message", (data) => {
            if(data){
                msg_manager.on_rpc_server_msg(data); 
            }
        }); 

        this.socket.on("error", (error) =>{
            if(error) {
                log.error("rpc client connection error");
                return;                                                
            }
        }); 
        
        this.socket.on("close", () => {
            this.again_connection_server(); 
            // this.close(); 
        });

        this.socket.on("pong", (data, flags) => {
            this.last_pong_time = Date.now(); 
        })
    }

    again_connection_server() {
        this.time_handle = setTimeout(() => {
            this.connect();
        }, 3000);
    }

    send_msg(data){
        this.socket.send(data); 
    }

    keepActive() {
        var now = Date.now(); 
        if(this.last_ping_time > 0) {
            // 
            if(this.last_pong_time < this.last_ping_time) {
                if(now - this.last_ping_time > TIMTOUT) {
                    console.log("超时"); 
                }
                else {
                    return; 
                }
            }
            else{
                this.socket.ping(); 
                this.last_ping_time = now; 
            }
        }
        else {
            this.socket.ping(); 
            this.last_ping_time = now; 
        }
    }

    close() {
        if(this.state === STOPED) {
            return; 
        }
        this.state = STOPED; 
        if(this._interval) {
            clearInterval(this._interval); 
            this._interval = null; 
        }
        this.socket.close(); 
        this.last_ping_time = -1; 
        this.last_pong_time = -1; 
    }

}

util.inherits(wsprotocol, EventEmitter);

module.exports.create = function(args) {
    if(!args || !args.host || !args.rpc_port) {
        console.log("参数错误3", args);
        return; 
    }
    return new wsprotocol(args); 
}