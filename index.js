const express = require("express");
require("dotenv").config();
require("./dbConnect");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Listen on PORT ${PORT}`);
});
