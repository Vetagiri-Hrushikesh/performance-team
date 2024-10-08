import React from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import OverviewController from './OverviewController';

/**
 * FeatureController component is responsible for rendering the 
 * appropriate feature controller based on the user's selected feature.
 */
const FeatureController: React.FC = () => {
  const { state } = useGlobalState();   // Accessing the global state
  const { selectedFeature } = state;    // Extracting the currently selected feature from the global state

  // Function to render the appropriate controller based on the selected feature
  const renderFeatureController = () => {
    switch (selectedFeature) {
      case 'Overview':
        return <OverviewController />;
      default:
        return <div>Please select a valid feature.</div>;
    }
  };
  // Render the selected feature controller or the default message
  return (
    <>
      {renderFeatureController()}
    </>
  );
};

export default FeatureController;
