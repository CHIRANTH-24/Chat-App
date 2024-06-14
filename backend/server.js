const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes");
const colors = require("colors");
dotenv.config();
connectDB();
app.use(express.json()); //to accept JSON Data



app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/users',userRoutes)


const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on Port ${PORT}`.green.bold));
