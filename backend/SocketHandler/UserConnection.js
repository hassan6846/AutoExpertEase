const SocketHandler = require("../utils/SocketHandler")

//Handler

SocketHandler.on("connection",(socket)=>{
    console.log(`User is Being Connected ${socket}`)
})
