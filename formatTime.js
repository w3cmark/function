/*
* 函数功能：JS格式化时间
*/
var formatTime = function(time, format) {
    var t = new Date(time);
    //alert(t)
    var tf = function(i) {
        return (i < 10 ? '0' : '') + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}
formatTime(new Date().getTime(), 'yyyy-MM-dd HH:mm:ss')
