var redis = require("redis");

function redis_center(args){
	this.args = args || {}; 
	this.client = null; 
}

redis_center.prototype.connect_to_server = function() {
	this.client = redis.createClient({
		host: this.args.host,
		port: this.args.port,
		db: this.args.db_index,
	}); 

	this.client.on("error", function(err) {
		console.log("redis ====> error"); 
	})
}

module.exports = create(args) {
	if(!args || !args.host || !args.port || !args.db_index) {
		console.log("redis 参数错误");
		return; 
	}
	return new redis_center(args); 
}



function set_uinfo_inredis(uid, uinfo) {
	if (center_redis === null) {
		return;
	}

	var key = "bycw_center_user_uid_" + uid;
	uinfo.uface = uinfo.uface.toString();
	uinfo.usex = uinfo.usex.toString();
	uinfo.uvip = uinfo.uvip.toString();
	uinfo.is_guest = uinfo.is_guest.toString();

	log.info("redis center hmset " + key);
	center_redis.hmset(key, uinfo, function(err) {
		if(err) {
			log.error(err);
		}
	});
}

// callback(status, body)
function get_uinfo_inredis(uid, callback) {
	if (center_redis === null) {
		callback(Respones.SYSTEM_ERR, null);
		return;
	}

	var key = "bycw_center_user_uid_" + uid;
	log.info("hgetall ", key);

	center_redis.hgetall(key, function(err, data) {
		if (err) {
			callback(Respones.SYSTEM_ERR, null);
			return;
		}

		var uinfo = data;
		uinfo.uface = parseInt(uinfo.uface);
		uinfo.usex = parseInt(uinfo.usex);
		uinfo.uvip = parseInt(uinfo.uvip);
		uinfo.is_guest = parseInt(uinfo.is_guest);

		callback(Respones.OK, uinfo);
	});
}

