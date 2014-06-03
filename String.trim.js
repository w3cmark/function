/******************************************
    函数名称： String.trim
    函数功能： 给字符串去掉空格
******************************************/
String.prototype.trim = function(){//
    return this.replace(/^\s+/,"").replace(/\s+$/,"");
    }
