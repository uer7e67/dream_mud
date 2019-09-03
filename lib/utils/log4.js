var log4js = require("log4js"); 
var utils = require("./utils");

/**
 * Configure pomelo logger
 */
module.exports.configure = function(filename, opts) {
  var configobj = utils.replaceProperties(filename, opts)
  log4js.configure(configobj);
};
