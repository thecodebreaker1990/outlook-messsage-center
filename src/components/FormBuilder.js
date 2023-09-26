import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Lazy load the Input component
const InputTextField = lazy(() => import('./Input/InputTextField'));
const InputTextAreaField = lazy(() => import('./Input/InputTextAreaField'));
const InputSelectField = lazy(() => import('./Input/InputSelectField'));
const InputRadioGroup = lazy(() => import('./Input/InputRadioGroup'));
const InputDateField = lazy(() => import('./Input/InputDateField'));
const InputSignatureField = lazy(() => import('./Input/InputSignatureField'));

const fieldComponents = {
  text: InputTextField,
  textarea: InputTextAreaField,
  dropdown: InputSelectField,
  radio: InputRadioGroup,
  datetime: InputDateField,
  signature: InputSignatureField
};

const FormBuilder = ({ inputFields, initialValues, successCallback, cancelCallback }) => {
  const [formValues, setFormValues] = useState({});
  const [errors] = useState({});

  const { t } = useTranslation();

  useEffect(() => {
    if (initialValues) {
      setFormValues(initialValues);
    }
  }, [initialValues]);

  const handleChange = (id, value) => {
    //const field = inputFields.find((field) => field.id === id);
    //validate(field, value);
    setFormValues({
      ...formValues,
      [id]: value
    });
  };

  const handleSubmit = () => {
    let isValid = true;
    // inputFields.forEach((field) => {
    //   const value = formValues[field.id] || defaultFieldValue(field.type);
    //   validate(field, value);
    // });
    if (isValid) {
      console.log('Form submitted with values:', formValues);
      successCallback();
    }
  };

  const handleCancel = () => {
    // Handle form cancel logic here
    console.log('Form cancelled');
    cancelCallback();
  };

  const defaultFieldValue = (fieldType) => {
    let defaultValue = '';
    switch (fieldType) {
      case 'datetime':
        defaultValue = null;
        break;
      default:
        break;
    }
    return defaultValue;
  };

  return (
    <Box component="form">
      {inputFields.map((field, index) => {
        const FieldComponent = fieldComponents[field.type];
        return FieldComponent ? (
          <Suspense key={field.id} fallback={<div>Loading...</div>}>
            <FieldComponent
              field={field}
              value={formValues[field.id] || defaultFieldValue(field.type)}
              error={errors[field.id]}
              sx={index > 0 ? { mt: 2 } : {}}
              onChange={handleChange}
            />
          </Suspense>
        ) : null;
      })}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 2 }}>
        <Button variant="contained" color="secondary" sx={{ mr: 1 }} onClick={handleCancel}>
          {t('Cancel')}
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {t('Save')}
        </Button>
      </Box>
    </Box>
  );
};

export default FormBuilder;
