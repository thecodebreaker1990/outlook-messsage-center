import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';

import {
  InputTextField,
  InputTextAreaField,
  InputSelectField,
  InputRadioGroup,
  InputDateField,
  InputSignatureField
} from './Input';

const fieldComponents = {
  text: InputTextField,
  textarea: InputTextAreaField,
  dropdown: InputSelectField,
  radio: InputRadioGroup,
  datetime: InputDateField,
  signature: InputSignatureField
};

const FormBuilder = ({ inputFields, initialValues, onSubmit }) => {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let error = '';
    if (field.required && !value.trim()) {
      error = `${field.label} is required`;
    }

    // if (field.required && (!value || (typeof value === 'string' && !value.trim()))) {
    //   error = `${field.label} is required`;
    // }
    setErrors({
      ...errors,
      [field.id]: error
    });
  };

  useEffect(() => {
    if (initialValues) {
      setFormValues(initialValues);
    }
  }, [initialValues]);

  const handleChange = (id, value) => {
    const field = inputFields.find((field) => field.id === id);
    validate(field, value);
    setFormValues({
      ...formValues,
      [id]: value
    });
  };

  const handleSubmit = () => {
    let isValid = true;
    inputFields.forEach((field) => {
      const value = formValues[field.id] || '';
      validate(field, value);
      if (field.required && !value.trim()) {
        isValid = false;
      }

      // if (field.required && (!value || (typeof value === 'string' && !value.trim()))) {
      //   isValid = false;
      // }
    });
    if (isValid) {
      // console.log('Form submitted with values:', formValues);
      onSubmit(formValues); // call passed onsubmit function
    }
  };

  const handleCancel = () => {
    // Handle form cancel logic here
    console.log('Form cancelled');
  };

  return (
    <Box component="form">
      {inputFields.map((field, index) => {
        const FieldComponent = fieldComponents[field.type];
        return FieldComponent ? (
          <FieldComponent
            key={field.id}
            field={field}
            value={formValues[field.id] || null}
            error={errors[field.id]}
            sx={index > 0 ? { mt: 2 } : {}}
            onChange={handleChange}
          />
        ) : null;
      })}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 2 }}>
        <Button variant="contained" color="secondary" sx={{ mr: 1 }} onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default FormBuilder;
