/**
 * Created by Harry on 2017/6/12.
 */
/**
 * Created by Harry on 2017/6/12.
 */
// 适配移动端 设置 rem
(function (doc, win) {
    console.log("dpr:"+win.devicePixelRatio);
    var docEle = doc.documentElement,
        isIos = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr=Math.min(win.devicePixelRatio, 3);
    scale = 1 / dpr,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEle.dataset.dpr = dpr;

    var metaEle = doc.createElement('meta');
    metaEle.name = 'viewport';
    metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale;
    docEle.firstElementChild.appendChild(metaEle);

    var recalCulate = function(){
        var width = docEle.clientWidth;
        if (width / dpr > 640) {
            width = 640 * dpr;
        }
        docEle.style.fontSize = 20 * (width / 750) + 'px';
        console.log("fs:"+docEle.style.fontSize);
    };

    recalCulate();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);