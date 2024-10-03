// src/types/index.ts

// Enumerates available package types within the application.
export type PackageType = 'basic' | 'premium';

// Enumerates available roles for users within the application.
export type RoleType = 'user' | 'admin';

// Enumerates keys for identifying features within the application.
export type FeatureKey = 'Overview';

// Enumerates control names within the Overview feature.
export type OverviewControlName = 'OverviewCircularProgress' | 'OverviewTabBar';

// Describes the accessibility of features based on the package type.
export interface FeatureAccess {
  premium: boolean;
  basic: boolean;
}

// Defines the role-based access model for different features.
export interface RoleBasedAccess {
  user: FeatureAccess;
  admin: FeatureAccess;
}

// Maps feature keys to their corresponding role-based access configurations.
export type FeatureConfig = {
  [key in FeatureKey]: RoleBasedAccess;
};

// Defines the control access model for the Overview feature based on user role.
export interface ControlAccess {
  [role: string]: OverviewControlName[];
}

// Maps package types to control access configurations specifically for the Overview feature.
export interface PackageControls {
  premium: ControlAccess;
  basic: ControlAccess;
}

// Maps feature keys to their corresponding package and control access configurations.
export type ControlConfig = {
  [key in FeatureKey]: PackageControls;
};


// Define the structure of API access configuration
export interface ControlAPI {
  user: {
    basic: string;
    premium: string;
  };
  admin: {
    basic: string;
    premium: string;
  };
}

// Map control names to their respective API configurations
export type APIAccessConfig = {
  [control in OverviewControlName]?: ControlAPI;
};

export interface GlobalState {
  isAuthenticated: boolean;
  packageType: PackageType;
  role: RoleType;
  features: FeatureKey[];
  selectedFeature: FeatureKey | null;
  overviewSelectedControl: OverviewControlName | null; // Controls specifically for the Overview feature
  overviewControls: OverviewControlName[]; // Add this new state property
  overviewCircularProgressData: number[];
}

export type GlobalAction = 
  | { type: 'SET_AUTHENTICATION'; payload: boolean }
  | { type: 'SET_USER_PACKAGE_TYPE'; payload: PackageType }
  | { type: 'SET_USER_ROLE'; payload: RoleType }
  | { type: 'SET_FEATURES'; payload: FeatureKey[] }
  | { type: 'SET_SELECTED_FEATURE'; payload: FeatureKey | null }
  | { type: 'SET_OVERVIEW_SELECTED_CONTROL'; payload: OverviewControlName | null }
  | { type: 'SET_OVERVIEW_CONTROLS'; payload: OverviewControlName[] }
  | { type: 'SET_OVERVIEW_CIRCULAR_PROGRESS_DATA'; payload: number[] };
