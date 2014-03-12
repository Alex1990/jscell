/**
 * event util
 */

// 绑定事件处理器到对象上
// 实际代码中，可以通过特性检测后定义该函数
// 这样以后执行就节省一次判断
function addEvent(el, type, listener, useCapture) {
    // W3C标准事件绑定，IE9+
    if (el.addEventListener) {
        el.addEventListener(type, listener, useCapture);

    // IE专有事件绑定，IE8以下
    } else if (el.attachEvent) {

        // 修正事件处理函数中 this 的上下文
        el[type+listener] = function() {

            // 修正事件对象的target/currentTarget/preventDefault()/stopPropagation()
            e = window.event;
            e.target = e.srcElement;
            e.currentTarget = this;
            e.preventDefault = function() { e.returnValue = false; };
            e.stopPropagation = function() { e.cancelBubble = true; };
            listener(e);
        };
        el.attachEvent('on'+type, el[type+listener]);
    }
}

// 解绑事件处理器
function removeEvent(el, type, listener, useCapture) {
    // W3C标准事件解绑，IE9
    if (el.removeEventListener) {
        el.removeEventListener(type, listener, useCapture);

    // IE专有事件解绑，IE8以下
    } else if (el.detachEvent) {
        el.detachEvent('on'+type, el[type+listener]);
    }
}

