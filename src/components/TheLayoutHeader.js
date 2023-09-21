import React, { useState } from 'react';
import { Box, Button, Avatar, Typography, Menu, MenuItem } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { headerHeight } from '../config/constants';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import i18n from '../lib/i18n';

function LayoutHeader() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    setAnchorEl(null);
    if (lang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        height: headerHeight,
        px: 2,
        backgroundColor: '#fff',
        borderBottom: '1px solid rgba(224, 224, 224, 0.7)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 500, fontSize: '2rem' }}>
        {t('MessageCenter')}
      </Typography>

      <Button variant="outlined" sx={{ mr: 2, ml: 'auto' }}>
        {t('BackToDashboard')}
      </Button>

      {/* Dropdown for language selection */}
      {/* <Button variant="contained" onClick={handleClick} sx={{ mr: 2 }}>
        Language
        <ExpandMoreIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()}>
        <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
        <MenuItem onClick={() => handleClose('es')}>Spanish</MenuItem>
      </Menu> */}

      <Avatar sx={{ bgcolor: deepPurple[500] }}>OS</Avatar>
    </Box>
  );
}

export default LayoutHeader;
