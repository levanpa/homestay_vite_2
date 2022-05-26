// import '/src/style.sass'
import * as router from './src/js/router.js'

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
  router.routing()
  initDatePicker()
  initWow()
  handleNotices()
})