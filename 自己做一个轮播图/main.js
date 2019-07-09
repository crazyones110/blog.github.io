let buttons = $(".button-wrapper>button");
for(let i =0;i<buttons.length; ++i){
    $(buttons[i]).on("click", function(e){
        let $target = $(e.currentTarget);
        let index = $target.index();
        $("#images-wrapper").css({
            "transform":'translateX(' + (index*-300) + 'px)'
        });
        count = index;
        $target.addClass("red").siblings().removeClass("red");
    });
}
let count = 0;
let size = buttons.length;
buttons.eq(count%size).trigger("click");

let autoInterval = setTimer();
$('#images-wrapper').on("mouseenter", function(){
    clearInterval(autoInterval);
});
$('#images-wrapper').on("mouseleave",()=>{
    autoInterval = setTimer();
});
function setTimer(){
    return setInterval(() => {
        count++;
        $(buttons[count%size]).trigger("click");
        }, 2000);
}
