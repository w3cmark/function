/**样式兼容**/
function prefixStyle(style) {
    if (vendor === '') return style;
    style = style.charAt(0).toUpperCase() + style.substr(1);
    //console.log(style)
    return vendor + style;
};
var dummyStyle = document.createElement('div').style,
    vendor = (function() {
        var vendors = 't,webkitT,MozT,msT,OT'.split(','),
            t,
            i = 0,
            l = vendors.length;
        for (; i < l; i++) {
            t = vendors[i] + 'ransform';
            if (t in dummyStyle) {
                //alert(vendors[i])
                return vendors[i].substr(0, vendors[i].length - 1);
            }
        }
        return false;
    })(),
    cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '', //本demo没用到，可以给添加cssText备用
    transition = prefixStyle('transition'); //
