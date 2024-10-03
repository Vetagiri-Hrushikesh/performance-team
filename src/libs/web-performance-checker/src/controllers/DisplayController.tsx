// src/controllers/DisplayController.tsx
import React, { useEffect } from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import { getAllowedFeatures } from '../handlers/featureHandler';
import FeatureController from './FeatureController';

const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { isAuthenticated, role, packageType } = state;

  useEffect(() => {
    if (!isAuthenticated) return;
    
    const features = getAllowedFeatures(packageType, role);
    dispatch({ type: 'SET_FEATURES', payload: features });
    
    // Optionally set a default feature if none is selected
    if (!state.selectedFeature && features.length > 0) {
      dispatch({ type: 'SET_SELECTED_FEATURE', payload: features[0] });
    }
  }, [isAuthenticated, role, packageType, dispatch, state.selectedFeature]);

  return <FeatureController />;
};

export default DisplayController;
