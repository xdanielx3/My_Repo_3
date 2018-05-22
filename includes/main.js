$("document").ready(function () {
    var OldOpa;
    var plus = $("img");
    plus.click(function () {
        var box = $("<section>").attr("class", "boxes_side").css("opacity", Math.random());
        $(box).hover(function () {
            OldOpa = box.css("opacity");
            $(this).css("opacity", "1");
        } ,function () {
            $(this).css("opacity", OldOpa);
            })
        $(".main_block").append(box);
    });
});




