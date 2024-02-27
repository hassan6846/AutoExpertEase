const { app } = require("./app");
const { ConnectMongodb } = require("./db/ConnectionDb");





//Connection Database
ConnectMongodb()
//Listen
const Port = process.env.PORT
app.listen(Port, () => {
    console.log(`App is Running on Port ${Port}`)
})