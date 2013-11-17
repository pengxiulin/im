var imgAdjust = function(){
    $(".left img").each(function(){
        var _self = $(this);
        var height = _self.height();
        var parentHeight = _self.parent().height();
        var offset = (parentHeight - height)/2;
        _self.css({"margin-top":offset});
        console.log(height,parentHeight,offset);
    });
};
// imgAdjust();
setTimeout(imgAdjust,2000);