import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import { WebPerformanceChecker } from 'web-performance-checker';

const MainGrid = () => {

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <WebPerformanceChecker />
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
};

export default MainGrid;
