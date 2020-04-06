var proto_tools = require("../utils/proto_tool");

var msg_manager = function() {
    this.handle = null; 
    this.gate_session = null; 
}

msg_manager.prototype.init = function(handle) {
    if(!handle) {
        return; 
    }
    this.handle = handle; 
}; 

// #############################################
// net 客户端 

msg_manager.prototype.send_msg = function(data){
    var data = proto_tools.Encode(data); 
    this.gate_session.send(data); 
}

// net 客户端启动 
msg_manager.prototype.on_net_client_start = function(stype, client) {
    if(this.handle.hasOwnProperty("on_net_client_start")) {
        this.handle.on_net_client_start(stype, client);
    }
}

// net 接收到服务端消息 
msg_manager.prototype.on_net_server_msg = function(data) {
    if(this.handle.hasOwnProperty("on_net_server_msg")) {
        var data = proto_tools.Decode(data); 
        this.handle.on_net_server_msg(data); 
    }
}

// net 

// #############################################
// net 服务端 

// net 收到客户端的消息
msg_manager.prototype.on_net_client_msg = function(session, data) {
    if(this.handle.hasOwnProperty("on_net_client_msg")) {
        var data = proto_tools.Decode(data); 
        this.handle.on_net_client_msg(session, data); 
    }
}

// net 客户端连接 
msg_manager.prototype.on_net_client_connect = function(session) {
    if(this.handle.hasOwnProperty("on_net_client_connect")) {
        this.handle.on_net_client_connect(session); 
    }
}

// 
msg_manager.prototype.on_net_client_error = function(session) {
    if(this.handle.hasOwnProperty("on_net_client_error")) {
        this.handle.on_net_client_error(session); 
    }
}

// 前端服务器
msg_manager.prototype.on_net_client_close = function(session) {
    if(this.handle.hasOwnProperty("on_net_client_close")) {
        this.handle.on_net_client_close(session); 
    }
}

// net 服务端启动
msg_manager.prototype.on_net_server_start = function() {
    if(this.handle.hasOwnProperty("on_net_server_start")) {
        this.handle.on_net_server_start(); 
    }
}

// #############################################
// rpc 客户端 

// rpc 收到服务器的消息
msg_manager.prototype.on_rpc_server_msg = function(data) {
    if(this.handle.hasOwnProperty("on_rpc_server_msg")) {
        var data = proto_tools.Decode(data);
        this.handle.on_rpc_server_msg(data); 
    }
}

// rpc 连接服务器成功 
msg_manager.prototype.on_rpc_connect_server = function() {
    if(this.handle.hasOwnProperty("on_rpc_connect_server")) {
        this.handle.on_rpc_connect_server(); 
    }
}

// #############################################
// rpc 服务端

// rpc 服务启动 
msg_manager.prototype.on_rpc_server_start = function() {
    if(this.handle.hasOwnProperty("on_rpc_server_start")) {
        this.handle.on_rpc_server_start(); 
    }
}

// rpc 客户端消息
msg_manager.prototype.on_rpc_client_msg = function(data) {
    if(this.handle.hasOwnProperty("on_rpc_client_msg")) {
        var data = proto_tools.Decode(data);
        this.handle.on_rpc_client_msg(data); 
    }
}

// rpc 客户端连接到服务器 
msg_manager.prototype.on_rpc_client_connect = function(ip) {
    if(this.handle.hasOwnProperty("on_rpc_client_connect")) {
        this.handle.on_rpc_client_connect(ip); 
    }
}


var instance = new msg_manager(); 
module.exports = instance; 