$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function(){
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $('.directions__filter-btn').removeClass('animation--scale')
    $(this).addClass('directions__filter-btn--active')
    $(this).addClass('animation--scale')
  })
  $('.directions__filter-btn').on('click', function(){
    $('.directions__image-box img').removeClass('animation--infinity_rotation')
    $('.directions__image-box img').addClass('animation--infinity_rotation')
    })
})