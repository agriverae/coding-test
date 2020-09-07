import { useState } from "react";

const useFormHook = (initialValues) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChanges = (e) => {
    const { name, value } = e?.target;

    setValues((currValues) => ({ ...currValues, [name]: value }));
  };

  return { values, handleChanges };
};

export default useFormHook;
