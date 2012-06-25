$(function() {

    window.top.scrollTo(0, 1);

    var resize = function() {
        var win = $(window),
            height = win.height(),
            width = win.width();

        height = (height > 375) ? height : 375;

        $('iframe').attr({
          height: height,
          width:width
        })
    }

    $(window).resize(resize);

    resize();

})
