const brands = document.querySelector('.swiper.brands')
const brandsGrid = brands.querySelector('.brands__wrapper')
const devices = document.querySelector('.swiper.devices')
const devicesGrid = devices.querySelector('.devices__wrapper')
const services = document.querySelector('.service')
const serviceGrids = services.querySelectorAll('.service__wrapper')
// const serviceRows = services.querySelectorAll('.service__row')

let swiper

function swiper_Destroy() {
  if (swiper instanceof Swiper) {
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

    // serviceRows.forEach((servRow) => {
    //   servRow.classList.add('service__row')
    // })

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

    // serviceRows.forEach((servRow) => {
    //   servRow.classList.remove('service__row')
    // })

    serviceGrids.forEach((servGrid) => {
      servGrid.classList.remove('service__wrapper')
    })
  }
}

onResize()
window.addEventListener('resize', onResize)
