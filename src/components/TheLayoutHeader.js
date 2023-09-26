import React, { useState } from 'react';
import {
  Box,
  Button,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Imported search icon
import { deepPurple } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { headerHeight } from '../config/constants';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../providers/languageProvider';

// import i18n from '../lib/i18n';

function LayoutHeader() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { language, changeLanguage } = useLanguage();

  // useEffect(() => {
  //   const onLanguageChange = () => {
  //     setCurrentLang(i18n.language);
  //   };

  //   i18n.on('languageChanged', onLanguageChange);
  //   return () => {};
  // }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    setAnchorEl(null);
    if (lang) {
      changeLanguage(lang);
    }
  };
  const languageLabel = language === 'en' ? 'EN' : 'ES';

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
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 500, fontSize: '2rem' }}>
        {t('MessageCenter')}
      </Typography>

      {/* Updated search bar in the middle */}
      <TextField
        variant="outlined"
        size="small"
        value={searchQuery}
        autoComplete="off"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t('Search')}
        sx={{ width: '30%', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton sx={{ padding: '10px', cursor: 'text' }}>
                <SearchIcon sx={{ color: 'rgba(0, 0, 0, 0.5)' }} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <Box sx={{ display: 'flex' }}>
        <Button size="small" variant="outlined" sx={{ mr: 2 }}>
          {t('BackToDashboard')}
        </Button>

        {/* Dropdown for language selection */}
        <Button variant="contained" onClick={handleClick} sx={{ mr: 2 }}>
          {languageLabel}
          <ExpandMoreIcon />
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()}>
          <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
          <MenuItem onClick={() => handleClose('es')}>Spanish</MenuItem>
        </Menu>

        <Avatar sx={{ bgcolor: deepPurple[500] }}>OS</Avatar>
      </Box>
    </Box>
  );
}

export default LayoutHeader;
