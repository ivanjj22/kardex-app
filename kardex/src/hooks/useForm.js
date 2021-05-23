import { useState, useEffect } from "react";

export const useForm = (initialState = {}, updateState) => {
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    if(updateState) {
      setValues(updateState);
    }
  }, [updateState]);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
