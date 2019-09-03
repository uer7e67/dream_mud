function get_sname (stype) {
    switch (stype) {
        case 1: 
            return "auth"
        case 2: 
            return "chat"
        case 3: 
            return "fight"
        default:
            return "game"; 
    }
}

// protobuf 协议 
class ppbuf {
    static Encode(stype, ctype, data) {
        if(stype === undefined || ctype === undefined) {
            return; 
        }
        var sname    = get_sname(stype); 
        var msg_name = protoMsg[sname][ctype]; 
        var msgType  = g_proto['wl'][msg_name];
        var msg      = msgType.create(data);
        var bytes    = msgType.encode(msg).finish();
        return this.writePack(stype, ctype, bytes); ; 
    }
 
    static Decode(bytes) {
        var stype    = this.getStype(buf); 
        var ctype    = this.getCtype(buf); 
        var buf      = this.readPack(bytes); 
        var sname    = get_sname(stype); 
        var msg_name = protoMsg[sname][ctype]; 
        var msgType  = g_proto['wl'][msg_name];
        var msg      = msgType.decode(buf);
        var data     = msgType.toObject(msg, {
                            longs: Number,  enums: String, bytes: String,
                        });
        data.stype = stype;
        data.ctype = ctype; 
        return data;
    }

    /**
     * @param {数据} bytes 
     * @param {服务号} stype 
     * @param {命令号} ctype 
     */
    static writePack(stype, ctype, bytes) {
        var ab = new ArrayBuffer(bytes.length + 4); 
        var dv = new DataView(ab);
        dv.setUint16(0, stype, false); 
        dv.setUint16(2, ctype, false); 
        for(var i=0, j=4; i<bytes.length; i++) {
            dv.setUint8(j+i, bytes[i]); 
        }
        return dv.buffer;
    }

    // 获得服务号 
    static getStype(bytes) {
        var dv = new DataView(bytes); 
        return dv.getUint16(0, false); 
    }

    // 获得命令号 
    static getCtype(bytes) {
        var dv = new DataView(bytes);
        return dv.getUint16(2, false);  
    }

    // 获得包buf
    static readPack(bytes) {
        var a = new Uint8Array(bytes, 4);
        return a; 
    }       
}

// json协议
class pjson {
    static Encode(data) {
        return JSON.stringify(data);
    }
 
    static Decode(bytes) {
        return  JSON.parse(bytes)
    }
}

var ProtoTool = {
    proto : pjson, 
    Encode : function(data){
        if(this.proto.hasOwnProperty("Encode")) {
            return this.proto.Encode(data);
        }
        return null; 
    },
    Decode: function (data) {
        if(this.proto.hasOwnProperty("Decode")) {
            return this.proto.Decode(data); 
        }
    }
}

module.exports = ProtoTool;

// var data = ProtoTool.encode(1, 2, {
//     "name" : "小明", 
//     "age" : 10, 
//     "id" : "3333"
// })
// console.log(data); 
// data = ProtoTool.decode(data); 
// console.log(data); 