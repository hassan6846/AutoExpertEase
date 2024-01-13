const { app } = require("./app");




app.listen(process.env.PORT, () => {
    console.log(`Server is Running on ${process.env.PORT}`)
})