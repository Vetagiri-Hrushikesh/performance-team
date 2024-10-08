import { ControlConfig } from '../types';
/**
 * overviewControlAccessConfig defines the control access configuration for
 * various overview-related features based on user roles and subscription types.
 * 
 * - Features:
 *   - Overview: Main feature that encompasses controls for circular progress
 *     and tab bar functionalities.
 * 
 * - Roles:
 *   - user: Represents standard users with different subscription tiers
 *     (premium and basic).
 *   - admin: Represents admin users who have access to the same controls as 
 *     standard users.
 * 
 * - Access Levels:
 *   - premium: Indicates access to both OverviewCircularProgress and 
 *     OverviewTabBar controls.
 *   - basic: Indicates access to only the OverviewCircularProgress control.
 */
export const overviewControlAccessConfig: ControlConfig = {
    // Configuration for the Overview feature.
    Overview: {
        premium: {
            user: ['OverviewCircularProgress', 'OverviewTabBar'],
            admin: ['OverviewCircularProgress', 'OverviewTabBar']
        },
        basic: {
            user: ['OverviewCircularProgress'],
            admin: ['OverviewCircularProgress', 'OverviewTabBar']
        }
    }
};
