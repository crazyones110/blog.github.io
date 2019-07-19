let specialTags = document.querySelectorAll('[data-x]');//需要滚动高亮的元素

function getMinIndex(){
    let minIndex = 0;
    for(let i = 0;i<specialTags.length;++i){
        if(Math.abs(specialTags[i].offsetTop - scrollY) < Math.abs(specialTags[minIndex].offsetTop - scrollY)){
            minIndex = i;
        }
        // specialTags[i].classList.add("offset");
    }
    return minIndex;
}
for(let i = 0;i<specialTags.length;++i){
    specialTags[i].classList.add("offset");
}//刚开始的时候三个标签全部加上偏移量
let minIndexAll = getMinIndex();
window.setTimeout(function(){
    specialTags[minIndexAll].classList.remove("offset");
},500);
//我在html里把第一个a标签加上.highlight了，所以还没滚动的时候第一个标签就高亮了


document.addEventListener("scroll",()=>{
    let minIndex = getMinIndex();
    specialTags[minIndex].classList.remove("offset");
    console.log(minIndex);
    if(minIndex !== minIndexAll){//和上一个高亮的a标签不一样的
        //就把上一个a标签取消高亮，当前的高亮
        let aTagLast = document.querySelector('[href="#' + specialTags[minIndexAll].id +'"]');
        aTagLast.classList.remove("highlight");
        let aTagCurrent = document.querySelector('[href="#' + specialTags[minIndex].id +'"]');
        aTagCurrent.classList.add("highlight")
        minIndexAll = minIndex;
    }
})