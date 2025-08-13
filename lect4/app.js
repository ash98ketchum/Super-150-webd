//express js
// it is a build on the top of nodejs it is not framework of nodejs it is framework for nodejs
const express = require('express')
const app = express()
app.get('/', (req,res)=>{
    console.log('hello world');
})
// app.get('*',(req,res)=>{
//     console.log("hiii bhai");
// })
   
//RESTFUL ROUTING

//RE -> representational
//S -> state
//T -> transfer

// index       /blogs          GET        display a list of blogs
// new         /blogs/new      GET        show form to create a new blog
// create      /blogs          POST       create a new blog then redirect
// show        /blogs/:id      GET        show details of a blog
// edit        /blogs/:id/edit GET        show form to edit a blog
// update      /blogs/:id      PUT        update a blog then redirect
// delete      /blogs/:id      DELETE     delete a blog then redirect 

let arr =[10,20,30,40,50]
//all redirect paths wont be showing anything on the page
const path = require('path')
// const app = express();
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
app.get('/',(req,res)=>{
    res.send("wlecome to root route");
})
app.get('/home',(req,res)=>{
    res.send("wlecome to home ");
})
app.get('/aniii',(req,res)=>{
    res.render('products/index.ejs', {arr})
})

const PORT = 4000;
app.listen(PORT, (req,res)=>{
    console.log(`server is running on port ${PORT}`);
})