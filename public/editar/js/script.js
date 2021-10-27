//Main
    const main = document.querySelector("main");
    const noticia = document.querySelectorAll(".notnull")[0];
    if(typeof(noticia) == 'undefined'){
        console.log(1)
        main.innerHTML = '<h2>Nenhuma notícia cadastrada</h2>'
    }




//Menu Mobile
    const icon = document.querySelectorAll(".menub")[0];
    const menu = document.querySelectorAll(".menu-mobile")[0];
    const header = document.querySelector("header");
    addEventListener('resize', ()=>{
        if(document.body.clientWidth > 1035){
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

