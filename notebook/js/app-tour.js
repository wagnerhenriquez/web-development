document.addEventListener('wheel', function (e) {
    if (e.type != 'wheel') {
        return;
    }
    let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
    delta = delta * (-300);
    document.documentElement.scrollLeft -= delta;
    // safari needs also this
    document.body.scrollLeft -= delta;
    e.preventDefault();
});
