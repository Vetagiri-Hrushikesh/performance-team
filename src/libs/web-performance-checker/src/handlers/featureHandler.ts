// src/handlers/FeatureHandler.ts
import { FeatureKey, PackageType, RoleType, FeatureConfig } from '../types';
import { featureAccessConfig } from '../config/featureAccessConfig';

// Function to get allowed features based on the user's package type and role
export const getAllowedFeatures = (packageType: PackageType, role: RoleType): FeatureKey[] => {
  const keys = Object.keys(featureAccessConfig) as FeatureKey[];
  return keys.filter((feature) => {
    const accessConfig = featureAccessConfig[feature];
    return accessConfig && accessConfig[role][packageType];
  });
};
