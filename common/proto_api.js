
var proto_api = {

    "PUBLIC":{
        "c2s_login" : 1, 
        "s2c_login" : 2, 
        "c2s_get_zones" : 3, 
        "s2c_get_zones" : 4,
        "c2s_verify_token" : 5, 
        "s2c_verify_token": 6,
    },

    "GAME": {
        "s2c_broadcast": 0, 
        "c2s_enter_game": 1,  
        "s2c_enter_game": 2,  
        "c2s_create_role": 3,  
        "s2c_create_role": 4,  
        "c2s_enter_new_map": 5,  
        "s2c_enter_new_map": 6, 
        "c2s_move_pos": 7, 
        "s2c_move_pos" : 8,  
        "c2s_throw_good": 9,  
        "s2c_throw_good": 10, 
    }

}

module.exports = proto_api; 