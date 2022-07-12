const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/error-handler");
const colors = require("colors");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("<h1>Hello</h1>");
});

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port ", port);
});
