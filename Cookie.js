/******************************************
    对象名称： Cookie
    包含的函数：Cookie.get()  Cookie.set()
    函数功能： 读取和设置cookie
    入口参数： Name：cookie名称
******************************************/
var Cookie = {
    "get": function(check_name) {
        check_name = encodeURIComponent(check_name);
        var a_all_cookies = document.cookie.split(";"), a_temp_cookie = "", cookie_name = "", cookie_value = "", b_cookie_found = !1, i = "", len = a_all_cookies.length;
        for (i = 0; i < len; i++) {
            a_temp_cookie = a_all_cookies[i].split("="), cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, "");
            if (cookie_name == check_name) return b_cookie_found = !0, a_temp_cookie.length > 1 && (cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ""))), cookie_value;
            a_temp_cookie = null, cookie_name = "";
        }
        if (!b_cookie_found) return null;
    },
    "set": function(name, value, expires, path, domain, secure) {
        var today = new Date;
        today.setTime(today.getTime()), expires && (expires = expires * 1e3 * 60 * 60 * 24);
        var expires_date = new Date(today.getTime() + expires);
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + (expires ? ";expires=" + expires_date.toGMTString() : "") + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + (secure ? ";secure" : "");
    },
    "remove": function(name) {
        Cookie.set(name, 1, -1, "/", "baidu.com");
    }
};
