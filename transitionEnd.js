/*
* 函数功能：transitionEnd兼容
*/
transitionEndEvent = (function() {
 
    if (vendor === false) return false;
    var transitionEnd = {
        '': 'transitionend',
        'webkit': 'webkitTransitionEnd',
        'Moz': 'transitionend',
        'O': 'oTransitionEnd',
        'ms': 'MSTransitionEnd'
    };
    return transitionEnd[vendor];
 
})();
