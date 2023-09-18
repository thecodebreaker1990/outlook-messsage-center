import React, { useEffect, useState, useRef } from 'react';
import { InputLabel, Box } from '@mui/material';
import BaseFormControl from '../BaseFormControl';
import SignatureCanvas from 'react-signature-canvas';

const InputSignatureField = ({ field, value, onChange, error, ...rest }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(100);

  useEffect(() => {
    if (containerRef.current && canvasRef.current) {
      const { clientWidth } = containerRef.current;
      console.log(clientWidth);
      setContainerWidth(clientWidth);
    }
  }, [containerRef, canvasRef]);

  return (
    <BaseFormControl field={field} value={value} error={error} {...rest}>
      <InputLabel sx={{ mb: 1 }} htmlFor="signature-canvas">
        {field.label}
      </InputLabel>
      <Box
        ref={containerRef}
        sx={{
          border: '1px solid #ccc',
          borderRadius: 4,
          maxHeight: 300,
          width: '500px',
          overflow: 'hidden'
        }}
      >
        <SignatureCanvas
          ref={canvasRef}
          penColor="green"
          canvasProps={{
            width: containerWidth,
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
