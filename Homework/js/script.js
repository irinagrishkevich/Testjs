$(document).ready(function () {
  $('.main_btna').on('click', function () {
    $('.overlay').animate(
      {
        opacity: 'toggle',
      },
      1500,
    )
    $('.modal').animate(
      {
        height: 'toggle',
      },
      1500,
    )
  })
  $('.main_btn').on('click', function () {
    $('.overlay').animate(
      {
        opacity: 'toggle',
      },
      1500,
    )
    $('.modal').animate(
      {
        height: 'toggle',
      },
      1500,
    )
  })
  $('a[href$="sheldure"').on('click', function () {
    $('.overlay').animate(
      {
        opacity: 'toggle',
      },
      1500,
    )
    $('.modal').animate(
      {
        height: 'toggle',
      },
      1500,
    )
  })
  $('.close').on('click', function () {
    $('.overlay').animate(
      {
        opacity: 'hide',
      },
      1500,
    )
    $('.modal').animate(
      {
        height: 'hide',
      },
      1500,
    )
  })
})
