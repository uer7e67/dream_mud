



class mqttprotocol {
    constructor(){

    }
}

module.exports.create = function(args) {
    if(!args || args.port == null) {
        return; 
    }
    return new mqttprotocol(args); 
}