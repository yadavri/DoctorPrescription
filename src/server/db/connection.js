const mongoose = require("mongoose");
const DB =
  "mongodb+srv://rishikeshyadav:R3WkwU2X2enodFxG@cluster0.xwswly3.mongodb.net/Prescription?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("No connection");
  });
