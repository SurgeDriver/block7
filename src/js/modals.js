const modalBG = document.querySelector('.modal-bg')

function createModal(openSelector, modalSelector, closeSelector) {
  const openButton = document.querySelector(openSelector)
  const modal = document.querySelector(modalSelector)
  const closeButton = modal.querySelector(closeSelector)

  function isAsideOpen() {
    return modal.classList.contains('modalOpen')
  }
  //скрыть
  function hideModal() {
    if (isAsideOpen()) {
      modal.classList.remove('modalOpen')
      modalBG.classList.remove('bg-open')
      closeButton.style.display = 'none'
      setTimeout(() => {
        modalBG.style.display = 'none'
      }, 200)
    }
  }
  //показать
  function showModal() {
    if (isAsideOpen()) return
    modalBG.style.display = 'block'
    closeButton.style.display = 'flex'
    modal.classList.add('modalOpen')
    setTimeout(() => {
      modalBG.classList.add('bg-open')
    }, 5)
  }

  //обработчики
  openButton.addEventListener('click', showModal)
  closeButton.addEventListener('click', hideModal)
  modalBG.addEventListener('click', hideModal)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideModal()
    }
  })

  //это надо что бы при загрузке страницы не было видно как модальное окно уплывает
  window.addEventListener('load', () => {
    modal.style.transition = 'transform 0.15s ease-in-out'
  })
}

createModal('.aside__callback-button', '.callback', '.callback__button--close')
createModal('.aside__feedback-button', '.feedback', '.feedback__button--close')
