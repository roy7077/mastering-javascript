const express = require('express')
const app = express()
const port = 3001

app.get('/home', (request, response) => {
    // response.send("hi there, welcome to get");
    response.json({
        message: "OK get"
    })
});

app.post('/home', (request, response) => {
    // response.send("hi there, welcome to post");
    response.json({
        message: "OK"
    })
});
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})