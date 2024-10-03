import React from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import OverviewController from './OverviewController';

const FeatureController: React.FC = () => {
  const { state } = useGlobalState();
  const { selectedFeature } = state;

  const renderFeatureController = () => {
    switch (selectedFeature) {
      case 'Overview':
        return <OverviewController />;
      default:
        return <div>Please select a valid feature.</div>;
    }
  };

  return (
    <>
      {renderFeatureController()}
    </>
  );
};

export default FeatureController;
