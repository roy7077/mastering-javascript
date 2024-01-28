// MVC - https://medium.com/@ipenywis/what-is-the-mvc-creating-a-node-js-express-mvc-application-da10625a4eda
// middleware - https://expressjs.com/en/guide/using-middleware.html

const express = require('express')
const app = express()
const port = 3000

const middleware1=(req,res,next)=>{
    console.log("1st middleware");
    next();
}

const middleware2=(req,res,next)=>{
    console.log("2nd middleware");
    //return res.json({msg:"returning"});  //this will return at the line , will not call next middleware
    next();
}

const arrayMiddle=[middleware1,middleware2];

//this one is controller , this is also a type of middleware 
//but this is last middleware and intract to modal or backend
app.get('/', arrayMiddle,(req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
