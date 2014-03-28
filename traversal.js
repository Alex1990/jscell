/**
 * 遍历节点的方法
 */

// 所有子元素节点
function children(el) {
    if ('children' in el) {
        return el.children;
    } else {
        var i,
            len,
            arr = [],
            childNodes = el.childNodes;

        for (i = 0, len = childNodes.length; i < len; i++) {
            if (childNodes[i].nodeType === 1) {
                arr.push(childNodes[i]);
            }
        }
        return arr;
    }
}

// 第一个子元素节点
function fisrt(el) {
    if ('firstElementChild' in el) {
        return el.firstElementChild;
    } else if (el = el.firstChild) {

        do {
            if (el.nodeType == 1) {
                return el;
            }
        } while (el = el.nextSibling)
    } else {
        return null;
    }
}

// 最后一个子元素节点
function last(el) {
    if ('lastElementChild' in el) {
        return el.lastElementChild;
    } else if (el = el.lastChild) {

        do {
            if (el.nodeType == 1) {
                return el;
            }
        } while (el = el.previousSibling)
    } else {
        return null;
    }
}

// 前一个元素节点
function prev(el) {
    if ('previousElementSibling' in el) {
        return el.previousElementSibling;
    } else {
        while (el = el.previousSibling) {
            if (el.nodeType == 1) {
                return el;
            }
        }

        return null;
    }
}

// 后一个元素节点
function next(el) {
    if ('nextElementSibling' in el) {
        return el.nextElementSibling;
    } else {
        while (el = el.nextSibling) {
            if (el.nodeType == 1) {
                return el;
            }
        }

        return null;
    }
}

// 父节点
function parent(el) {
    return el.parentNode;
}

// 祖先节点
function parents(el) {
    var arr = [];
    while (el = el.parentNode) {
        arr.push(el);
    }
    return arr;
}

// 兄弟元素节点
function siblings(el) {
    var i,
        len,
        arr = [],
        childNodes = children(el.parentNode);

    len = childNodes.length;
    for (i = 0; i < len; i++) {
        if (el !== childNodes[i]) {
            arr.push(childNodes[i]);
        }
    }

    return arr;
}