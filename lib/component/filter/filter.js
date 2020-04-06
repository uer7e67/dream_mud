var fs = require("fs");
var path = require("path"); 

class Filter {
    constructor() {
        this.name = "__filter__"; 
        this.filter = null; 
    }
    
    start(){
        
        var p = path.resolve(__dirname, '../config/key_words.txt');
        var myKeys=fs.readFileSync( p,'utf8');
        // log.info("过滤器初始化!!!");
        this.filter = new RegExp(myKeys);
    }

    verify(string) {
        this.filter.test(string); 
    }

    stop(){

    }
}

module.exports.create = function(){
    return new Filter(); 
}