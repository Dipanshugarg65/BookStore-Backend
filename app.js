const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./routes/book-routes");
//Middewares
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/books", router); //localhost:3005/books
mongoose
  .connect(
    "mongodb+srv://dipanshugarg65:Garg%401234@cluster0.fezwaqz.mongodb.net/"
  )

  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(3005);
  })
  .catch((err) => console.log(err));

console.log("Wait Connecting To Database");
