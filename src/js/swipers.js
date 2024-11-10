let swiper

const brands = document.querySelector('.brands')
const devices = document.querySelector('.devices')
const service = document.querySelector('.service')

const brandsGrid = brands.querySelector('.brands__wrapper')
const devicesGrid = devices.querySelector('.devices__wrapper')
const serviceGrid = service.querySelectorAll('.service__wrapper')

function swiper_Destroy() {
  swiper.forEach((s) => {
    s.destroy(true, false)
    s = null
  })
  swiper = null
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
}

function onResize() {
  if (window.innerWidth > 768 && swiper) {
    swiper_Destroy()
    brands.classList.add('brands')
    devices.classList.add('devices')
    service.classList.add('service')
    brandsGrid.classList.add('brands__wrapper')
    devicesGrid.classList.add('devices__wrapper')
    serviceGrid.forEach((servGrid) => {
      servGrid.classList.add('service__wrapper')
    })

    brandsGrid.style.maxHeight = '160px;'
    devicesGrid.style.maxHeight = '160px;'
  } else if (window.innerWidth <= 768 && !swiper) {
    initSwiper()
    brands.classList.remove('brands')
    devices.classList.remove('devices')
    service.classList.remove('service')
    brandsGrid.classList.remove('brands__wrapper')
    devicesGrid.classList.remove('devices__wrapper')
    serviceGrid.forEach((servGrid) => {
      servGrid.classList.remove('service__wrapper')
    })
  }
}

onResize()
window.addEventListener('resize', onResize)
