const mongoose = require("mongoose");
//main DBConnnect Function..
async function ConnectMongodb() {
  const CONNECTION_STR=process.env.CONNECTION_STRING_MONGO
  try {
    await mongoose.connect(CONNECTION_STR, {
      // We'll Add database configs here in the future....

    })
      .then(() => {
        console.log('DB connected');
      })
      .catch((err) => {
        console.error('DB connection error:', err.message);
      });
  } catch (err) {
    console.error('DB connection error:', err.message);
  }
}
module.exports = { ConnectMongodb }