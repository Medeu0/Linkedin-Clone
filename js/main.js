const profileMenu = document.getElementById('profileMenu')
const sidebarActivity = document.getElementById('sidebarActivity')
const moreLink = document.getElementById('showMoreLink')

const toggleMenu = () => {
  profileMenu.classList.toggle('open-menu')
}

const toggleActivity = () => {
  sidebarActivity.classList.toggle('open-activity')
  if (sidebarActivity.classList.contains('open-activity')) {
    moreLink.innerHTML = 'Show less <b>-</b>'
  } else {
    moreLink.innerHTML = 'Show more <b>+</b>'
  }
}
