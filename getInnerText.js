/******************************************
    函数名称： getInnerText
    函数功能： 获取指定节点里面的文本
    入口参数： node：获取文本的节点
******************************************/
function getInnerText(node){
    if(node.nodeType == 3){//文本节点
        return node.nodeValue.trim();
    }else if(node.nodeType == 1){
        var ret = "";
        for (var i=0; i < node.childNodes.length;i++){
            ret += getInnerText(node.childNodes[i]);
        }
        return ret;
    }
}
