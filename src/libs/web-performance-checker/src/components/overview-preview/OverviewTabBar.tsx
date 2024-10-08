import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const OverviewTabBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Left side: Vertical Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        orientation="vertical"
        aria-label="overview tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Performance" />
        <Tab label="Accessibility" />
        <Tab label="Best Practices" />
        <Tab label="SEO" />
      </Tabs>
      {/* Right side: Grid container for tab content */}
      <Grid container direction="column" sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h6">
          {selectedTab === 0 && 'Performance Details...'}
          {selectedTab === 1 && 'Accessibility Details...'}
          {selectedTab === 2 && 'Best Practices Details...'}
          {selectedTab === 3 && 'SEO Details...'}
        </Typography>
      </Grid>
    </Box>
  );
};

export default OverviewTabBar;
