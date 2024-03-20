
// 사업소개 부분
$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.overview-content').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object){
              $(this).animate({'opacity':'1'},300);
          }
      }); 
  })
});

// ceo메세지 부분
$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.about_ceo').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/2){
              $(this).animate({'opacity':'1'},1000);
          }
      }); 
  })
});

// 회사개요 부분
$(document).ready(function() {
  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.all_wrap').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/20){
              $(this).animate({'opacity':'1'},2000);
          }
      }); 
  })
});