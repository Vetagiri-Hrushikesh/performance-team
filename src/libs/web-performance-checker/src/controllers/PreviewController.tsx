import React from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import { Tab, Tabs, Box } from '@mui/material';
import OverviewPreview from '../components/overview-preview/OverviewPreview';
import PerformancePreview from '../components/performance-preview/PerformancePreview';
/**
 * PreviewController component manages the display of feature previews
 * based on the currently selected feature from the tab navigation.
 * 
 * It provides tabbed navigation to switch between different features,
 * and dynamically renders the corresponding preview component.
 */
const PreviewController: React.FC = () => {
  const { state, dispatch } = useGlobalState();   // Accessing global state and dispatch function
  const { selectedFeature, features } = state;    // Extracting the currently selected feature and available features from the global state

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch({ type: 'SET_SELECTED_FEATURE', payload: newValue });  // Dispatch the new selected feature    
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
        {/* Render the preview of the currently selected feature */}
        {renderFeaturePreview()}
      </Box>
    </Box>
  );
};

export default PreviewController;
