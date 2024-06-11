const app=require("../app")
const http=require("http")
const {Server}=require("socket.io")
const server=http.createServer(app)
const SocketHandler=new Server(server,{
    cors:{
        origin:true,
        credentials:true
    }
})
module.exports=SocketHandler