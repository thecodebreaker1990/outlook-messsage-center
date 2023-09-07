import { backgroundColor } from '../config/constants';
import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import { deepPurple, lightBlue, green, red } from '@mui/material/colors';

function MessageCenterCardItem({
  reviewer,
  date,
  message,
  desc,
  isSelected = false,
  isUnread = false
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: isSelected ? lightBlue[100] : backgroundColor,
        borderBottom: '1px solid rgba(224, 224, 224, 0.7)',
        p: 1,
        pl: 4.5
      }}
    >
      {/* Status bar */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '5px',
          backgroundColor: isUnread ? red[500] : green[500]
        }}
      />
      <Box sx={{ position: 'absolute', left: '10px', top: '10px' }}>
        <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>U</Avatar>
      </Box>
      <Box sx={{ position: 'absolute', right: '10px', top: '10px' }}>
        <Typography variant="body2" color="text.primary">
          {date}
        </Typography>
      </Box>
      <Typography variant="body1" color="text.primary" fontWeight="bold">
        {reviewer}
      </Typography>
      <Typography variant="body1" color="text.primary" fontWeight="bold">
        {message}
      </Typography>
      <Typography variant="body1" color="text.primary">
        {desc}
      </Typography>
    </Box>
  );
}

export default MessageCenterCardItem;
