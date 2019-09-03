var GameConfig = {
    version: "1.0.0", 

    // 生产测试配置
    debug: {

        gate: {
            name: "网关服务器", host: "127.0.0.1", port: 7030, 
        }, 

        baselist: {
            "AuthServer" : {"name": "用户服务器", "stype": 1, "host": "127.0.0.1", "port": 7031},
            "ChatServer" : {"name": "聊天服务器", "stype": 2, "host": "127.0.0.1", "port": 7032},
            "PvPServer": {"name": "PVP服务器",  "stype": 3, "host": "127.0.0.1", "port": 7033},
        }, 

        zonelist: [
            {name: "一区服务器", stype: 10, host: "127.0.0.1", port: 7041}, 
            // {name: "二区服务器", stype: 11, host: "127.0.0.1", port: 7042},
            // {name: "三区服务器", stype: 12, host: "127.0.0.1", port: 7043},
        ], 

    }, 

    // 发布模式
    release: {
        gate: {
            name: "网关服务器", host: "127.0.0.1", port: 7030, 
        }, 

        baselist: [
            {name: "分区服务器", stype: 1, host: "127.0.0.1", port: 7031}, 
            // {name: "聊天服务器", stype: 2, host: "127.0.0.1", port: 7032},
            // {name: "战斗服务器", stype: 3, host: "127.0.0.1", port: 7033},
        ], 

        zonelist: [
            {name: "一区服务器", stype: 10, host: "127.0.0.1", port: 7041}, 
            {name: "二区服务器", stype: 11, host: "127.0.0.1", port: 7042},
            {name: "三区服务器", stype: 12, host: "127.0.0.1", port: 7043},
        ]
    }, 

};

module.exports = GameConfig; 