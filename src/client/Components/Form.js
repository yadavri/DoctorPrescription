import React, { useState } from "react";
function Form() {
  const [note, setNote] = useState({
    Name: "",
    email: "",
    age: "",
    sex: "",
    complaints: "",
    allergies: "",
    Diagnosis: "",
    dosage: [
      {
        medicineName: "",
        qty: "",
        duration: "",
        consumption: ""
      }
    ]
  });

  const [dosage, setDosage] = useState({
    medicineName: "",
    qty: "",
    duration: "",
    consumption: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleChangeDosage(e) {
    const { name, value } = e.target;

    setDosage((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    // props.onAdd(note);
    event.preventDefault();
    setDosage({
      medicineName: "",
      qty: "",
      duration: "",
      consumption: ""
    });
    note.dosage.push(dosage);
    console.log(note);
  }

  const submit = async (e) => {
    const {
      Name,
      email,
      age,
      sex,
      complaints,
      allergies,
      Diagnosis,
      dosage
    } = note;
    const response = await fetch(
      "https://mxdvz9-8000.sse.codesandbox.io/register",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Name,
          email,
          age,
          sex,
          complaints,
          allergies,
          Diagnosis,
          dosage
        })
      }
    );

    const data = await response.json;

    if (data.status === 442 || !data) {
      window.alert("Prescription not added!");
      console.log("Prescription not added!");
    } else {
      window.alert("Registeration successfull!");
    }
  };

  return (
    <div>
      <form className="create-note">
        <input
          type="Name"
          name="Name"
          onChange={handleChange}
          value={note.name}
          placeholder="Name"
          required="required"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={note.name}
          placeholder="Email"
          required="required"
        />
        <input
          name="age"
          onChange={handleChange}
          value={note.age}
          placeholder="Age"
          required="required"
        />
        <input
          name="sex"
          onChange={handleChange}
          value={note.sex}
          placeholder="sex"
          required="required"
        />
        <input
          name="complaints"
          onChange={handleChange}
          value={note.complaints}
          placeholder="complaints"
          required="required"
        />
        <input
          name="allergies"
          onChange={handleChange}
          value={note.allergies}
          placeholder="allergies"
          required="required"
        />
        <input
          name="Diagnosis"
          onChange={handleChange}
          value={note.Diagnosis}
          placeholder="Diagnosis"
          required="required"
        />
      </form>
      <form className="create-note">
        <input
          name="medicineName"
          onChange={handleChangeDosage}
          value={dosage.medicineName}
          placeholder="Medicine Name"
        />
        <input
          name="qty"
          onChange={handleChangeDosage}
          value={dosage.qty}
          placeholder="Quantity"
        />
        <input
          name="duration"
          onChange={handleChangeDosage}
          value={dosage.duration}
          placeholder="duration"
        />
        <input
          name="consumption"
          onChange={handleChangeDosage}
          value={dosage.consumption}
          placeholder="consumption Ex: 3 Times a day"
        />
        <button type="button" className="btn btn-warning" onClick={submitNote}>
          +
        </button>
      </form>
      <button
        className="btn btn-success"
        style={{ marginLeft: "48%" }}
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
}

export default Form;
