//объект с одним методом который тупа связывает раскрываемый блок и кнопку
const expandableBlock = {
  //метод принимает селектор блока, селектор кнопки, и компактную высоту в строчном формате
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

//раскрываемый блок и соответствующая кнопка задается тут
//блоки разной высота, поэтому max-height в скрытом состоянии задается тут вручную
expandableBlock.init(
  '.main__text',
  '.main__expand-button',
  '65px',
  'Читать далее'
)
expandableBlock.init('.brands__wrapper', '.block1-button', '160px')
expandableBlock.init('.devices__wrapper', '.block2-button', '160px')
// expandableBlock.init('.block3', '.block3-button', '180px')
