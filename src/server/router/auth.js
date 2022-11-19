const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

require("../server/db/connection");
const Prescription = require("../server/model/prescriptionSchema");

router.get("/", (req, res) => {
  res.send("Hello from Router I don't know that time");
});

router.post("/register", (req, res) => {
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
  console.log(name);
  res.json({ message: req.body });
});

module.exports = router;
