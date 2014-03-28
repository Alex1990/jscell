/**
 * Ajax函数
 */

// 创建一个XMLHttpRequest对象
var createXHR;
if (window.XMLHttpRequest) {
    createXHR = function() {
        return new XMLHttpRequest();
    };
} else if (window.ActiveXObject) {
    createXHR = function() {
        return new ActiveXObject('Microsoft.XMLHTTP');
    };
}

// 发起异步请求，默认为GET请求
function ajax(url, opts) {
    var type = opts.type || 'get',
        async = opts.async || true,
        data = opts.data || null,
        headers = opts.headers || {};

    var xhr = createXHR();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            opts.onsuccess && opts.onsuccess(xhr.responseText);
        } else {
            opts.onerror && opts.onerror();
        }
    };
    xhr.open(url, type, async);

    for (var p in headers) {
        xhr.setRequestHeader(p, headers[p]);
    }
    xhr.send(data);
}