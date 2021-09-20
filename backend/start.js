require("dotenv").config();
const app = require("./app.js");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});