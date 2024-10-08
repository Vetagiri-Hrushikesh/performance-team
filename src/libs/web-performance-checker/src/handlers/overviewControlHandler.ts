import { PackageType, RoleType, OverviewControlName, ControlConfig, FeatureKey } from '../types';
import { overviewControlAccessConfig } from '../config/overviewControlAccessConfig';

/**
 * Retrieves the allowed controls for a specific feature based on the user's package type and role.
 * 
 * This function checks the configuration to determine which controls are accessible to the user
 * based on their feature key, package type (basic or premium), and role (user or admin).
 *
 * @param feature - The feature key for which to retrieve the allowed controls.
 * @param packageType - The current user's package type ('basic' or 'premium').
 * @param role - The current user's role ('user' or 'admin').
 * @returns An array of allowed control names for the specified feature.
 * */

export const getOverviewAllowedControls = (feature: FeatureKey, packageType: PackageType, role: RoleType): OverviewControlName[] => {
    // Retrieve the configuration for the specified feature from the overviewControlAccessConfig
    const featureConfig = overviewControlAccessConfig[feature];
    if (!featureConfig) {
        return [];
    }

    // Retrieve the package configuration for the specified package type
    const packageConfig = featureConfig[packageType]; 
    if (!packageConfig) {
        return [];
    }
    // Retrieve the control names accessible for the specified role
    const controlNames = packageConfig[role];
    return controlNames || [];
};
