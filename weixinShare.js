/******************************************
    函数功能： 获取图片分享到微信
******************************************/
(function() {
    var firstImgs = document.querySelectorAll("img"),
        firstImgSrc = "http://www1.pcauto.com.cn/zt/gz20140312/wapbaodian/img/ycbd.png";
    for (var i = 0, len = firstImgs.length; i < len; i++) {
        if (firstImgs[i].getAttribute('src').indexOf('http://count') == -1 && firstImgs[i].getAttribute('src').indexOf('http://acount') == -1 && firstImgs[i].getAttribute('src').indexOf('http://i1.3conline.com/') == -1) {
            if (firstImgs[i].getAttribute('src2')) {
                firstImgSrc = firstImgs[i].getAttribute('src2');
                break;
            } else {
                firstImgSrc = firstImgs[i].getAttribute('src');
                break;
            }
        }
    }
    var dataForWeixin = {
        appId: "",
        imgUrl: firstImgSrc,
        url: window.location.href,
        title: document.title,
        desc: document.title,
        fakeid: "",
        callback: function() {}
    };
 
    var onBridgeReady = function() {
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": dataForWeixin.appId,
                "img_url": dataForWeixin.imgUrl,
                "img_width": "120",
                "img_height": "120",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title
            }, function(res) {
                (dataForWeixin.callback)();
            });
        });
 
        WeixinJSBridge.on('menu:share:timeline', function(argv) {
            (dataForWeixin.callback)();
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": dataForWeixin.imgUrl,
                "img_width": "120",
                "img_height": "120",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title
            }, function(res) {});
        });
 
        WeixinJSBridge.on('menu:share:weibo', function(argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": dataForWeixin.title,
                "url": dataForWeixin.url
            }, function(res) {
                (dataForWeixin.callback)();
            });
        });
    };
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }
    } else {
        onBridgeReady();
    }
})();
