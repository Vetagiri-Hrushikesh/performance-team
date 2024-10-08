├── Main Application (Root)
│   ├── <GlobalProvider> 
│   │   Manages global state and context, passing it down to child components.
│   ├── src - Source directory for the application's code.
│   │   ├── components - Reusable UI components.
│   │   │   ├── overview-preview - Contains components specifically related to the overview feature previews.
│   │   │   │   ├── OverviewCircularProgress.tsx - Renders the circular progress component for the overview.
│   │   │   │   ├── OverviewPreview.tsx - Main component for rendering the overview feature preview based on state.
│   │   │   │   └── OverviewTabBar.tsx - Renders the tab bar component for the overview.
│   │   │   ├── performance-preview - Contains components for rendering performance previews.
│   │   └── config - Holds configuration files for access control and API access.
│   │       ├── featureAccessConfig.ts - Defines feature access based on user roles (user, admin) and packages (basic, premium).
│   │       ├── overviewAPIAccessConfig.ts - API access configuration for overview-related features (circular progress, tab bar).
│   │       └── overviewControlAccessConfig.ts - Access control for specific controls in the overview.
│   │   ├── controllers - Manages how features and controls are rendered and handled.
│   │       ├── DisplayController.tsx - Manages the rendering of features and their corresponding controls.
│   │       ├── FeatureController.tsx - Handles the selection and display of available features based on user permissions.
│   │       ├── OverviewController.tsx - Specific controller for managing overview-related features.
│   │       └── PreviewController.tsx - Handles the display of performance previews.
│   │   ├── handlers - Functions for handling configuration retrievals and user access to features and controls.
│   │       ├── featureHandler.ts - Fetches and computes feature access configurations based on the user's role and package type.
│   │       ├── overviewAPIHandler.ts - Retrieves API access configurations for overview features.
│   │       └── overviewControlHandler.ts - Handles control-level access configurations for overview features.
│   │   ├── providers - Context providers for managing global state and handling state-related logic.
│   │       ├── GlobalContext.tsx - Provides global context, ensuring state is accessible across components.
│   │       └── reducer.ts - Reducer functions for managing and updating the global state.
│   │   ├── services - Contains service files related to data fetching or processing.
│   │       └── overviewService.ts - Service for handling data operations for overview features.
│   │   ├── types - TypeScript types and interfaces for the application.
│   │       └── index.ts - Centralized TypeScript types used across the project.
│   │   └── utils - Utility files and constants used for state management and action types.
│           ├── actionTypes.ts - Contains constants for action types used in reducers.
│           └── index.ts - Contains utility functions used across the application.
│
├── tsconfig.json - Configuration file for TypeScript, defining compiler options.
├── tsconfig.lib.json - TypeScript configuration specific to the library build.
├── tsconfig.spec.json - TypeScript configuration for unit and integration tests.
└── vite.config.ts - Configuration for Vite build tool, optimizing for fast development and build times.
File Breakdown and Functionality:

- **GlobalProvider**:This top-level component is responsible for managing the global state and passing it down to all child components. It ensures that the global state, including user authentication, role, and package type (e.g., basic or premium), is available throughout the entire application. This is crucial for enabling role-based access control and ensuring consistency across the app.
- **Components**:omponents: This directory contains various reusable UI components that make up the user interface. These components are designed to handle different aspects of the application’s functionality and user interaction.
- **Configurations:r**:This section includes configuration files that define access controls and feature availability for users based on their roles (user/admin) and package types (basic/premium). These configurations are critical for enforcing role-based access throughout the application.
- **Controllers**:The controller components orchestrate the rendering of the UI based on the global state. They manage which features, settings, and controls are available to users depending on their role and package. Controllers ensure that appropriate UI elements are displayed according to the user's access rights and selections.
- **Handlers**:These components are responsible for fetching and computing the configurations for features and controls. They ensure that only permissible elements are accessible based on the user's role and permissions. Handlers interact with configuration data to facilitate feature availability.
- **Providers**: The provider components manage the state context and handle state updates via reducers. They ensure that changes in the global state are reflected across the entire application, allowing for a seamless user experience.
- **Types**:This folder centralizes all TypeScript type definitions used across the application, ensuring consistency and type safety. Defining types helps prevent errors and enhances the maintainability of the codebase.
- **Utils**:he utility files contain constants and helper functions that are used throughout the application, such as action type definitions. These utilities help maintain consistency when dispatching state updates and performing common operations.
- **Library Component (web-performance-checker.tsx)**: The web-performance-checker.tsx component integrates various features and controls that allow users to assess and analyze the performance of web applications. It acts as the central hub, orchestrating how different parts of the application interact and ensuring a smooth user experience.
