const body = document.querySelector('body')
const asideMenu = document.querySelector('.aside')
const asideBG = document.querySelector('.aside-bg')

const callbackMenu = document.querySelector('.callback')
const feedbackMenu = document.querySelector('.feedback')

const asideOpenButton = document.querySelector('.header__button--icon--burger')
const asideCloseButton = asideMenu.querySelector('.aside__button--icon--close')

function isAsideOpen() {
  return asideMenu.classList.contains('modalOpen')
}

function isAnyModalOpen() {
  return (
    callbackMenu.classList.contains('modalOpen') ||
    feedbackMenu.classList.contains('modalOpen')
  )
}

function hideAside() {
  if (isAsideOpen() && !isAnyModalOpen()) {
    asideMenu.classList.remove('modalOpen')
    if (window.innerWidth < 1440) {
      body.style.overflow = 'scroll'
      asideBG.classList.remove('bg-open')

      setTimeout(() => {
        asideBG.style.display = 'none'
      }, 200)
    }
  }
}

function showAside() {
  if (!isAsideOpen()) {
    asideMenu.classList.add('modalOpen')
    if (window.innerWidth < 1440) {
      body.style.overflow = 'hidden'
      asideBG.style.display = 'block'
      setTimeout(() => {
        asideBG.classList.add('bg-open')
      }, 5)
    }
  }
}

asideOpenButton.addEventListener('click', showAside)
asideCloseButton.addEventListener('click', hideAside)
asideBG.addEventListener('click', hideAside)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideAside()
  }
})

setTimeout(() => {
  asideMenu.style.transition = 'transform 0.15s ease-in-out'
}, 50)

window.addEventListener('resize', function (event) {
  if (window.innerWidth >= 1440) {
    showAside()
  } else {
    hideAside()
  }
})
