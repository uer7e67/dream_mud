
# DreamMud   
个人非常喜欢mud这种古老而有魅力的游戏 近几年mud有了新的生命 比较优秀的作品 放置江湖就是其中之一  
开始做这个类型的游戏时候我发现了pomelo这个框架 但是我感觉这个框架比较重 启动时候的一堆乱七八糟的日志看着就很烦躁  
于是我着手开发一套轻量的 便于开发的分布式服务器框架 本服务器框架参考了pomelo的同时 加入了我对服务器的一些认知以及想法  
联系方式 qq905186072  微信号bilan2017   
  
    
#### 目录结构  
    - components :　{  
        channel:　      // 频道   
        remote:         // 远程服务  
        taskManager:    // 定时任务   
        handle:         // 自定义  
        db:             // 数据库  
        filters : {}    // 过滤器    
      }
    - config:   
    - server:           // 主服务   
    - nameSpace:        // 服务名  
    - rpcMan            //  
    - netMan            //   
    - remoteServer      // rpc server  
    - type:             // 服务类型  
    - runtime:          // 运行时间  

  
    
#### handle 绑定的事件消息   
     net 客户端启动(前端)      on_net_client_start  
     net 接收到服务端消息      on_net_server_msg  
     net 收到客户端的消息      on_net_client_msg  
     net 客户端连接成功(后端)  on_net_client_connect  
     net 服务端启动           on_net_server_start  
     rpc 收到服务器的消息      on_rpc_server_msg   
     rpc 服务启动             on_rpc_server_start  
     rpc 客户端消息           on_rpc_client_msg   

#### 使用方式   
后端服务器 rpc 调用方式  
      app.rpc.pvp.send_msg()   
前端服务器 后端服务器调用方式 
      app.net.game.send_msg()  
后端服务器 发送到前端服务器 
      app.msgManager.send_msg();   


#### 新建一个工程   
node build + 工程名   
  
#### 配置使用方式  
例子  {"id": 1, "host":"127.0.0.1", "port": 9300, "isfont": false, "remote": true, "rpc_port": 9301, "callremote": ["public", "gate"]}   
isfont 代表前端后端   
remote 是否启动rpc服务器     
rpc_port  rpc端口   
callremote 代表可调用的rpc服务器   
