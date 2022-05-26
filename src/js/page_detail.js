function renderDataPageDetail(item) {
  let uniqueCheck = $('.unique-detail-page')
  if (!uniqueCheck.length) return
  $('.product-name').text(item.name)
  $('.name-alt').text(item.name_en)
  $('.address address').text(item.address)

  // images
  loadImage(item.images.data)
  slider()

  // map
  renderMap(item.location)

  let priceFormatted = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)
  $('.product-price').text(priceFormatted)
  $('.product-description').text(item.description)
  $('.utility-wrapper .product-rooms span').text(item.rooms)
  $('.utility-wrapper .product-surface span').text(`${item.surface}m2`)

  // basic_info
  let basicInfo = JSON.parse(item.basic_info)
  for (let item of basicInfo) {
    $('.utility-wrapper .basic-info').append(`<li><p>${item.name}</p><span>${item.value}</span></li>`)
  }

  // facility
  let utilityInfo = JSON.parse(item.facility)
  for (let item of utilityInfo) {
    $('.utility-list').append(`<li class="utility-item"><i class="${item.iconClass}"></i><span>${item.name}</span></li>`)
  }

  // nearby
  let nearbyInfo = JSON.parse(item.nearby)
  for (let item of nearbyInfo) {
    $('.nearby-list').append(`<li class="nearby-item"><i class="${item.iconClass}"></i><h3 class="name">${item.name}</h3><p class="note">${item.description}</p></li>`)
  }

  // rating
  calcRating(item.rating)
}

// delay...
function renderMap(location) {
  // ------------------------------ chờ lấy API key
  // let iframeAddress = 'M69M+XCH, Unnamed Road, Bau Chinh, Châu Đức, Bà Rịa - Vũng Tàu, Vietnam'
  // let mapSrc = `https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${iframeAddress}&z=14&output=embed`
  // console.log(mapSrc)
  // let embedIframe = `<iframe src="${mapSrc}" width="100%" height="170" frameborder="0"></iframe>`
  // $('.product-map').html(embedIframe)
  // let lat = location.split(',')[0]
  // let lon = location.split(', ')[1]
  // return { lat, lon }
}

function loadImage(images) {
  images.forEach((image) => {
    $('.js-product-images').append(`<img class="image" src="${import.meta.env.VITE_SERVER_URL + image.attributes.url}" alt="" width="770" height="480"/>`)
  })
}

function calcRating(rating) {
  let ratingInfo = rating.split(',')
  let scoreItem = $('.overall-feedback').find('.score-detail > li')
  let totalScore = 0
  for (let index in ratingInfo) {
    let value = ratingInfo[index].toString()
    totalScore += parseInt(value) * (5 - index)
    $(scoreItem[index]).find('.js-bar').attr('data-bar-value', value)
    $(scoreItem[index]).find('.counter').text(value)
  }
  $('.overall-feedback').find('.overall-score').text((totalScore / 50).toFixed(1))
  let bar = $('[class~="js-bar"]')
  bar.each((index, item) => {
    let value = $(item).data('bar-value')
    $(item).find('> span').css({
      width: `${value}%`,
    })
  })
}

function slider() {
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

export {
  renderDataPageDetail
}