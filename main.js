// import '/src/style.sass'

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
  if (productImages.length) {
    productImages.slick()
  }
  let productSlider01 = $('.js-slider-01')
  if (productSlider01.length) {
    productSlider01.slick({
      slidesToShow: 6
    })
  }
}

function initWow() {
  new WOW().init()
}

function initDatePicker() {
  let datePicker = $('.js-date-picker')
  if (datePicker.length) {
    datePicker.flatpickr({
      mode: 'range',
      dateFormat: 'd/m/Y',
      minDate: 'today',
      shorthandCurrentMonth: true,
      locale: 'vn',
      onChange(selectedDates, dateStr, instance) {
        console.log('selectedDates', selectedDates, 'dateStr', dateStr)
      }
    })
  }
}

$(function () {
  initDatePicker()
  initWow()
  slider()
  calcScoreBar()
})
