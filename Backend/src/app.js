const express = require("express");
require("./db/conn");
const Item = require("./models/items");
const itemsRouter = require("./routers/items");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 8080;
app.use(express.json());
//3.we need to register our router
app.use(itemsRouter);
//create new items
app.get("/", (req, res) => {
  res.send("hello from other side by tyh");
});

//send data to db
app.post("/items", (req, res) => {
  const product = new Item(req.body);
  product
    .save()
    .then(() => {
      res.status(201).send(product);
    })
    .catch((err) => {
      console.log("i have no idea");
    });
});
//console.log(req.body);
//res.send("hello from the other side of");

//::::::::::::::::::::::::asnync and awais function::::::::::::::::::
// app.post("/items", (req, res) => {
//   try {
//     const product = new items(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

//::::::::::::read data from api::::::::::::::::
app.get("/items", async (req, res) => {
  try {
    const itemsData = await Item.find();
    res.send(itemsData);
  } catch (err) {
    res.send(err);
  }
});

// //get the individual category data  where it is equal to Perfume
app.get("/items/", async (req, res) => {
  const ICategory = req.query.category;
  console.log(ICategory);
  console.log(hello);
  try {
    const itemCategory = await Item.find(ICategory);

    if (!itemCategory) {
      return res.status(404).send;
    } else {
      res.send(itemCategory);
    }
  } catch (err) {
    res.send(err);
  }
});

// get the individual Student data using id
app.get("/items/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const itemData = await Item.findById(_id);
    if (!itemData) return res.status(404).send;
    else {
      res.send(itemData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// update the individual Item data using id
app.patch("/items/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const updateItems = await Item.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    res.send(updateItems);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete the individual Item data using id
app.delete("/items/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteItems = await Item.findByIdAndDelete(_id, req.body);
    if (!_id) {
      return res.status(400).send();
    }
    res.send(deleteItems);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Connection is setup on port: ${port}`);
});
