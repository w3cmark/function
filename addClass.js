/******************************************
    函数名称： addClass
    函数功能： 添加样式
    入口参数： 0：dom节点  classname：样式名称
******************************************/
function addClass(o, className){
    if(!hasClass(o,className)) o.className += ""+className;
    return o;
}
