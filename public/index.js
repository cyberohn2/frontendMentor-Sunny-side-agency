//toggle mobile menu
const navBtn = document.querySelector('#nav-btn')
const nav = document.querySelector('#nav')
navBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    let visible = nav.getAttribute('aria-hidden')
    visible == 'true'? 
    nav.setAttribute('aria-hidden', 'false'):
    nav.setAttribute('aria-hidden', 'true')
})