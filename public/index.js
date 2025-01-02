const menuIcon = document.querySelector('#menu-icon')
const nav = document.querySelector('#nav')
const navClassesToToggle = ['absolute', 'top-0', 'right-0', 'transform', '-translate-y-full']

menuIcon.addEventListener('click', () => {
  navClassesToToggle.forEach(navClass => {
    nav.classList.toggle(navClass)
  })
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    nav.classList.remove('hidden')
  }
})