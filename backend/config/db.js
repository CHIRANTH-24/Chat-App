const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(
      `MongoDB connection established ${conn.connection.host}`.green.bold
    );
  } catch (error) {
    console.log(
      `MongoDB not connected due to error: ${error.message}`.red.bold
    );
    process.exit();
  }
};

module.exports = connectDB;
