import { Box, Button, Typography, Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function MessageCenterCardDetails() {
  return (
    <Box sx={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '10px', p: 2 }}>
      <Typography variant="h4">Nuevo mantenimiento programado</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>U</Avatar>
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
      <Box sx={{ display: 'flex', border: '1px solid #ccc', p: 4 }}>
        {/* <img
          src="/assets/person/person1.jpg"
          alt="description"
          style={{ width: '10', marginRight: '30px' }}
        /> */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1">Medellin, 23 de Junio 2021</Typography>

          <Typography variant="body1">Propiedad QWY874</Typography>

          <Typography variant="body2" sx={{ my: 1 }}>
            Reciban un cordial saludo, muchas gracias por contactamos. De acuerdo con la
            conversacioN, tenemos el gusto de presentar este documento{' '}
            <span style={{ fontWeight: 'bold' }}>GRUPO ZLIPERS.</span>
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            Cualquier inquietud comunicarse a support@zlipers.com
          </Typography>

          <Button size="small" variant="contained">
            Firmar EEP
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MessageCenterCardDetails;
