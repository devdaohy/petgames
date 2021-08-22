
$(window)
    .resize(function () {
        var height = $(window).height();
        height = height -100;
        $(".pattern").attr("style","height:"+height +"px");
    }).resize();
