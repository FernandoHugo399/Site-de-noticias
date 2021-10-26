//Express
  const express = require('express');
  const app = express();
  const port = 8081;
  const hostname = '127.0.0.1';



  //Handlebars
    const handlebars = require('express-handlebars');
    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');



  //bodyParser
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());


  
  //Rotas do express
   
    //Rotas de paginas
      app.get('/', (req,res)=>{
          res.render('home')
      })
    




    /* Rotas com arquivos e imagens */
      app.get('/estilo', (req,res)=>{
          res.sendFile(__dirname + '/css/style.css')
      })

      app.get('/search', (req,res)=>{
          res.sendFile(__dirname + '/imagens/search.png')
      })

      app.get('/menub', (req,res)=>{
        res.sendFile(__dirname + '/imagens/icon_menu.png')
      })




  //Ligando Servidor
    app.listen(port,hostname,()=>{
        console.log('Servidor iniciado')
    })