
/*
// node builds.js + 工程名 
*/

var fs = require('fs'); 

function makeProject(projectName){
    var isexist = fs.existsSync(projectName);
    if(isexist == true) {
        console.log("目录已经存在"); 
        return; 
    }
    fs.mkdirSync(projectName); 
    // 创建子文件夹 
    fs.mkdirSync(projectName + "/controller"); 
    fs.mkdirSync(projectName + "/model"); 
    fs.mkdirSync(projectName + "/config"); 
    fs.mkdirSync(projectName + "/handle"); 
    // 创建handle文件 
    fs.writeFileSync(projectName+"/handle/handle.js", "");
    fs.writeFileSync(projectName+"/main.js", "");
    // 写入数据
    writeMain(); 
    writeHandle(); 
}

function writeMain() {
    var handlePath = projectName+ "/main.js"; 
    var foo = fs.existsSync(handlePath); 
    if(foo == true) {
        var temp = fs.readFileSync('./lib/temp/main.js', "utf-8");
        createFileByTemp(handlePath, temp); 
    }
}

function writeHandle() {
    var handlePath = projectName + "/handle/handle.js"; 
    var foo = fs.existsSync(handlePath); 
    if(foo == true) {
        var temp = fs.readFileSync('./lib/temp/handle.js', "utf-8");
        createFileByTemp(handlePath, temp); 
    }
}

/**
 * 根据模板文件创建项目文件
 * @param {path} path 
 * @param {temp} temp 
 */
function createFileByTemp(path, temp) {
    var foo = fs.existsSync(path); 
    if(foo === true) {
        var res = doReplace(temp)
        fs.writeFileSync(path, res, 'utf-8');
    }
}

// 根据模板替换掉相应的部分
function doReplace(src) {
	if (!src) {
		return src;
	}
    var res, a, b, arr, t, index, m, res= ""; 
    var i = 0; 
	var ptn = /\$\{(.*?)\}/g;
    while(m = ptn.exec(src)) {
        b = m[0];   // 需要格式化的部分 
        a = m[1]; 
        index = m.index; 
        arr = a.split(':');
        switch (arr[1]) {
            case "projectName":
                t = projectName;
                break;
            default:
                break;
        }
        res += src.substring(i, index);
        res += t; 
        i = index + b.length; 
    }
    if(i < src.length) {
        res += src.substring(i)
    }
    console.log(res); 
	return res;
}

var projectName =  process.argv[2]; 
if(projectName == undefined) {
    console.debug("error:没有定义工程名"); 
    return; 
}

makeProject(projectName);