// console.log('hi app')
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.start-screen__nav-item')
  let activeItem = null

  navItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (activeItem !== null) {
        activeItem.classList.remove('active')
      }
      item.classList.add('active')
      activeItem = item
    })

    item.addEventListener('click', function (event) {
      if (activeItem !== null) {
        activeItem.classList.remove('active')
      }
      item.classList.add('active')
      activeItem = item
      event.stopPropagation()
    })
  })

  document
    .querySelector('.start-screen__nav')
    .addEventListener('mouseleave', function () {
      navItems.forEach(function (item) {
        item.classList.remove('active')
      })
      activeItem = null
    })
})
