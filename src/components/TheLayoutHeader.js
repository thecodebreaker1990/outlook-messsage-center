import { Box } from '@mui/system';
import { Button, Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import { headerHeight } from '../config/constants';

function LayoutHeader() {
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
      <Box component="h1" typography={{ fontWeight: 500 }}>
        Message Center
      </Box>
      <Button variant="outlined" sx={{ mr: 2, ml: 'auto' }}>
        Go Back To Dashboard
      </Button>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OS</Avatar>
    </Box>
  );
}

export default LayoutHeader;
