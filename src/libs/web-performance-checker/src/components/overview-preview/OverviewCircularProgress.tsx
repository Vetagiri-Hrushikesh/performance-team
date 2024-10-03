import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface CircularProgressProps {
  metrics: { label: string; value: number }[];
}

const OverviewCircularProgress: React.FC<CircularProgressProps> = ({ metrics }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {metrics.map((metric, index) => (
        <Grid key={index} xs={'auto'}>
          <Box sx={{ position: 'relative', display: 'inline-flex', m: 2 }}>
            <CircularProgress variant="determinate" value={metric.value} size={80} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" component="div" color="text.secondary">
                {`${Math.round(metric.value)}%`}
              </Typography>
            </Box>
          </Box>
          <Typography align="center">{metric.label}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default OverviewCircularProgress;
