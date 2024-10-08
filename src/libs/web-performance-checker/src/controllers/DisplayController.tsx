// src/controllers/DisplayController.tsx
import React, { useEffect } from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import { getAllowedFeatures } from '../handlers/featureHandler';
import FeatureController from './FeatureController';
/**
 * DisplayController component is responsible for determining which features 
 * are allowed for the authenticated user based on their role and package type.
 * 
 * It dispatches the list of allowed features into the global state when the user is authenticated.
 */
const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState(); // Destructuring state and dispatch from global context
  const { isAuthenticated, role, packageType } = state; // Extracting authentication status, user role, and package type from global state

  useEffect(() => {
    // Run this effect when authentication status, role, or package type changes
    if (!isAuthenticated) return;

    // Fetch allowed features based on the user's role and package type  
    const features = getAllowedFeatures(packageType, role);
    // Dispatch the allowed features to update the global state
    dispatch({ type: 'SET_FEATURES', payload: features });
    // Optionally set a default feature if none is selected
    if (!state.selectedFeature && features.length > 0) {

   
      dispatch({ type: 'SET_SELECTED_FEATURE', payload: features[0] });   // Set the first feature as selected
    }
  }, [isAuthenticated, role, packageType, dispatch, state.selectedFeature]);

  // Render the FeatureController component to display allowed features
  return <FeatureController />;
};

export default DisplayController;
