const express = require("express");
const dotenv = require("dotenv"); // .env files
const morgan = require("morgan"); // handles ports and url like http://
const colors = require("colors"); // changes color of console messages
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database

connectDB();

// Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Dev logging middleware
// checks if user is in the development process
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  );
});

//Handle unhandled promise rejections

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
