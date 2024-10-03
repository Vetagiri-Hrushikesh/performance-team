// src/handlers/overviewAPIHandler.ts

import { APIAccessConfig } from '../types';
import { overviewAPIAccessConfig } from '../config/overviewAPIAccessConfig';
import { OverviewControlName, PackageType, RoleType } from '../types';

/**
 * Gets the allowed APIs for the provided controls based on the user's role and package.
 * 
 * @param controls - List of allowed controls for the 'Overview' feature.
 * @param packageType - The current user's package type ('basic' or 'premium').
 * @param role - The current user's role ('user' or 'admin').
 * @returns An object mapping control names to their respective API URLs.
 */
export const getAllowedApisForControls = (
  controls: OverviewControlName[],
  packageType: PackageType,
  role: RoleType
): { [control in OverviewControlName]?: string } => {
  const apis: { [control in OverviewControlName]?: string } = {};

  controls.forEach((control) => {
    const config = overviewAPIAccessConfig[control];
    if (config) {
      apis[control] = config[role][packageType];
    }
  });

  return apis;
};
