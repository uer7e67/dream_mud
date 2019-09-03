var EventEmitter = require('events').EventEmitter;
var util = require("util"); 
var log = require("./utils/log"); 

var RpcServer = require("./component/remote/rpc-server/server");
var RpcClient = require("./component/remote/rpc-client/client"); 
var NetServer = require("./netbus/server/server"); 
var NetClient = require("./netbus/client/client"); 
var MsgManager = require("./manager/msg_manager"); 
var RemoteManager = require("./manager/remote_manager"); 
var NetManager = require("./manager/net_manager"); 

class Application {
    constructor(args) {
        EventEmitter.call(this); 
        this.args         = args;
        this.config       = args.config;   // 总配置
        this.sname        = args.name; 
        this.sid          = args.id;  
        this.handle       = args.handle; // 
        this.server       = null;        // 主服务
        this.components   = {};          // 组件
        this.remoteServer = null;        // 远程服务
        this.rpc          = {};          // 远程
        this.net          = {};          // 连接的后端服务
        this.runTime      = null;        // 
        this.msgManager   = MsgManager;        // 消息管理
        this.init(); 
    }

    init() {
        this.init_main_server(); 
        this.msgManager.init(this.handle); 
    } 

    start(){
        if(this.server != null) {
            this.server.start(); 
            this.handle.start(); 
            this.loadDefaultComponent(); 
            this.connectBehindServer(); 
        }
    }
} 

util.inherits(Application, EventEmitter); 

// 绑定脚本文件 
Application.prototype.bindHandle = function(handle) {
    this.handle = handle; 
}

Application.prototype.getConfig = function(){
    for (var idx of this.config[this.sname]) {
        if(idx.id == this.sid) {
            return idx; 
        }
    }
    return null; 
}

// 加载默认的组件
Application.prototype.loadDefaultComponent = function(){
    var appcfg = this.getConfig(); 
    if(appcfg == null) {
        log.error("配置错误"); 
        return; 
    }
    if(appcfg.remote == true) {
        log.info("====== create remote server ======="); 
        this.remoteServer = RpcServer.create(appcfg); 
        this.remoteServer.start(); 
    }
    log.info("====== connnection remote server ======="); 
    var clientList = appcfg.callremote;
    for(var idx in clientList) {
        var sn = clientList[idx];   // 服务器名字
        log.info("连接rpc服务器 ====>", sn)
        this.rpc[sn] = new RemoteManager();
        var serverList = this.config[clientList[idx]]; 
        for(var k in serverList) {
            var client = RpcClient.create(serverList[k]);
            client.start(); 
            this.rpc[sn].clients.push(client); 
        }
    }
}

// 连接到后端服务器 
Application.prototype.connectBehindServer = function() {
    var appcfg = this.getConfig(); 
    if(appcfg == null) {
        log.error("配置错误"); 
        return; 
    }
    if(appcfg.isfont == false) {
        return; 
    }
    log.info("====== connnection behind server ============"); 
    for(var idx in this.config) {
        var typecfg = this.config[idx];  // []  
        this.net[idx] = new NetManager(); 
        for(var k in typecfg) {
            if(typecfg[k].isfont == true) {
                continue; 
            }
            var client = NetClient.create(typecfg[k]); 
            this.net[idx].register(typecfg[k].id, client); 
            client.connect_server();
        }
    }
}

// 启动主服务 
Application.prototype.init_main_server = function() {
    var appcfg = this.getConfig(); 
    if(appcfg == null) {
        log.error("配置错误"); 
        return; 
    }
    this.server = NetServer.create({
        config: appcfg, 
        handle: this.handle, 
    }); 
}

module.exports.craeteApp = function(args){
    if(!args || !args.config || !args.name || args.index<0 || !args.handle ) {
        log.error("缺少参数1", args);
        return; 
    }
    var app = new Application(args); 
    return app; 
}