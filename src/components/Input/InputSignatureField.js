import React from 'react';
import { InputLabel, Box } from '@mui/material';
import BaseFormControl from '../BaseFormControl';
import SignatureCanvas from 'react-signature-canvas';

const InputSignatureField = ({ field, value, onChange, error, ...rest }) => {
  return (
    <BaseFormControl field={field} value={value} error={error} {...rest}>
      <InputLabel sx={{ mb: 1 }} htmlFor="signature-canvas">
        {field.label}
      </InputLabel>
      <Box
        sx={{
          border: '1px solid #ccc',
          borderRadius: 4,
          maxHeight: 300,
          overflow: 'hidden'
        }}
      >
        <SignatureCanvas
          penColor="green"
          canvasProps={{
            width: 400, // This will get overwritten by CSS styles
            height: 200,
            className: 'sigCanvas',
            id: 'signature-canvas'
          }}
        />
      </Box>
    </BaseFormControl>
  );
};

export default InputSignatureField;
