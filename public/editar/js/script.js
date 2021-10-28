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
            menu.classList.remove('mobaw');
            logo.style.display = 'block';
            fechar.style.display = 'none';
            barra.style.display = 'none';
            search.style.display = 'none';
        } else if (document.body.clientWidth < 1035){
            search.style.display = 'block';
            logo.style.display = 'block';
            fechar.style.display = 'none';
            barra.style.display = 'none';
        }
    })

    icon.addEventListener('click', ()=>{
        if(menu.classList.contains('mobaw')){
            menu.classList.remove('mobaw')
        } else {
            menu.classList.add('mobaw')
        }
    })




//search
  const barra = document.querySelectorAll('.barrapesquisa')[0];
  const search = document.querySelectorAll('.search img')[0];
  const logo = document.querySelectorAll('.logo')[0];
  const fechar = document.querySelectorAll('.close')[0];
  search.addEventListener('click', ()=>{
    if(logo.classList.contains('none')){

        logo.style.display = 'block';
        search.style.display = 'block';
        barra.style.display = 'none';

    } else {
        logo.style.display = 'none';
        search.style.display = 'none';
        barra.style.display = 'block';
        fechar.style.display = 'block';
        icon.style.marginLeft = '3%'
    }

  })

  fechar.addEventListener('click', ()=>{
      if(fechar.style.display == 'block'){
          search.style.display = 'block';
          fechar.style.display = 'none';
          barra.style.display = 'none';
          logo.style.display = 'block';
          icon.style.marginLeft = '0px'
      } 
  })