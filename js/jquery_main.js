
// 메인메뉴 슬라이드
$(document).ready(function () {
   $(".main_img_wrap").bxSlider({
      auto: true,
      pager: true,
      autoHover: true,
      autoControls: true,
   });
});

// 인기메뉴 슬라이드
$(document).ready(function () {
   $(".hot_imgs_container").bxSlider({
      startSlide: 0,
      pager: false,
      autoControls: true,
      slideWidth: 1500,
      infiniteLoop: true,
      controls: false
   });
});

// 탭메뉴 
$(document).ready(function () {
   $(".tab_title li").click(function () {
      var idx = $(this).index();
      $(".tab_title li").removeClass("on");
      $(".tab_title li").eq(idx).addClass("on");
      $(".tab_cont > div").hide();
      $(".tab_cont > div").eq(idx).show();
   })
});

// 장바구니 베스트 픽
$(document).ready(function () {
   $(".pick_title li").click(function () {
      var idx = $(this).index();
      $(".pick_title li").removeClass("on");
      $(".pick_title li").eq(idx).addClass("on");
      $(".pick_cont > div").hide();
      $(".pick_cont > div").eq(idx).show();
   })
});

// 오뚜기 신메뉴
$(document).ready(function () {
   $(".new_pick_title li").click(function () {
      var idx = $(this).index();
      $(".new_pick_title li").removeClass("on");
      $(".new_pick_title li").eq(idx).addClass("on");
      $(".new_pick_cont > div").hide();
      $(".new_pick_cont > div").eq(idx).show();
   })
});

// 이미지 일정시간 간격으로 변경
let now_img;
let last_img;
window.onload = function () {
   setInterval("fn_change()", 3000);
}
function fn_change() {
   now_img = $(".img_area img").eq(0);     //$("img").eq(0)는 첫번째 img를 찾음
   last_img = $(".img_area img").eq(-1);   //$("img").eq(-1)은 마지막 img를 찾음

   // 마지막 img를 첫번째로 옮긴다.
   last_img.addClass("z-idx").css("opacity", 0).animate({ "opacity": 1 }, 2000, function () {
      $(".img_area").prepend(last_img);
      now_img.removeClass("z-idx");
   });
}

// 우측하단 팝업버튼
$(document).ready(function () {
   isShow = true; //변수 하나를 설정 화면에 보이면 true, 보이지 않으면 false;
   $('.pixed_btn button').on('click', function () {
      if (isShow) {
         isShow = false;
         $('.popup').hide();
         $('.open_btn').text('on');
      } else {
         isShow = true;
         $('.popup').show();
         $('.open_btn').text('off');
      }
   })
})

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