// import '/src/style.sass'

function getData() {
  axios.get('http://localhost:1337/api/homestays/1')
    .then(function (response) {
      let data = response.data.data
      // console.log('success', JSON.parse(data.attributes.facility))
      renderDataPageDetail(data.attributes)
    })
    .catch(function (error) {
      console.log('error', error)
    })
}

function renderDataPageDetail(item) {
  let article = $('.article-product-detail')
  if (!article.length) return
  $('.product-name').text(item.name)
  $('.name-alt').text(item.name_en)
  $('.address address').text(item.address)
  $('.js-product-images .image').attr('src', item.images)
  $('.product-price').text(item.price)
  $('.product-description').text(item.description)
  $('.utility-wrapper .product-rooms span').text(item.rooms)
  $('.utility-wrapper .product-surface span').text(`${item.surface}m2`)
  // basic_info
  let basicInfo = JSON.parse(item.basic_info)
  for (let key in basicInfo) {
    console.log(`${key}: ${basicInfo[key]}`);
    $('.utility-wrapper .basic-info').append(`<li><p>${key}</p><span>${basicInfo[key]}</span></li>`)
  }
  $('.address').text(item.address)
  $('.address').text(item.address)
  $('.address').text(item.address)

}

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
      slidesToShow: 6,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
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

function handleNotices() {
  let button = $('.covid-notice .js-close-button')
  button.on('click', function () {
    $(this).parent().fadeOut('fast')
  })
}

function browserCheck() {
  var html = $('html')
  var userAgent = navigator.userAgent.toLowerCase()
  if (navigator.platform.toLowerCase().indexOf('mac') >= 0) {
    html.addClass('is-mac')
  }
  if (userAgent.indexOf('firefox') > -1) {
    html.addClass('is-firefox')
  }
  if (userAgent.indexOf('safari') != -1) {
    if (userAgent.indexOf('chrome') > -1) {
      html.addClass('is-chrome')
    } else {
      html.addClass('is-safari')
    }
  }
  if (userAgent.indexOf('android') > -1) {
    html.addClass('is-android')
  }
}

$(function () {
  initDatePicker()
  initWow()
  slider()
  calcScoreBar()
  handleNotices()
  getData()
})
