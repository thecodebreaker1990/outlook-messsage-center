import React from 'react';
import { Box } from '@mui/system';
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
          width: '25%',
          height: '100%',
          overflowY: 'auto',
          backgroundColor: '#fff',
          borderRight: '1px solid #ccc'
        }}
      >
        <MessageCenterCardItem {...cardData} />
        <MessageCenterCardItem {...cardData} />
      </Box>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <MessageCenterCardDetails />
      </Box>
    </Box>
  );
}
export default MessageCenter;
