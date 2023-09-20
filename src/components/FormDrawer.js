import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Snackbar, Alert as MuiAlert } from '@mui/material';
import FormBuilder from './FormBuilder';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FormDrawer({ open, handleClose, ...formBuilderProps }) {
  const [openAlert, setOpenAlert] = useState(false);
  const { t } = useTranslation();

  const showAlert = () => {
    setOpenAlert(true);
  };

  const hideAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: {
              lg: '35vw', // On 1280px width, make it 35vw
              xl: '38vw', // On 1366px width, make it 38vw
              xxl: '40vw' // On 1920px width and above, make it 40vw
            }
          }
        }}
      >
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
          <FormBuilder
            {...formBuilderProps}
            successCallback={() => {
              handleClose();
              showAlert();
            }}
            cancelCallback={handleClose}
          />
        </div>
      </Drawer>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={hideAlert}>
        <Alert onClose={hideAlert} severity="success" sx={{ width: '100%' }}>
          {t('FormSavedMessage')}
        </Alert>
      </Snackbar>
    </>
  );
}
