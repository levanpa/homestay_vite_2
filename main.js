import '/src/style.css'

function calcScoreBar() {
  let bar = $('[class~="js-bar"]')
  bar.each((index, item) => {
    let value = $(item).data("bar-value")
    $(item).find('> span').css({
      width: `${value}%`,
    })
  })
}

function slider() {
  let productImages = $('.js-product-images')
  if (productImages.length){
    productImages.slick()
  }
  let productSlider01 = $('.js-slider-01')
  if (productSlider01.length){
    productSlider01.slick({
      slidesToShow: 6
    })
  }
}

$(function () {
  slider()
  calcScoreBar()
})
