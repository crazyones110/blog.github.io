!function(){
    function writeCode(prefix, str, fn){
        let pre = document.querySelector(".codeWrapper>pre")
        let styleTag = document.querySelector("#styleTag")
        let n =1
        let interval = setInterval(() => {
            pre.innerHTML = prefix + str.substring(0, n)
            styleTag.innerHTML = prefix + str.substring(0, n)
            pre.scrollTop = pre.scrollHeight
            n++
            if(n > str.length){
                window.clearInterval(interval)
                fn && fn()
            }
        }, 10);
    }
    writeCode("", "123213124sf a asd asd ")
}.call()
