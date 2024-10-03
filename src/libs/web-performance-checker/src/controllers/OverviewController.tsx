import React, { useEffect } from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import { getOverviewAllowedControls } from '../handlers/overviewControlHandler';

const OverviewController: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { packageType, role } = state;

  useEffect(() => {
    const controls = getOverviewAllowedControls('Overview', packageType, role);
    console.log('Controls for Overview:', controls);
    dispatch({ type: 'SET_OVERVIEW_CONTROLS', payload: controls });
  }, [packageType, role, dispatch]);

  return null;
};

export default OverviewController;
