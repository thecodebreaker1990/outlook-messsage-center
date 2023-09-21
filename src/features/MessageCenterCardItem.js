import { backgroundColor } from '../config/constants';
import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import { deepPurple, lightBlue, green, red } from '@mui/material/colors';

function MessageCenterCardItem({
  reviewer,
  date,
  message,
  desc,
  onSelect,
  isSelected = false,
  isUnread = false
}) {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: isSelected ? lightBlue[100] : backgroundColor,
        borderBottom: '1px solid rgba(224, 224, 224, 0.7)',
        p: 1,
        pl: 4.5,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: isSelected ? lightBlue[50] : 'rgba(200, 200, 200, 0.2)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          zIndex: 1
        }
      }}
      onClick={onSelect}
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
        <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>N</Avatar>
      </Box>

      {/* container for reviewer and date */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
        <Box sx={{ flex: '1 0 50%', minWidth: 0 }}>
          <Typography
            className="mc-text-overflow"
            variant="body1"
            color="text.primary"
            fontWeight="bold"
            fontSize="small"
          >
            {reviewer}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.primary">
          {date}
        </Typography>
      </Box>

      <Typography sx={{ mb: 0.5 }} variant="body1" color="text.primary" fontWeight="bold">
        {message}
      </Typography>
      <Typography className="mc-text-overflow" variant="body1" color="text.primary">
        {desc}
      </Typography>
    </Box>
  );
}

export default MessageCenterCardItem;
