/******************************************
    函数名称： invoke
    函数功能： 执行methodName函数，并把context设成前面函数内部this指向的对象，后面如果还有参数则是赋给methodName的参数
    入口参数： methodName：函数名  context：对象名称
******************************************/
function invoke(methodName,context){
    var args = arguments;
    return function(){
        context[methodName].apply(context, [].slice.call(args,2));//截取函数传入参数，从第三个开始
        }
    }
