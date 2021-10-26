const icon = document.querySelectorAll(".menub")[0];
const menu = document.querySelectorAll("menu-mobile")[0];

icon.addEventListener('click', ()=>{
    if(menu.classList.contains('mobaw')){
        menu.classList.remove('mobaw')
    } else {
        menu.classList.add('mobaw')
    }
})