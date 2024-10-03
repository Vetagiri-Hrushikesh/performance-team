import { ControlConfig } from '../types';

export const overviewControlAccessConfig: ControlConfig = {
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
