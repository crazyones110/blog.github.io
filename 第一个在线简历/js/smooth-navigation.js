!function () {
    var view = document.querySelector(".nav");
    var controller = {
        view: null,
        aTags: null,
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        init: function (view) {
            this.view = view;
            this.aTags = this.view.querySelectorAll(".nav>ul>li>a");
            this.initAnimation();
            this.bindEvents(this.aTags);
        },
        bindEvents: function(aTags){
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
                    let destination = jumpLocation.offsetTop - 80;//跳转的地方的Y值
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
                    
                    let t = Math.abs(distance / 100 * 300);//100px用300ms的时间
                    if (t > 500) {
                        t = 500;//超过500ms，不管，最多500ms的时间
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
            siteWelcome.classList.remove("active")
        },
        
    }
    controller.init(view);
}.call()