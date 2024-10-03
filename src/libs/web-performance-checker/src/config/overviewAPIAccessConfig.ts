// src/config/overviewAPIAccessConfig.ts

import { APIAccessConfig } from '../types';

export const overviewAPIAccessConfig: APIAccessConfig = {
  OverviewCircularProgress: {
    user: {
      basic: '/api/overview/circular-progress/basic',
      premium: '/api/overview/circular-progress/premium',
    },
    admin: {
      basic: '/api/overview/circular-progress/basic',
      premium: '/api/overview/circular-progress/premium',
    },
  },
  OverviewTabBar: {
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
