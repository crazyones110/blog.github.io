let lis = document.getElementsByClassName("submenu");//好几个li
let uls = document.querySelectorAll(".submenu>ul")
// for(let i =0;i<uls.length;++i){
//     console.log(uls[i])
// }
for (let i = 0; i < lis.length; ++i) {
    lis[i].onmouseenter = function (x) {
        let a = x.currentTarget//a是包着menu和submenu的大li
        let ul;
        // console.log(a.childNodes[3])
        for (let j = 0; j < a.childNodes.length; ++j) {
            if (a.childNodes[j].tagName === "UL") {
                // console.log(a.childNodes[j]);
                ul = a.childNodes[j];//获取到这个li下面需要弹出的二级菜单ul
            }
            else {
                continue;
            }
        }
        // console.log(ul);
        ul.classList.add("active");
    }
    lis[i].onmouseleave = function (x) {
        let a = x.currentTarget//a是包着menu和submenu的大li
        let ul;
        // console.log(a.childNodes[3])
        for (let j = 0; j < a.childNodes.length; ++j) {
            if (a.childNodes[j].tagName === "UL") {
                // console.log(a.childNodes[j]);
                ul = a.childNodes[j];//获取到这个li下面需要弹出的二级菜单ul
            }
            else {
                continue;
            }
        }
        // console.log(ul);
        ul.classList.remove("active");
    }
}
let aTags = document.querySelectorAll(".nav>ul>li>a");
for (let i = 0; i < aTags.length; ++i) {
    aTags[i].onclick = (e) => {
        e.preventDefault();
        let temp = e.currentTarget;
        let jumpLocation = document.querySelector(temp.getAttribute("href"));
        // console.log(jumpLocation);


        // let n = 25;//滚动25次，我试了改成120，就是120帧的电影了，贼流畅
        // let i = 0;
        // let duration = 500 / n;//0.5s内滚动25次，一次滚多少秒
        let currentPosition = scrollY;
        let destination = jumpLocation.offsetTop -80;//跳转的地方的Y值
        let distance = destination - currentPosition;
        // let step = distance / n;//每次滚多远
        // let id = setInterval(() => {
        //     if (i === n) {
        //         clearInterval(id);
        //         return;
        //     }
        //     i += 1;
        //     window.scrollTo(0, currentPosition + step * i);
        // }, duration);



        // Setup the animation loop.
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        let t= Math.abs(distance/100*300);//100px用300ms的时间
        if(t>500){
            t=500;//超过500ms，不管，最多500ms的时间
        }
        const coords = { y: currentPosition }; // Start at (0, 0)
        const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y: destination }, t) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(() => { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                window.scrollTo(0, coords.y);
            })
            .start(); // Start the tween immediately.


    }
}

