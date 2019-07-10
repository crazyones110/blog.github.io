let size = $(".images-wrapper>img").length;
console.log(size);
let index =1;
let $img1 = $(".images-wrapper>img:nth-child(1)");
let $img2 = $(".images-wrapper>img:nth-child(2)");
init($(`.images-wrapper>img:nth-child(${index})`));
// setTimeout(()=>{
//     makeLeave($img1);
//     makeCurrent($img2);
// },3000)
setInterval(() => {
    makeLeave($(`.images-wrapper>img:nth-child(${mod(index)})`));
    makeCurrent($(`.images-wrapper>img:nth-child(${mod(index+1)})`));
    index++;
}, 3000);

function init($img1){
    $img1.addClass("current").siblings().addClass("queue");
}
function makeCurrent($img){
    return $img.removeClass("queue leave").addClass("current");
}
function makeLeave($img){
    $img.removeClass("current queue").addClass("leave").
    one("transitionend", function(e){
        // $(this).removeClass("leave").addClass("queue");
        makeQueue($img);
    });
    return $img;
}
function makeQueue($img){
    return $img.removeClass("leave current").addClass("queue");
}
function mod(x){
    return x%size === 0 ? size : x % size;
}