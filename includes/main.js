$("document").ready(function () {
    var counter = 0;
    var OldOpa;
    var newop;
    var color;
    var plus = $("img");
    plus.click(function () {
        var box = $("<section>").attr("class", "boxes_side").css("opacity", Math.random());
        $(box).hover(function () {
            OldOpa = box.css("opacity");
            $(this).css("opacity", "1");
        } ,function () {
            $(this).css("opacity", OldOpa);
            })
        $("main").append(box);
        counter++;
            if(counter == 8){
                $(".main_block").css("height", "+=500");
            }
    });
});



