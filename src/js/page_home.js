function renderHomestayPageHome(homestays) {
  let uniqueCheck = $('.unique-home-page')
  if (!uniqueCheck.length) return

  let typeSelector = $('.js-slider-01')
  homestays.forEach((item) => {
    let attr = item.attributes
    let html =
      `<div class="product-item"><a class="product-link" href="/detail/?id=${item.id}">
          <figure class="product-image">
            <img src="${import.meta.env.VITE_SERVER_URL + attr.images.data[0].attributes.url}" alt="${attr.name}">
          </figure>
          <h3 class="name">${attr.name}</h3>
          <p class="detail">${attr.name_en}</p>
        </a></div>`
    typeSelector.append(html)
    typeSelector.append(html)
    typeSelector.append(html)
  })
  slider()
}

function renderCategoryPageHome(categories) {
  let uniqueCheck = $('.unique-home-page')
  if (!uniqueCheck.length) return

  let categorySelector = $('.banner-wrapper .banner-list')
  categories.forEach((item) => {
    let attr = item.attributes
    let systemFeatures = []
    try {
      systemFeatures = JSON.parse(attr.system_features)
      let html =
        `<a class="banner-item" href="/category/?id=${item.id}">
            <h3 class="banner-title">${attr.name}</h3>
            <p class="banner-description">${attr.homestays.data.length} khách sạn</p>
        </a>`
      if (systemFeatures.includes('top_01')) {
        categorySelector.eq(0).append(html)
      } else if (systemFeatures.includes('top_02')) {
        categorySelector.eq(1).append(html)
      }
    } catch { }
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
  renderHomestayPageHome,
  renderCategoryPageHome
}