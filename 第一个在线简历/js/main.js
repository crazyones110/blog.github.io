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
console.log(siteSkills.offsetTop)
let aTags = document.querySelectorAll(".nav>ul>li>a");
console.log(aTags);
for(let i =0;i<aTags.length;++i){
    aTags[i].onclick = (e) => {
        e.preventDefault();
        let temp = e.currentTarget; 
        let jumpLocation = document.querySelector(temp.getAttribute("href"));
        console.log(jumpLocation);
        window.scrollTo(0, jumpLocation.offsetTop - 80);
    }
}
