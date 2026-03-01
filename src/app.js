require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB(); // connect first

app.use(express.json());
app.use("/api", require("./routes/authRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});