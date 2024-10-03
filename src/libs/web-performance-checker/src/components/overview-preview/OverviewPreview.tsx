import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import OverviewCircularProgress from './OverviewCircularProgress';
import OverviewTabBar from './OverviewTabBar';
import { useGlobalState } from '../../providers/GlobalContext';

const OverviewPreview: React.FC = () => {
  const { state } = useGlobalState();
  const { overviewControls } = state;

  // Mock metrics data for OverviewCircularProgress
  const metrics = [
    { label: 'Performance', value: 83 },
    { label: 'Accessibility', value: 75 },
    { label: 'Best Practices', value: 92 },
    { label: 'SEO', value: 87 },
  ];

  return (
    <Grid container spacing={2} direction="column">
      {/* Render Circular Progress bars dynamically */}
      {overviewControls.includes('OverviewCircularProgress') && (
        <Grid>
          <OverviewCircularProgress metrics={metrics} />
        </Grid>
      )}

      {/* Render Vertical Tabs dynamically */}
      {overviewControls.includes('OverviewTabBar') && (
        <Grid xs={12} sx={{ width: '50%', marginTop: '20px' }}>
          <OverviewTabBar />
        </Grid>
      )}
    </Grid>
  );
};

export default OverviewPreview;
