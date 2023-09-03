import { Box } from '@mui/system';

import { navbarWidth } from '../config/constants';

function TheLayoutNavbar() {
  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: `${navbarWidth}px`,
        overflow: 'hidden',
        height: '100vh',
        backgroundColor: '#2b303b'
      }}
    ></Box>
  );
}

export default TheLayoutNavbar;
