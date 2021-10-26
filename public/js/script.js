const icon = document.querySelectorAll(".menub")[0];
const menu = document.querySelectorAll(".menu-mobile")[0];
const header = document.querySelector("header")

addEventListener('resize', ()=>{
    if(document.body.clientWidth > 965){
        menu.classList.remove('mobaw')
    }
})

icon.addEventListener('click', ()=>{
    if(menu.classList.contains('mobaw')){
        menu.classList.remove('mobaw')
    } else {
        menu.classList.add('mobaw')
    }
})