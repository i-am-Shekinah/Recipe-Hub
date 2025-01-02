const menuIcon = document.querySelector('#menu-icon')
const nav = document.querySelector('#nav')

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('hidden')
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    nav.classList.remove('hidden')
  }
})