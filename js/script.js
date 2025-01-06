$(document).ready(function () {
 const header = $('#header');    
 const gnb = header.find('#gnb')
 const gnbLi = gnb.children('li')
 const dep1 = gnbLi.children('a.dep1')
 const dep2 = gnbLi.children('ul.dep2')
 console.log(dep1);
 console.log(dep2);
 
 gnbLi.on('mouseenter', function () {
    header.addClass('on')
    /* dep2.stop().fadeIn(300) */
   /*  dep2.css('visibility','visible')
    dep2.stop().animate({opacity: 0},300) */
 })
 gnbLi.on('mouseleave', function () {
    header.removeClass('on')
    /* dep2.stop().fadeOut(300) */

 })

 /* =========================================swiper==================================== */
/*  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  }); */

  const swiper = new Swiper('#main-slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.main-wrap .swiper-pagination',//페이지 표시기
      clickable : true , 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-wrap .swiper-button-next',
      prevEl: '.main-wrap .swiper-button-prev',
    },
  
    
  });
 /* =========================================tab메뉴==================================== */
 const tabLink = $('.notice-wrap .tabs a')
 const tabConList = $('.notice-wrap .tab-con .list ')
 console.log(tabLink);
 console.log(tabConList);


 tabLink.on('click',function (e) {
    e.preventDefault()
    tabConList.hide()
    let tabConID = $(this).attr('data-tab')
    $(tabConID).show()
    console.log(tabConID);
    
    console.log(e);
    tabLink.removeClass('on')
    $(this).addClass('on')
 })
    
 
})/////문서가 준비되면 끝