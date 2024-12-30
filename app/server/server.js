//imports
const  app = require("./app");
const Port = process.env.PORT || 3000;
//libs
const http=require("http")
const socketio=require("socket.io")

//server
const server=http.createServer(app)
const io=socketio(server)
//socket
io.on("connection",(socket)=>{
    console.log("new connection")
    socket.on("disconnect",()=>{
        console.log("user left")
    })
})
//listen
server.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})

 
