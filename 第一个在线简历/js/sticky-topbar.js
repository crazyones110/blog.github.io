document.addEventListener("scroll",()=>{
    if (scrollY > 0) {
        topNavBar.classList.add("sticky")
    }
    else {
        topNavBar.classList.remove("sticky")
    }
})