const mongoose = require("mongoose");
const express = require("express");
const fetch = require("node-fetch");

// connection to mongodb cloud database;
const app = express();
require("../server/db/connection");
// Schema to store data in mongodb.
const Prescriptions = require("../server/model/prescriptionSchema");

// app.use(express.static("dist"));  If I have to use EJS
app.use(express.json());

// separate the router in one location
// app.use(require("../server/router/auth"));

// Middleware in Nodejs
const middleware = (req, res, next) => {
  console.log("First fo throught middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello from Router...");
});

app.post("/register", async (req, res) => {
  const {
    name,
    email,
    age,
    sex,
    complaints,
    allergies,
    Diagnosis,
    dosage
  } = req.body;
  if (
    !name ||
    !email ||
    !age ||
    !sex ||
    !complaints ||
    !allergies ||
    !Diagnosis ||
    !dosage
  ) {
    return res
      .status(422)
      .json({ error: "Please fill all the required properties" });
  }

  try {
    const newprescription = new Prescriptions({
      name,
      email,
      age,
      sex,
      complaints,
      allergies,
      Diagnosis,
      dosage
    });

    await newprescription.save();
    res.status(201).json({ message: "User Register Successfully" });
  } catch (err) {
    console.log(err);
  }

  // console.log(name);
  // res.json({ message: req.body });
});

app.listen(process.env.PORT || 8000, () =>
  console.log(`Listening on port ${process.env.PORT || 8000}!`)
);
