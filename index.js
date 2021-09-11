const express = require("express");
require("dotenv").config();
require("./dbConnect");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  console.log("GOT");
  res.send("ok");
});
app.use(authRoutes);
app.use(userRoutes);
app.listen(PORT, () => {
  console.log(`Listen on PORT ${PORT}`);
});
