import { PackageType, RoleType, OverviewControlName, ControlConfig, FeatureKey } from '../types';
import { overviewControlAccessConfig } from '../config/overviewControlAccessConfig';

export const getOverviewAllowedControls = (feature: FeatureKey, packageType: PackageType, role: RoleType): OverviewControlName[] => {
    const featureConfig = overviewControlAccessConfig[feature];
    if (!featureConfig) {
        return [];
    }

    const packageConfig = featureConfig[packageType]; 
    if (!packageConfig) {
        return [];
    }

    const controlNames = packageConfig[role];
    return controlNames || [];
};
