// src/controllers/OverviewController.tsx

import React, { useEffect } from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import { getOverviewAllowedControls } from '../handlers/overviewControlHandler';
import { getAllowedApisForControls } from '../handlers/overviewAPIHandler';
import { fetchDataForControls } from '../services/overviewService';

const OverviewController: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { packageType, role } = state;

  useEffect(() => {
    // Step 1: Get the allowed controls for the 'Overview' feature
    const controls = getOverviewAllowedControls('Overview', packageType, role);
    console.log('Controls for Overview:', controls);
    
    // Step 2: Set the default selected control
    dispatch({ type: 'SET_OVERVIEW_CONTROLS', payload: controls });
    
    // Step 3: Get the allowed APIs for the determined controls
    const allowedApis = getAllowedApisForControls(controls, packageType, role);
    console.log('Allowed APIs for Controls:', allowedApis);

    // Step 4: Call the overviewService to fetch the data
    fetchDataForControls(allowedApis, dispatch);
  }, [packageType, role, dispatch]);

  return null;  // No UI to render, just handling the API calls and state management
};

export default OverviewController;
