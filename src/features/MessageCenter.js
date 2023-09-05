import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import MessageCenterCardItem from './MessageCenterCardItem';
import MessageCenterCardDetails from './MessageCenterCardDetails';

function MessageCenter() {
  const cardData = {
    image: 'https://example.com/card-image.jpg',
    name: 'John Doe',
    date: 'September 3, 2023',
    title: 'Card Title',
    description: 'This is the card description.'
  };
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
          position: 'relative',
          width: '25%',
          height: '100%',
          overflowY: 'auto',
          backgroundColor: '#fff',
          borderRight: '1px solid #ccc'
        }}
      >
        <Box sx={{ position: 'absolute', right: '10px', top: '10px' }}>
          <RefreshIcon />
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="body2" color="text.primary" sx={{ ml: 1, mb: 1 }}>
            22 de Junio
          </Typography>
          <MessageCenterCardItem {...cardData} isSelected={true} />
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="body2" color="text.primary" sx={{ ml: 1, mb: 1 }}>
            22 de Junio
          </Typography>
          <MessageCenterCardItem {...cardData} />
          <MessageCenterCardItem {...cardData} />
          <MessageCenterCardItem {...cardData} />
        </Box>
        <Box sx={{ my: 1 }}>
          <Typography variant="body2" color="text.primary" sx={{ ml: 1, mb: 1 }}>
            22 de Junio
          </Typography>
          <MessageCenterCardItem {...cardData} />
          <MessageCenterCardItem {...cardData} />
          <MessageCenterCardItem {...cardData} />
          <MessageCenterCardItem {...cardData} />
          <MessageCenterCardItem {...cardData} />
          <MessageCenterCardItem {...cardData} />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <MessageCenterCardDetails />
      </Box>
    </Box>
  );
}
export default MessageCenter;
