import React from 'react';
import { FormFieldBase, Input } from './styles';

function FormField({ label, name, type, value, onChange }) {
  return (
    <FormFieldBase>
      <label>
        {label}
        <Input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        ></Input>
      </label>
    </FormFieldBase>
  );
}

export default FormField;
