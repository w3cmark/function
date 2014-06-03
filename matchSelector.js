/**
* 函数功能：匹配dom元素
* only support #id, tagName, .className
* and it's simple single, no combination
*/
function matchSelector(ele, selector) {
    // if use id
    if (selector.charAt(0) === '#') {
        return ele.id === selector.slice(1);
    }
 
    // if use class
    if (selector.charAt(0) === '.') {
        return (' ' + ele.className + ' ').indexOf(' ' + selector.slice(1) + ' ') != -1;
    }
 
    // if use tagName
    return ele.tagName.toLowerCase() === selector.toLowerCase();
}
