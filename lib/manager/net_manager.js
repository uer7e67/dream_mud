var proto_tools = require("../utils/proto_tool");
var log = require("../utils/log"); 

var STARTED = 1; 
var STOPED = 2; 

// 网关net连接到后端服务器

function net_manager () {
    this.clients = {};
    
    this.register = function(stype, client) {
        if(stype == undefined || stype == null) {
            log.error("register to back success , ", stype);    
        }
        log.info("register to back success , ", stype);
        this.clients[stype] = client;        
    }
    
    this.send_msg = function(stype, data) {
        var net_client = this.clients[stype]; 
        if(!net_client) {
            log.error("net client is null, send msg error");
            return; 
        }
        net_client.send_msg(data); 
    }
}

module.exports = net_manager; 