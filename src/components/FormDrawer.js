import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormBuilder from './FormBuilder';

export default function FormDrawer({ open, handleClose, inputFields }) {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Form Details
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
