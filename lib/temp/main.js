var application = require("../lib/application");
var handle = require("./handle/handle");
var config = require("../config/app.json"); 

var log4js = require("log4js"); 
var log2cfg = require("../config/log.json");
log4js.configure(log2cfg);

global.app = application.craeteApp({
    config: config, 
    name: "${opts:projectName}", 
    index: 0,
    handle: handle, 
}); 

app.start(); 