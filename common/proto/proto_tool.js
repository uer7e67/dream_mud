var g_proto = require("./proto");
var protoMsg = require("./protoMsg"); 

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

let tools = class tools {

    static encode(stype, ctype, data) {
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
 
    static decode(stype, ctype, bytes) {
        if(stype === undefined || ctype === undefined) {
            return; 
        }
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
    static write_pack(stype, ctype, bytes) {
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
    static get_stype(bytes) {
        var dv = new DataView(bytes); 
        return dv.getUint16(0, false); 
    }

    // 获得命令号 
    static get_ctype(bytes) {
        var dv = new DataView(bytes);
        return dv.getUint16(2, false);  
    }

    // 获得包buf
    static read_pack(bytes) {
        var a = new Uint8Array(bytes, 4);
        return a; 
    }

}


module.exports = tools;