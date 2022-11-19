const mongoose = require("mongoose");

const prescriptionSchmea = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  complaints: {
    type: String
  },
  allergies: {
    type: String
  },
  Diagnosis: {
    type: String
  },
  dosage: [
    {
      medicineName: {
        type: String,
        required: true
      },
      qty: {
        type: Number,
        required: true
      },
      duration: {
        type: String
      },
      consumption: {
        type: String,
        required: true
      }
    }
  ]
});

const Prescriptions = mongoose.model("PRESCRIPTION", prescriptionSchmea);

module.exports = Prescriptions;
