import { Box } from '@mui/system';

function MessageCenter() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
      }}
    >
      <Box
        sx={{
          width: '25%',
          height: '100%',
          overflowY: 'auto',
          backgroundColor: '#fff',
          borderRight: '1px solid rgba(224, 224, 224, 0.7)'
        }}
      >
        This is List Section
      </Box>
      <Box sx={{ flexGrow: 1 }}>This is Details Section</Box>
    </Box>
  );
}

export default MessageCenter;
