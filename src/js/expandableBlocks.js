const expandableBlock = {
  init: function (
    blockSelector,
    buttonSelector,
    compactHeight,
    showText = 'Показать все'
  ) {
    const block = document.querySelector(blockSelector)
    const button = document.querySelector(buttonSelector)

    const buttonText = button.querySelector('.expand-button__text')
    const buttonIcon = button.querySelector('.expand-button__icon')
    let expanded = false

    buttonText.textContent = showText
    block.style.maxHeight = compactHeight

    button.addEventListener('click', () => {
      expanded = !expanded
      buttonIcon.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)'
      buttonText.textContent = expanded ? 'Скрыть' : showText
      block.style.maxHeight = expanded
        ? `${block.scrollHeight}px`
        : compactHeight
    })
  }
}

expandableBlock.init(
  '.main__text',
  '.main__expand-button',
  '65px',
  'Читать далее'
)
expandableBlock.init('.brands__wrapper', '.brands-button', '160px')
expandableBlock.init('.devices__wrapper', '.devices-button', '160px')
