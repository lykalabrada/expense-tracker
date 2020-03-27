const path = require("path");
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

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

// Serve index.html for Production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 7000;
app.listen(
  PORT,
  console.log(
    `Server started running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold
  )
);
