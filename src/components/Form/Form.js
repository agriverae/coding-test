import React from "react";
import useFormHook from "../../hooks/useFormHook";
import useCreateDrivers from "../../hooks/useCreateDrivers";

const initialValues = {
  name: "",
  age: 0,
  patent: "",
  telephone: "",
  model: "",
  year: "",
};

const Forms = () => {
  const [createDriver] = useCreateDrivers();
  const { values, handleChanges } = useFormHook(initialValues);
  return (
    <div className="form">
      <h2>Fill out form</h2>
      <div className="form-item">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          value={values.name}
        />
      </div>
      <div className="form-item">
        <label>Edad: </label>
        <input
          type="number"
          name="age"
          onChange={handleChanges}
          value={values.age}
        />
      </div>
      <div className="form-item">
        <label>Telefono: </label>
        <input
          name="telephone"
          onChange={handleChanges}
          value={values.telephone}
        />
      </div>
      <div className="form-item">
        <label>Patente: </label>
        <input
          type="text"
          name="patent"
          onChange={handleChanges}
          value={values.patent}
        />
      </div>
      <div className="form-item">
        <label>Modelo: </label>
        <input
          type="text"
          name="model"
          onChange={handleChanges}
          value={values.model}
        />
      </div>
      <div className="form-item">
        <label>Año: </label>
        <input
          type="number"
          name="year"
          onChange={handleChanges}
          value={values.year}
        />
      </div>
      <button
        onClick={() => {
          createDriver(values);
        }}
      >
        Creater Driver
      </button>
    </div>
  );
};

export default Forms;
