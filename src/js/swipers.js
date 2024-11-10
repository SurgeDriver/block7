const brands = document.querySelector('.brands')
const devices = document.querySelector('.devices')
const services = document.querySelector('.service')

const brandsGrid = brands.querySelector('.brands__wrapper')
const devicesGrid = devices.querySelector('.devices__wrapper')
const serviceGrids = services.querySelectorAll('.service__wrapper')

let swiper

function swiper_Destroy() {
  if (swiper) {
    swiper.destroy(true, true)
    swiper = null
  }
}

function initSwiper() {
  swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
  console.log('Swiper initialized:', swiper)
}

function onResize() {
  if (window.innerWidth > 768 && swiper) {
    console.log('---> PC')
    swiper_Destroy()
    brands.classList.add('brands')
    devices.classList.add('devices')
    services.classList.add('service')
    brandsGrid.classList.add('brands__wrapper')
    devicesGrid.classList.add('devices__wrapper')
    serviceGrids.forEach((servGrid) => {
      servGrid.classList.add('service__wrapper')
    })
  } else if (window.innerWidth <= 768 && !swiper) {
    console.log('---> Mobile')
    initSwiper()
    brands.classList.remove('brands')
    devices.classList.remove('devices')
    services.classList.remove('service')
    brandsGrid.classList.remove('brands__wrapper')
    devicesGrid.classList.remove('devices__wrapper')
    serviceGrids.forEach((servGrid) => {
      servGrid.classList.remove('service__wrapper')
    })
  }
}

onResize()
window.addEventListener('resize', onResize)
