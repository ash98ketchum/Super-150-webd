
// console.log(process.cwd());
// console.log(__dirname);


// cwd -> current working directory(jahan aap currently khade ho uss folder tak ka path)
// dirname -> current file ka path


// package
//  Path HTMLOutputElement


//  path.join('sam', 'vohra', 'web', 'teaching')
//  // path.join -> path ko join karta hai
//  output -> /home/sam/vohra/web/teaching

// fs -> file system 

// CRUD -> Create Read Update delete

// types of modules 
//     common js modules(es5)
//     es modules(es6 and later  )


// use npm init -y
// go to package.json 
// require and import have a difference 

// require is used in common js modules(by default)
// import is used in es modules

// change type to "modules"


// const fs = require('fs');

// import fs from fs;
// lets do crud operations on file getSystemErrorMap
// fs.writeFileSync()  fs.writeFile()

// hover on them to check all its argument 



// let data = 'namaste ji ki haal chaal copy to all'
// fs.writeFile('sam.txt', data, {
//     encoding : 'utf-8', // not neccessary
//     flag : 'w', // not neccessary
//     },
//     (err)=>{ // call back function koi khaas ijjat nhi h
//     if(!err) { console.log('file created') }
//     else throw err
// })


// fs.readFile('sam.txt', {}, (err, data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data) ///phele ye chalao dekho kya aata h fir add encoding: 'utf-8' dekhaaaaaa
// })
// // else console.log(data.toString()) ye bhi tumhara convert kar dega 

// fs.appendFile('sam.txt', ' mai nhi bata rha', (err)=>{
//     if(err) throw err
//     else console.log("data updated successfully")
// })

// fs.unlink('sam.txt', (err)=>{
//     if(err) throw err
//     else console.log('file deleted')
// })




// Requiring a File

// const sam = 'hello'
// function vohra(){
//     console.log('oo stree kal aana')
// }
// let mav ={
//     a : "woof woof"}

// // module.exports = {sammy : sam, vohraji : vohra, maverick : mav}
// // module.exports = {sam : sam, vohra : vohra, mav : mav}
// module.exports = {sam, vohra, mav}


const babu = require('./babu')

console.log(babu)

// try it wont work because babu ko manana padega na 
//pyaar se 
// toh c ko delete karke uska content index.js mei daal do 
// babu maan jaega :)


