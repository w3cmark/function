/******************************************
    函数名称： delClass
    函数功能： 删除样式
    入口参数： 0：dom节点  classname：样式名称
******************************************/
function delClass(o, className){
    var names = o.className.split(/\s+/);
    for ( var i=0;i < names.length;i++){
        if(names[i] == className) delete names[i];
        }
    o.className = names.join(" ");
    return o;
}
