$(function() {
  $('.slider').slick({
    infinite: false,
    dots:true, // インジケーターを表示
    arrows:false, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    centerMode:false, 
    });
});

  $(function() {
    $('#nav-btn').on('click',function(){
      $(this).toggleClass('-active');
      $('#nav').toggleClass('-active');
      // クリックしたらつけはずしをする
    });
  });

  $(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});