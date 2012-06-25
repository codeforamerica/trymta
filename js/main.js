$(function() {

    window.top.scrollTo(0, 1);

    var resize = function() {
        var win = $(window),
            height = win.height(),
            width = win.width();

        height = (height > 370) ? height : 370;

        $('iframe').attr({
          height: height,
          width:width
        })
    }

    $(window).resize(resize);

    resize();

})
