

// 사이드 바 //
$(document).ready(function(){
    window.screenTop(0)
    var height =$("li>button>a").offset();
        $('html, body').animate({scrollTop:height.top},300)
    });

    // button Top
var btnTop = document.querySelector('.btn_top');

window.addEventListener("scroll", function () {
    var scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 180) {
        btnTop.classList.add("on");
    } else {
        btnTop.classList.remove("on");
    }
});