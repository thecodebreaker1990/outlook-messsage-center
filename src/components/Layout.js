import { Box, Container } from '@mui/system';

function Layout() {
  return (
    <Container maxWidth="100vw" component="main" disableGutters={true}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '5% 25% auto',
          gridTemplateRows: '4rem auto',
          height: '100vh'
        }}
      >
        <Box sx={{ gridRow: '1/2', gridColumn: 'span 3' }}>Header</Box>
        <Box sx={{ gridRow: '2/2', gridColumn: 'span 1' }}>Sidebar</Box>
        <Box sx={{ gridRow: '2/2', gridColumn: 'span 1' }}>List</Box>
        <Box sx={{ gridRow: '2/2', gridColumn: 'span 1' }}>Details</Box>
      </Box>
    </Container>
  );
}

export default Layout;
