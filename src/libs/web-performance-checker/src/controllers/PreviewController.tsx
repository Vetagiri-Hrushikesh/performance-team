import React from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import { Tab, Tabs, Box } from '@mui/material';
import OverviewPreview from '../components/overview-preview/OverviewPreview';
import PerformancePreview from '../components/performance-preview/PerformancePreview';

const PreviewController: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { selectedFeature, features } = state;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch({ type: 'SET_SELECTED_FEATURE', payload: newValue });
  };

  const renderFeaturePreview = () => {
    switch (selectedFeature) {
      case 'Overview':
        return <OverviewPreview />;
      default:
        return <div>Please select a feature from the tabs above.</div>;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={selectedFeature || false} onChange={handleChange} aria-label="feature tabs">
        {features.map((feature, index) => (
          <Tab label={feature} value={feature} key={index} />
        ))}
      </Tabs>
      <Box sx={{ p: 3 }}>
        {renderFeaturePreview()}
      </Box>
    </Box>
  );
};

export default PreviewController;
