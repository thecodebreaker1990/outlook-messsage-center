import { useState, Fragment } from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import FormDialog from '../components/FormDialog';

function MessageCenterCardDetails({ selectedMessage }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  if (!selectedMessage) {
    return <Typography>No message selected</Typography>;
  }

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
    <Fragment>
      <Box
        sx={{
          minHeight: '100%',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '10px',
          p: 2
        }}
      >
        <Typography variant="h4">{selectedMessage.message_en}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>U</Avatar>
          <Box sx={{ ml: 1 }}>
            <Typography variant="body1" color="text.primary" fontWeight="bold">
              {selectedMessage.reviewer_person}
            </Typography>
            <Typography>jomgmith@skyace.com</Typography>
          </Box>
          <Typography variant="body2" color="text.primary" sx={{ marginLeft: 'auto' }}>
            {selectedMessage.date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', border: '1px solid #ccc', p: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1">{selectedMessage.desc_en}</Typography>

            <Typography variant="body2" sx={{ my: 1 }}>
              <span style={{ fontWeight: 'bold' }}>GRUPO ZLIPERS.</span>
            </Typography>

            <Typography variant="body2" sx={{ my: 1 }}>
              {selectedMessage.desc_en}
            </Typography>

            <Typography variant="body2" sx={{ mb: 1 }}>
              Cualquier inquietud comunicarse a support@zlipers.com
            </Typography>

            <Button size="small" variant="contained" onClick={handleDialogOpen}>
              Firmar EEP
            </Button>
          </Box>
        </Box>
      </Box>
      <FormDialog open={isDialogOpen} handleClose={handleDialogClose} />
    </Fragment>
  );
}

export default MessageCenterCardDetails;
