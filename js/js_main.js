// 텍스트 애니메이션
// let mainText = document.querySelectorAll(".main_img_text1")
// console.log(mainText);

// window.addEventListener('scroll', function () {
//    let value = window.scrollY;
//    console.log("scrollY", value);

//    if (value > 700) {
//       mainText.style.animation = "back 1s ease-out forwards";
//    } else {
//       mainText.style.animation = 'slide 1s ease-out';
//    }
// });

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