$(function() {
    var resize = function() {
        var win = $(window),
            height = win.height(),
            width = win.width();

        $('iframe').attr({
          height: height,
          width:width
        })
    }

    $(window).resize(resize);

    resize();
})
