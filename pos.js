/**
 * 获取位置信息
 */

// 元素相对页面左上角的横向像素值
function pageX(el) {
    var x = 0;
    while (el = el.parentNode) {
        x += el.offsetLeft;
    }
    return x;
}

// 元素相对页面左上角的纵向像素值
function pageY(el) {
    var y = 0;
    while (el = el.parentNode) {
        x += el.offsetTop;
    }
    return y;
}

// 页面左上角相对于视口左上角的横向像素值，也即文档横向滚动过的像素值
function scrollX() {
    return window.scrollX || document.documentElement.scrollLeft || 
            document.body.scrollLeft;
}

// 页面左上角相对于视口左上角的纵向像素值，也即文档纵向滚动过的像素值
function scrollY() {
    return window.scrollY || document.documentElement.scrollTop || 
            document.body.scrollTop;
}

// 元素相对于窗口/视口的横向像素值
function winX(el) {
    return pageX(el) - scrollX();
}

// 元素相对于窗口/视口的纵向像素值
function winY(el) {
    return pageY(el) - scrollY();
}

// 元素相对于父定位元素的横向像素值
// 父定位元素即最近定位不为static的祖先元素
function parentX(el) {
    return el.offsetLeft;
}

// 元素相对于父定位元素的纵向像素值
function parentY(el) {
    return el.offsetTop;
}