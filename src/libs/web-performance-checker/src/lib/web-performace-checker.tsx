import React from 'react';
import { Box } from '@mui/material';
import DisplayController from '../controllers/DisplayController';
import PreviewController from '../controllers/PreviewController';

const WebPerformanceChecker: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'row', p: 2, bgcolor: 'background.default' }}>
        <DisplayController />
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <PreviewController />
      </Box>
    </Box>
  );
};

export default WebPerformanceChecker;
