require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./route/Auth");

const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running on Port 5000");
});
