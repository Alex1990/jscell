/**
 * hasClass/addClass/removeClass/toggleClass
 */
function hasClass(el, cls) {
    if (el && el.classList) {
        return el.classList.contains(cls);
    } else {
        var re = new RegExp('(^|\\s+)' + cls + '(\\s+|$)');
        return el && re.test(el.className);
    }
}

function addClass(el, cls) {
    if (!hasClass(el, cls)) {
        if (el.classList) {
            el.classList.add(cls);
        } else {
            el.className += ' ' + cls;
        }
    }
}

function removeClass(el, cls) {
    if (hasClass(el, cls)) {
        if (el.classList) {
            el.classList.remove(cls);
        } else {
            var re = new RegExp('(^|\\s+)' + cls + '(\\s+|$)');
            el.className = el.className.replace(re, '');
        }
    }
}

function toggleClass(el, cls) {
    if (hasClass(el, cls)) {
        removeClass(el, cls);
    } else {
        addClass(el, cls);
    }
}