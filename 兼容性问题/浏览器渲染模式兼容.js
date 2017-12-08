if (document.compatMode == "BackCompat") {
    cWidth = document.body.clientWidth;
    cHeight = document.body.clientHeight;
    sWidth = document.body.scrollWidth;
    sHeight = document.body.scrollHeight;
    sLeft = document.body.scrollLeft;
    sTop = document.body.scrollTop;
}
else { //document.compatMode == "CSS1Compat"
    cWidth = document.documentElement.clientWidth;
    cHeight = document.documentElement.clientHeight;
    sWidth = document.documentElement.scrollWidth;
    sHeight = document.documentElement.scrollHeight;
    sLeft = document.documentElement.scrollLeft == 0 ? document.body.scrollLeft : document.documentElement.scrollLeft;
    sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
}