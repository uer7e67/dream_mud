var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
var assert = require('assert');
var Urls = 'mongodb://localhost:27017';
var DataBase = "game"; 

/**
 * 增加
 * @param {*} table 
 * @param {*} data 
 * @param {*} selector 
 * @param {*} cb 
 */
var add = function (table, data, selector, cb) {
    table.insertOne(data, function (err, result) {
        assert.equal(err, null);
        cb(result); 
    });
}

var adds = function (table, data, selector, cb) {
    table.insertMany(data, function (err, result) {
        assert.equal(err, null);
        cb(result); 
    });
}

/**
 * 删除 
 * @param {*} db 
 * @param {*} collections 
 * @param {*} selector 
 * @param {*} fn 
 */
var deletes = function (table, data, selector, cb) {
    table.deleteOne(selector, function(err, result) {
        assert.equal(err, null);
        cb(result); 
    })
};

/**
 * 修改
 * @param {*} db 
 * @param {*} collections 
 * @param {*} selector 
 * @param {*} fn 
 */
var find = function (table, data, selector, cb) {
    table.find(selector).toArray(function (err, res) { 
        assert.equal(err, null);    
        cb(res); 
    }); 
}

//（权限控制） -- 暂时没有用
// MongoClient.connect(Urls, function (err, db) {
//     find(db, "powers", null, function (d) {
//         console.log("123s");
//         console.log(d.length);
//     });
// });

/**
 * 更新
 * @param {*} db 
 * @param {*} collections 
 * @param {*} selector 
 * @param {*} fn 
 */
var updates = function (table, data, selector, cb) {
    table.updateOne(data, selector, function (err, result) {
        assert.equal(err, null);  
        cb(); 
    });
}

var methodType = {
    "add": add,
    "add+": adds, 
    "update": updates,
    "delete": deletes,
    "find": find,
};

/**
 * @param {表名字} tablename 
 * @param {操作} type 
 * @param {数据} data 
 * @param {筛选器} selector 
 * @param {回调} cb 
 */


class mongodbMgr {
    constructor() {
        this._db = null; 
    }

    // 链接数据库
    connect() {   
        MongoClient.connect(Urls, {useNewUrlParser:true},  (err, client) => {
            if(err) return; 
            console.log("db connect success"); 
            this._db = client.db(DataBase); 
        });
    }

    // 操作数据库
    crud(tablename, type, data, selector, cb) {
        if(!this._db) {
            console.log("没有连接到数据库 ！！！"); 
            return; 
        }
        var table = this._db.collection(tablename); 
        methodType[type](table, data, selector, cb); 
    }
}


var _instance = new mongodbMgr(); 
module.exports = _instance; 



