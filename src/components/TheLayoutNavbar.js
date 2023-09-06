import { Box } from '@mui/system';
import { Button, Badge } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { navbarWidth, headerHeight } from '../config/constants';

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
    >
      <Box
        sx={{
          height: `${headerHeight}px`,
          borderBottom: 'solid 1px #fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <HomeIcon sx={{ color: '#fff' }} />
      </Box>
      <Button variant="text" sx={{ width: '100%', my: 1.5 }}>
        <Badge badgeContent={4} color="error">
          <ChatIcon sx={{ color: '#fff' }} />
        </Badge>
      </Button>
      <Button variant="text" sx={{ width: '100%', my: 1.5 }}>
        <CameraAltIcon sx={{ color: '#fff' }} />
      </Button>
      <Button variant="text" sx={{ width: '100%', my: 1.5 }}>
        <CloudUploadIcon sx={{ color: '#fff' }} />
      </Button>
    </Box>
  );
}

export default TheLayoutNavbar;
