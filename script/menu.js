let showMenu = document.querySelector('#ShowMenu')
let closeMenu = document.querySelector('#closeMenu')
let sideMenu = document.querySelector('.side-menu')
showMenu.addEventListener('click' , ()=>{
    sideMenu.classList.add('active')
})
closeMenu.addEventListener('click' , ()=>{
    sideMenu.classList.remove('active')
})