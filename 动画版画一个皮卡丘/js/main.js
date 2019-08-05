!function(){
    let code = `
/*
大家好，我是范路平，今天给大家带来一个动画版的皮卡丘
*/
/*
先画皮卡丘的皮
*/
.previewWrapper {
flex: 1;
display: flex;
justify-content: center;
align-items: center;
background-color: #feff33;
}
/*
再画皮卡丘的鼻子
*/
.nose {
width: 0;
height: 0;
background-color: rgba(255, 255, 255, 0);
border: 16px solid black;
border-radius: 15px;
border-color: black transparent transparent transparent;
position: absolute;
left: 50%;
transform: translateX(-50%);
top: 25px;
}

/*
接下来画皮卡丘的眼睛
*/
.eye {
width: 49px;
height: 49px;
border-radius: 50%;
position: absolute;
background-color: #2e2e2e;
border: 2px solid black;
}
/*
这是眼珠hhh
*/
.eye::before {
content: '';
display: block;
position: absolute;
width: 24px;
height: 24px;
border-radius: 50%;
background-color: white;
top: 0;
left: 8px;
}

.eye.left {
transform: translateX(-80px);
right: 50%;
}

.eye.right {
transform: translateX(80px);
left: 50%;
}
/*
然后是皮卡丘的腮红#滑稽
*/
.cheek {
width: 68px;
height: 68px;
border: 2px solid black;
background-color: #fc0d1c;
border-radius: 50%;
position: absolute;
top: 80px;
}

.cheek.left {
right: 50%;
transform: translateX(-104px);
}

.cheek.right {
left: 50%;
transform: translateX(104px);
}
/*
然后画皮卡丘的嘴(hu)唇(xu)
*/
.upperLip {
width: 25px;
height: 80px;
position: absolute;
background-color: #feff33;
}

.upperLip.left {
border: 2px solid black;
border-bottom-right-radius: 40px 70px;
border-top: none;
border-left: none;
transform: rotate(68deg);
left: 50%;
margin-left: -53px;
top: 14%;
}

.upperLip.right {
border: 2px solid black;
border-bottom-left-radius: 40px 70px;
border-top: none;
border-right: none;
transform: rotate(-68deg);
right: 50%;
margin-right: -53px;
top: 14%;
}
/*
最后就到了皮卡丘的胡须了
*/
.tongueWrapper {
position: absolute;
left: 50%;
transform: translateX(-50%);
bottom: 0;
z-index: 0;
height: 128px;
overflow: hidden;
width: 300px;
}

.tongueWrapper .tongue {
height: 3500px;
width: 300px;
background-color: #990513;
border-radius: 200px/2000px;
border: 2px solid black;
position: absolute;
bottom: 0;
overflow: hidden;
}

.tongueWrapper .tongue::before {
content: '';
display: block;
position: absolute;
width: 100px;
height: 100px;
background-color: #fc4a62;
bottom: 0;
left: 50%;
transform: translateX(-50%);
border-radius: 50%;
}
/*
好了，这只皮卡丘送给你，谢谢大家的观看
*/
`
    let duration = 50
    function writeCode(prefix, str, fn){
    let pre = document.querySelector(".codeWrapper>pre")
    let styleTag = document.querySelector("#styleTag")
    let n =1
    let timeout = setTimeout(function writeOnce() {
        pre.innerHTML = prefix + str.substring(0, n)
        styleTag.innerHTML = prefix + str.substring(0, n)
        pre.scrollTop = pre.scrollHeight
        n++
        if(n > str.length){
            fn && fn()
        }else{
            timeout = setTimeout(writeOnce,duration)
        }
    }, duration);
}
    writeCode("", code)
    $(".actions").on("click", "button", (e)=>{
        let $button = $(e.currentTarget)
        $button.addClass("active").siblings(".active").removeClass("active")
        let speed = $button.attr("data-speed")
        switch (speed) {
            case "slow":
                duration = 100
                break;
            case "medium":
                duration = 50
                break
            case "fast":
                duration = 10
                break
        }
    })
    
}.call()
