# news site
![part1](https://user-images.githubusercontent.com/87580316/139319097-5689657e-7f42-4a35-ba9f-29bb316807c6.jpg)
![part2](https://user-images.githubusercontent.com/87580316/139319547-dc223672-f38d-4743-a341-1eaf12048832.jpg)
![part3](https://user-images.githubusercontent.com/87580316/139319415-86030449-1df6-465f-9ca7-0a0b2444cef7.jpg)
 ---

## :mag: About: 
Dynamic news site, with the system built in nodeJS
<br>
It was based on a test that Devmedia did to hire new employees.


## 👷 how to run it:
```bash
# clone the repository
git clone https://github.com/FernandoHugo399/Site-de-noticias

# open an IDE of your choice

# Start the server with mysql

#type the code below into mysql
create database node25
character set utf8mb4
collate utf8mb4_unicode_ci; 


#Access the db.js file and change the following settings according to your server
const sequelize = new Sequelize('node25', 'root', '',{
    dialect: 'mysql',
    host: 'localhost'
})
in the first parameter, use the database name.
in the second parameter the hostname, and on the third, the password


# run the index.js file using node

# after that open your browser at http://localhost:8081/

```



## :rocket: technologies used:
<p align="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-plain-wordmark.svg" alt="html5"  width="70" height="70"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg" alt="css3" width="70" height="70"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" width="70" height="70"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" width="70" height="70"/>
 <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="ExpressJS" width="70" height="70"/>  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="sequelize" width="70" height="70"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" alt="handlebars" width="70" height="70"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="70" height="70"/>
 
