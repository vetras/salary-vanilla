var show = function (elem, display) {
    if (display) {
        elem.style.display = display;
        return;
    }
    elem.style.display = 'block';
};

var hide = function (elem) {
    elem.style.display = 'none';
};