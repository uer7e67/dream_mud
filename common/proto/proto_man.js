

module.exports = {

    PJSON: 1, 
    PBUF: 2, 

    encode_msg : function(str) {
        return JSON.stringify(str); 
    }, 

    decode_msg : function(str) {
        return JSON.parse(str); 
    }

}