let header = document.querySelector('header')
window.addEventListener('scroll' ,  ()=>{
    scrollY >= 100 ? header.classList.add('hide') : header.classList.remove('hide')
})





