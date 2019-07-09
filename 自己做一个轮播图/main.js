let buttons = $(".button-wrapper>button");
for(let i =0;i<buttons.length; ++i){
    $(buttons[i]).on("click", function(e){
        let $target = $(e.currentTarget);
        let index = $target.index();
        $("#images-wrapper").css({
            "transform":'translateX(' + (index*-300) + 'px)'
        });
        $target.addClass("red").siblings().removeClass("red");
    });
}
// let count;
// let size = buttons.length;
// let autoInterval = setInterval(() => {
//     count++;
//     $(buttons[count%size]).triggger("click");
// }, 1000);