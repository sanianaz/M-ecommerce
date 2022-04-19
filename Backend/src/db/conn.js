const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/items";
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log("connection is not successful");
  });
