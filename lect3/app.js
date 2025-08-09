// http
//we use express to save the number of lines of code 
// instead of http

//express is not a framework of nodejs
//express is a framework for nodejs
// 1st step require the particular package
const express = require('express')

//express is holding the function so we have to execute it 
const app = express()

//this app is the entire instance of the application super important

//we save our app to some port so that we can access it from the browser
//we use port in range(2000 - 9000)
const PORT = 5000


//package json -> most important because iske behalf pr nodemodules and package-lock json bante h. it contains basic information and dependencies of our project


//package lock json -> package lock json contains all the detailed informations locked inside the package-lock.json
app.get('/', (req, res)=>{
    res.send('Hello World')

})

// here '/' is called root route
// and req and res is the request respond pair


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

//get (ask)
//post (send)
//put (update)
//delete (delete)
//patch (update)



//nodemon bhai apne aap chala denge 

//architecture -> way of writing code
//best architecture MVC
//MVC -> Model View Controller
//Model -> database
//View -> html
//Controller -> logic of the application


//ejs -> embedded javascript 
//helps in writing js in html
