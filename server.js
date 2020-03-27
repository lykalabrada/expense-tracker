const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDb = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDb();

const transactions = require("./routes/transactions");

const app = express();

app.use(express.json());

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 7000;
app.listen(
  PORT,
  console.log(
    `Server started running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold
  )
);
