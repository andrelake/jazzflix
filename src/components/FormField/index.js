import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Input, Label } from './styles';

function FormField({ label, name, type, value, onChange }) {
  const tag = type === 'textarea' ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        ></Input>
        <Label.Text>{label}</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
