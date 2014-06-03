/******************************************
    函数名称： hasClass
    函数功能： 判断是否包含有classname
    入口参数： node：获取文本的节点      classname：样式名称
******************************************/
function hasClass(node, className){
    var names = node.className.split(/\s+/);
    for(var i=0;i < names.length;i++){
        if(names[i] == className) return true;
        }
    return false;
}
