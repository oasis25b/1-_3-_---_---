// 호버시 드롭다운메뉴
$(document).ready(function () {
   $(".header_nav li").hover(function () {
      $(".header_nav ul ul, .nav_bg").stop().slideDown("fast");
   }, function () {
      $(".header_nav ul ul, .nav_bg").stop().slideUp("fast");
   });

// 랭귀지, 챗봇 등등
isShow = true; 
$('.lang_menu_btn').on('click', function () {
   if (isShow) { 
      isShow = false;
      $('.lang').hide();   
   } else {  
      isShow = true;
      $('.lang').show();   
   }
})

   // 랭귀지 버튼 클릭
   isShow = true; 
   $('.lang_down').on('click', function () {
      if (isShow) { 
         isShow = false;
         $('.lang_list').hide();   
      } else {  
         isShow = true;
         $('.lang_list').show();   
      }
   })
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