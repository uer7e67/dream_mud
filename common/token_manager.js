
var secret_key = 'mmdmkwef323';

var UToken = function(){
    this.uid = null;
    this.exp = null;
};

UToken.prototype.init = function(userid) {
    this.uid = userid; 
    this.exp = new Date().getTime() + 1000 * 60 * 60; 
}

UToken.prototype.refresh = function(){
    this.exp = new Date().getTime() + 1000 * 60 * 60;
};

//判断是否合法
UToken.prototype.isValid = function(){
    if (this.userid && this.exp) {
        return true;
    }
    return false;
};

//判断是否过期   已过期返回yes
UToken.prototype.isOutOfDate = function(){
    var now = new Date().getTime();
    return (now > this.exp);
};

UToken.prototype.encrypt = function(){
    var crypto = require('crypto');
    var cipher = crypto.createCipher('aes-128-cbc',secret_key);
    var str = JSON.stringify(this);
    var crypted = cipher.update(str,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
};

UToken.prototype.decrypt = function(tokenString){
    if (tokenString) {
        var crypto = require('crypto');
        var decipher = crypto.createDecipher('aes-128-cbc', secret_key);
        var dec = decipher.update(tokenString,'hex','utf8');
        dec += decipher.final('utf8');
        var obj = JSON.parse(dec);
        console.log("解析后 ===>", obj)
        this.uid = obj.userid;
        this.exp = obj.exp;
    } else {
        this.uid = null;
        this.exp = null;
    }
}

module.exports = UToken;



// var token = new UToken("dddd")
// var str = token.encrypt()
// var token2 = new UToken("")
// var time1 = new Date().getTime()
// token2.decrypt(str)
// var time2 = new Date().getTime()
// console.log((time2 - time1) + "ms")
// uid : {
//     user_token : "加密过后的uid"
//     access_token : "随机的24位字符串"
//     overtime: "过期时间" 
// }
// 第一步 收到客户端的user_token 解析为 uid 


// https://book.8btc.com/books/1/bitcoin-on-nodejs-master/_book/3/3-3.html

// https://github.com/dongyuanxin/node-blockchain

// https://github.com/lhartikk/naivechain