import { backgroundColor } from '../config/constants';
import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function MessageCenterCardItem() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor,
        borderBottom: '1px solid rgba(224, 224, 224, 0.7)',
        p: 1,
        pl: 4.5
      }}
    >
      <Box sx={{ position: 'absolute', left: '10px', top: '10px' }}>
        <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>OS</Avatar>
      </Box>
      <Box sx={{ position: 'absolute', right: '10px', top: '10px' }}>
        <Typography variant="body2" color="text.primary">
          22 de Junio
        </Typography>
      </Box>
      <Typography variant="body1" color="text.primary" fontWeight="bold">
        John Doe
      </Typography>
      <Typography variant="body1" color="text.primary" fontWeight="bold">
        Lorem ipsum dolor sit amet ac tempor
      </Typography>
      <Typography variant="body1" color="text.primary">
        Nullam maximus ac ante ac tempor. Integer ac...
      </Typography>
    </Box>
  );
}

export default MessageCenterCardItem;
