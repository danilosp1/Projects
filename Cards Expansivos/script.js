const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removerClassesAtivas()
    panel.classList.add('active')
  })
})

function removerClassesAtivas(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}