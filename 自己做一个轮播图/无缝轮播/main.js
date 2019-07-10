let size = $(".images-wrapper>img").length;
let index =1;
init(getImage(index));
// let timer;
let timer = setInterval(() => {
    makeLeave(getImage(index));
    //我这里把makeLeave和makeQueue合起来了，makeQueue是包含在makeLeave里的
    //还有一种思路就是makeLeave和makeQueue就是单纯的，谁也不包含谁，makeLeave结束再让当前图片makeQueue
    makeCurrent(getImage(index+1));
    index++;
}, 2000);
$(document).on("visibilitychange",()=>{
    if(document.hidden){
        clearInterval(timer);
    }else{
        timer = setInterval(() => {
            makeLeave(getImage(index));
            //我这里把makeLeave和makeQueue合起来了，makeQueue是包含在makeLeave里的
            //还有一种思路就是makeLeave和makeQueue就是单纯的，谁也不包含谁，makeLeave结束再让当前图片makeQueue
            makeCurrent(getImage(index+1));
            index++;
        }, 2000);
    }   
});


//下面的都是函数，可以不看
function init($img1){
    $img1.addClass("current").siblings().addClass("queue");
}
function makeCurrent($img){
    return $img.removeClass("queue leave").addClass("current");
    //removeClass()什么都不加就是移除所有类
}
function makeLeave($img){
    $img.removeClass("current queue").addClass("leave").
    one("transitionend", function(){
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
function getImage(n){
    return $(`.images-wrapper>img:nth-child(${mod(n)})`);
}
