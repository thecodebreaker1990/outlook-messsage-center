import { Box, Button, Typography, Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function MessageCenterCardDetails() {
  return (
    <Box sx={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', p: 2 }}>
      <Typography variant="h4">Nuevo mantenimiento programado</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>OS</Avatar>
        <Box sx={{ ml: 1 }}>
          <Typography variant="body1" color="text.primary" fontWeight="bold">
            John Doe
          </Typography>
          <Typography>jomgmith@skyace.com</Typography>
        </Box>
        <Typography variant="body2" color="text.primary" sx={{ marginLeft: 'auto' }}>
          Hoy at 1:33pm
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', pl: '10', border: '1px solid #ccc' }}>
        <img
          src="/assets/person/ad.jpg"
          alt="description"
          style={{ width: '100px', height: 'auto', marginRight: '16px' }}
        />
        <Box>
          <Typography variant="body1">Medellin, 23 de Junio 2021</Typography>
          <Typography variant="body1">Propiedad QWY874</Typography>
          <Typography variant="body2" sx={{ my: 2 }}>
            Reciban un cordial saludo, muchas gracias por contactamos. De acuerdo con la
            conversacioN, tenemos el gusto de presentar este documento GRUPO ZLIPERS.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: '10' }}>
          <Button variant="contained" color="primary">
            Firmar EEP
          </Button>
          <Typography variant="body2" sx={{ ml: 2 }}>
            Cualquier inquietud comunicarse a support@zlipers.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MessageCenterCardDetails;
