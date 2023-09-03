import { Box, Container } from '@mui/system';

import TheLayoutHeader from './TheLayoutHeader';
import TheLayoutNavbar from './TheLayoutNavbar';
import { headerHeight, navbarWidth } from '../config/constants';

function Layout({ children }) {
  return (
    <Container maxWidth="100vw" disableGutters={true}>
      <Box
        sx={{
          height: '100vh',
          background: '#f4f4f4',
          overflow: 'hidden'
        }}
      >
        <TheLayoutNavbar />
        <Box sx={{ width: '100%', height: '100%', ml: `${navbarWidth}px` }}>
          <TheLayoutHeader />
          <Box
            component="main"
            sx={{ height: `calc(100vh - ${headerHeight}px)`, overflowY: 'auto' }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Layout;
