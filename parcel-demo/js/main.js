let n = 0
let id = setInterval(() => {
    console.log(n)
    if(n >= 10){
        window.clearInterval(id)
        console.log("finished")
    }
    n++
}, 50);