$(window)
    .resize(function () {
        var height = $(window).height();
        height = height -100;
        $(".store").attr("style","height:"+height +"px");
    }).resize();