const express = require("express");
const router = new express.Router();

//2.Define the router
router.get("/sania", (req, res) => {
  res.send("helllloooo");
});
module.exports = router;
