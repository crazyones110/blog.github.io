!function () {
    var view = document.getElementsByClassName("submenu");//好几个li
    var controller = {
        view: null,
        init: function(view){
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function(){
            for (let i = 0; i < this.view.length; ++i) {
                this.view[i].onmouseenter = function (x) {
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
                    ul.classList.add("active");
                }
                this.view[i].onmouseleave = function (x) {
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
                    ul.classList.remove("active");
                }
            }
        },
    }
    controller.init(view);
}.call()
