/**
 * 操作节点的方法
 */

// 根据标签名称创建元素节点
function create(tag) {
    return document.createElement(tag);
}

// 创建文本节点
function text(txt) {
    return document.createTextNode(txt);
}

// 克隆节点
function clone(node) {
    return node.cloneNode();
}

// 删除节点
function remove(node) {
    return node.parentNode.removeChild(node);
}

// 添加节点到指定节点的最后一个子节点
function append(node, parent) {
    parent = parent || node.parentNode;
    parent.appendChild(node);
}

// 添加节点到指定节点前一个节点
function insertBefore(node, target) {
    node.insertBefore(target);
}

// 添加节点到指定节点后一个节点
function insertAfter(node, target) {
    node.insertBefore(target.nextSibling);
}

// 获取或设置元素节点的内容，即innerHTML
function html(el, str) {
    if (arguments.length == 1) {
        return el.innerHTML;
    } else if (arguments.length == 2) {
        el.innerHTML = str;
    }
}

// 获取/设置属性节点值，删除属性节点
function attr(el, name, value) {
    if (arguments.length == 2) {
        el.getAttribute(name);
    } else (arguments.length == 3) {
        if (value !== null) {
            el.setAttribute(name, value);
        } else {
            el.removeAttribute(name);
        }
    }
}

// 获取/设置文本值
function text(el, txt) {
    if (arguments.length == 1) {
        if ('textContent' in el) {
            return el.textContent;
        } else if ('innerText' in el) {
            return el.innerText;
        }
    } else if (arguments.length == 2) {
        if ('textContent' in el) {
            el.textContent = txt;
        } else if ('innerText' in el) {
            el.innerText = txt;
        }
    }
}