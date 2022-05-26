import { renderDataPageDetail } from './page_detail.js'
import { renderHomestayPageHome, renderCategoryPageHome } from './page_home.js'

const routConfig = [
  { name: 'home', path: '/' },
  { name: 'detail', path: '/detail/' },
  { name: '404', path: '/404/' },
  { name: 'category', path: '/category/' }
]

function routing() {
  let pathname = window.location.pathname
  if (pathname == '/') {
    // console.log('homepage')
    let homestaysApi = `${import.meta.env.VITE_SERVER_URL}/api/homestays/?populate=images`
    axios.get(homestaysApi)
      .then((response) => {
        let data = response.data.data
        renderHomestayPageHome(data)
      })
      .catch((error) => {
        console.log('fetch data error', error)
      })
    let categoryApi = `${import.meta.env.VITE_SERVER_URL}/api/categories/?populate=homestays`
    axios.get(categoryApi)
      .then((response) => {
        let data = response.data.data
        renderCategoryPageHome(data)
      })
  } else if (pathname == '/detail/') {
    // console.log('detail page')
    let productID = parseInt(window.location.search.split('?id=')[1].split('&')[0])
    let api = `${import.meta.env.VITE_SERVER_URL}/api/homestays/${productID}/?populate=images`
    axios.get(api)
      .then((response) => {
        let data = response.data.data
        renderDataPageDetail(data.attributes)
      })
      .catch((error) => {
        console.log('fetch data error', error)
      })
  } else if (isNotFound(pathname)) {
    // window.location.href = `${import.meta.env.VITE_CLIENT_URL}/404/`
  }
}

function isNotFound(pathname) {
  for (let item of routConfig) {
    if (pathname == item.path) {
      return false
    }
  }
  return true
}

export {
  routing
}