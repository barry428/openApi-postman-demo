var time = new Date().getTime().toString();
var apiKey = "xxx";
var secretKey = "xxx";
var method = "GET";
var requestPath = "/sapi/v1/account";

var params = request.data;
var objStr = JSON.stringify(params);
console.log("参数:" + params);
console.log("objStr: " + objStr);

var signStr = "";
if (objStr != '{}') {
	signStr = time + method + requestPath + params
} else {
	signStr = time + method + requestPath
}
console.log("签名字符串:" + signStr);

//签名
var sign = CryptoJS.HmacSHA256(signStr, secretKey);
sign = CryptoJS.enc.Hex.stringify(sign);
console.log("签名:" + sign);
pm.environment.set("sign", sign);
pm.environment.set("time", time);
pm.environment.set("apiKey", apiKey);
pm.environment.set("requestPath", requestPath);
