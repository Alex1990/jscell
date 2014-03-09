/**
 * id/classname/tagname/selector获取元素或元素列表
 */
function id(id) {
    return document.getElementById(id);
}

function tag(tag, parent) {
    parent = parent || document;
    return parent.getElementsByTagName(tag);
}

function cls(cls, parent) {
    parent = parent || document;

    // IE9+等现代浏览器
    if (parent.getElementsByClassName) {
        return parent.getElementsByClassName(cls);
    } else { // IE8及IE8以下
        var i,
            len,
            els = [],
            re = new RegExp('(^|\\s+)' + cls + '(\\s+|$)'),
            tags = parent.getElementsByTagName('*');

        len = tags.length;
        for (i = 0; i < len; i++) {
            if (re.test(tags[i].className)) {
                els.push(tags[i]);
            }
        }

        return els;
    }
}

// 兼容IE8+
function qs(selector, parent) {
    parent = parent || document;
    return parent.querySelector(selector);
}

// 兼容IE8+
function qsa(selector, parent) {
    parent = parent || document;
    return parent.querySelectorAll(selector);
}

// $函数，兼容IE8+，不支持IE6/7组合选择器，性能低
function $(selector) {
    if (selector.index(' ') == -1) {
        if (selector.index('#') > -1) {
            return document.getElementById(selector.slice(1));
        } else if (selector.index('.') > -1) {
            return document.getElementsByClassName ? 
                    document.getElementsByClassName(selector.slice(1)) :
                    document.querySelectorAll(selector);
        } else {
            return document.getElementsByTagName(selector);
        }
    } else {
        return document.querySelectorAll(selector);
    }
}