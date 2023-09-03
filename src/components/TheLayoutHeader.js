import { Box } from '@mui/system';

import { headerHeight } from '../config/constants';

function LayoutHeader() {
  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        height: headerHeight,
        backgroundColor: '#fff',
        borderBottom: '1px solid rgba(224, 224, 224, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      This is Header Section
    </Box>
  );
}

export default LayoutHeader;
