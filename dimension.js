/**
 * 获取维度值
 */

// 屏幕的宽度
function screenWidth() {
    return screen.width;
}

// 屏幕的高度
function screenHeight() {
    return screen.height;
}

// 页面的宽度
function pageWidth() {
    return document.documentElement.scrollWidth;
}

// 页面的高度
function pageHeight() {
    return document.documentElement.scrollHeight;
}

// 窗口/视口的宽度
function winWidth() {
    return window.innerWidth || document.documentElement.clientWidth || 
            document.body.clientWidth;
}

// 窗口/视口的高度
function winHeight() {
    return window.innerHeight || document.documentElement.clientHeight || 
            document.body.clientHeight;
}

// 元素的宽度，包含内边距、边框
function width(el) {
    return el.offsetWidth;
}

// 元素的高度，包含内边距、边框
function height(el) {
    return el.offsetHeight;
}

// 返回一个包含元素宽度与高度以及相对于窗口左上角位置的对象
function rect(el) {
    return el.getBoundingClientRect();
}