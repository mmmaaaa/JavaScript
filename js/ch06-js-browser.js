/**
 * Created by KING on 2019/01/18.
 */

function getBrowser() {
    var isOpera = false;
    var isFirefox = false;
    var isChrome = false;
    var bName;
    var userAgent = window.navigator.userAgent; //包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform

    // console.log(userAgent);
    if (userAgent.indexOf('Mozilla') > 0) {
        if(userAgent.indexOf('OPR') > 0) {
            isOpera = true;
        } else {
            if(userAgent.indexOf('Chrome') > 0) {
                isChrome = true;
            } else {
                isFirefox = true;
            }
        }
    } else {}

    if(isOpera) {
        bName = "Opera";
    } else if(isChrome) {
        bName = "Chrome";
    } else if(isFirefox) {
        bName = "FF";
    } else {
        bName = "Others";
    }

    return bName;
}