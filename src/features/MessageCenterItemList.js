import React from 'react';
import { Card as MuiCard, CardContent, Typography, Avatar } from '@mui/material';

function MessageCenterItemList({ image, name, date, title, description }) {
  return (
    <MuiCard sx={{ maxWidth: 300 }}>
      <Avatar sx={{ width: 40, height: 40 }} src={image} alt={name} />
      <CardContent sx={{ padding: 1 }}>
        <Typography variant="body1" color="text.primary" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {name} • {date}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default MessageCenterItemList;
