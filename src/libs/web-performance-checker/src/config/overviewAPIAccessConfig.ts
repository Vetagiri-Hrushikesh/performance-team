// src/config/overviewAPIAccessConfig.ts

import { APIAccessConfig } from '../types';
/**
 * overviewAPIAccessConfig defines the API access configurations for various
 * overview-related features based on user roles and subscription types.
 * 
 * - Features:
 *   - OverviewCircularProgress: API endpoints related to the circular progress
 *     overview feature.
 *   - OverviewTabBar: API endpoints related to the tab bar overview feature.
 * 
 * - Roles:
 *   - user: Represents standard users with different subscription tiers
 *     (premium and basic).
 *   - admin: Represents admin users who have access to the same API endpoints
 *     as standard users.
 * 
 * - Access Levels:
 *   - basic: Indicates the API endpoint for basic users.
 *   - premium: Indicates the API endpoint for premium users.
 */
export const overviewAPIAccessConfig: APIAccessConfig = {
    // Configuration for the OverviewCircularProgress feature.
  OverviewCircularProgress: {
    // API access settings for the 'user and admin' role.
    user: {
      basic: '/api/overview/circular-progress/basic',
      premium: '/api/overview/circular-progress/premium',
    },
    admin: {
      basic: '/api/overview/circular-progress/basic',
      premium: '/api/overview/circular-progress/premium',
    },
  },
  // Configuration for the OverviewTabBar feature.
  OverviewTabBar: {
  // API access settings for the 'user and admin' role.
    user: {
      basic: '/api/overview/tab-bar/basic',
      premium: '/api/overview/tab-bar/premium',
    },
    admin: {
      basic: '/api/overview/tab-bar/basic',
      premium: '/api/overview/tab-bar/premium',
    },
  },
};
