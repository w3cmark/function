/******************************************
    函数名称： Math.divide
    函数功能： 两个数相除 解决js小数运算不准确
    入口参数： a，b：数字
******************************************/
Math.divide = function (a,b){
    var tmp,powers;
    (tmp = (a = String(a)).split('.')[1]) && (powers = tmp.length),
    (tmp = (a = String(b)).split('.')[1]) && (powers = tmp.length);
    return a.replace('.','')/b.replace('.','')/Math.pow(10,powers);
    }
