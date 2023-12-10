import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress className='Loader' />
    </Box>
  );
};

export default Loader;
