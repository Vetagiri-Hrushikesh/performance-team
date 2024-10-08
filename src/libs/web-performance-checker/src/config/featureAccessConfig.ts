import { FeatureConfig } from '../types';
/**
 * featureAccessConfig defines the access configuration for various features
 * based on user roles and subscription types.
 * 
 * - Features:
 *   - Overview: Controls access to the overview feature, which may include
 *     performance metrics and other insights.
 * 
 * - Roles:
 *   - user: Represents standard users who have different subscription tiers
 *     (premium and basic).
 *   - admin: Represents admin users who have higher privileges and can
 *     access more features.
 * 
 * - Access Levels:
 *   - premium: Indicates access granted to premium users or admins.
 *   - basic: Indicates access granted to basic users or admins.
 */
export const featureAccessConfig: FeatureConfig = {
  // Configuration for the Overview feature.
  Overview: {
    user: { premium: true, basic: true },
    admin: { premium: true, basic: true }
  }
};
