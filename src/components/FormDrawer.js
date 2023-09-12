import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormBuilder from './FormBuilder';

export default function FormDrawer({ open, handleClose }) {
  const inputFields = [
    { type: 'text', label: 'Text Field 1', id: 'textField1', required: true },
    {
      type: 'select',
      label: 'Select Field 1',
      id: 'selectField1',
      options: [
        { value: 10, label: 'Option 1' },
        { value: 20, label: 'Option 2' }
      ]
    },
    {
      type: 'radio',
      label: 'Radio Group 1',
      id: 'radioGroup1',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ]
    },
    { type: 'date', label: 'Date', id: 'dateField1' }
  ];

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Subscribe
          </Typography>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '16px' }}>
        <FormBuilder inputFields={inputFields} />
      </div>
    </Drawer>
  );
}
