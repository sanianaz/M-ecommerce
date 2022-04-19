const mongoose = require("mongoose");
const validator = require("validator");
const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    minLength: 3,
  },
  category: {
    type: String,
    required: true,
    minLength: 3,
  },

  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    minLength: 2,
    required: true,
  },
});

//new collection
const Item = new mongoose.model("Item", ItemSchema);
module.exports = Item;

//
