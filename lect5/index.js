const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//middleware to use public folder for static files
app.use(express.static(path.join(__dirname, 'public')))
//body parsing middleware
app.use(express.urlencoded(extended = "true"))

//use middleware have 1 parameter that is compulsory
//middleware are the function which executes when the req is initiated and we are about to reach the response
// const pass = 800;
// app.use((req, res, next)=>{
//     if(pass === 800){
//         next();
//     }
//     else{
//         res.send("sorry")
//     }
// })

const blogs = [
    {
        id : 1,
        author : "Samarth Vohra",
        comment : "aaj kamaega tabhi toh kl khaega meri jaan"
    },
    {
        id : 2,
        author : "Namat Jain",
        comment : "Bhai ka bday hai"
    },
    {
        id : 3,
        author : "Durgesh",
        comment : "Level sabke nikalenge"
    },
    {
        id : 4,
        author : "Yuvraj singh",
        comment : "Thala for a reason"
    },
    {
        id : 5,
        author : "Priyanshu",
        comment : "Papa vo cycle ki toh ...."
    }
]

app.get('/', (req,res)=>{
    res.send("this is root route");
})
//CRUD with RESTFUL architecture
//a blog application
//Create
//form
// ---------------------------- Step 2------------------------

app.get('/blog/new', (req,res)=>[
    res.render('blogs/new')
])
// -------------------------------------------------------------

// ---------------------------- Step 3------------------------
app.post('/blogs', (req, res)=>{
    let {author, comment} = req.body
    blogs.push({id : blogs.length + 1 , author, comment})
    // res.send("blog created successfully")
    res.redirect('/blogs')
})

//Read
// ---------------------------- Step 1------------------------
app.get('/blogs',(req, res)=>{
    res.render('blogs/index',{blogs})
})
// -------------------------------------------------------------
//Update


//Delete



const PORT = 5500
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})