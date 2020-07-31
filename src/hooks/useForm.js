import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleOnChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleOnChange,
    clearForm,
  };
}

export default useForm;
