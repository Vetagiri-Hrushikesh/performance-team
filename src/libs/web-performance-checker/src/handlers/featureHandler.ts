// src/handlers/FeatureHandler.ts
import { FeatureKey, PackageType, RoleType, FeatureConfig } from '../types';
import { featureAccessConfig } from '../config/featureAccessConfig';

/**
 * Function to get allowed features based on the user's package type and role.
 * 
 * This function checks the feature access configuration to determine which features
 * are accessible to a user based on their assigned role (e.g., user, admin) 
 * and their subscription package type (e.g., basic, premium).
 *
 * @param packageType - The subscription package type of the user (e.g., 'premium' or 'basic').
 * @param role - The role of the user (e.g., 'user' or 'admin').
 * @returns An array of FeatureKey representing the features that the user is allowed to access.
 */
export const getAllowedFeatures = (packageType: PackageType, role: RoleType): FeatureKey[] => {
  // Retrieve all feature keys defined in the feature access configuration
  const keys = Object.keys(featureAccessConfig) as FeatureKey[];
  // Filter the keys to determine which features are allowed based on the user's role and package type
  return keys.filter((feature) => {
    const accessConfig = featureAccessConfig[feature];
  // Check if the feature is defined in the access config and if the user has access based on their role and package
    return accessConfig && accessConfig[role][packageType];
  });
};
