const http = require('http');

const PORT = 3000;

//using this createserver function can actually create a basic http server using http module
//this function returns a server object, and takes a callbacks as an argument
//this function created a server object but did not start the server
const server=http.createServer(function listener(request,response){
    /**
     * request -> we will be able to get details of incoming http request -> object
     * 
     * response -> we will be able to configure what response we need to send for an incoming http request -> object
     */

    //this is callback is a kind of listner function that is going to collect every http request that we will male to out sever

    if(request.url=='/home')
    {
        console.log(request.method);
        response.write("first response");
        response.write("second response");
        response.end("completed");
    }

    console.log("Request received");
})

server.listen(PORT,function exe(){
    //one we succesfully boot up the server on the given port. this callback will be executed

    console.log("server is up and running on PORT :",PORT);
})

/*
how to call own local server from same device ?

127.0.0.1 
it is same as localhost


* we can only make get request from the browser url bar
*/