/*
// 获取距离 ele 最近的符合 selector 的父/组级元素
// selector 只能用简单的选择器，#id, tagName, .className，单个无组合
*/
function closest(ele, selector) {
    var result,
        tmp = ele.parentNode;
 
    while (tmp) {
        if (matchSelector(tmp, selector)) {
            result = tmp;
            break;
        }
        tmp = tmp.parentNode;
    }
 
    return result;
}
