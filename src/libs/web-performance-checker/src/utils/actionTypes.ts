// Action types for updating the global state in the application

// Action type to set the authentication status of the user (logged in or not)
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

// Action type to update the user's package type (e.g., 'basic' or 'premium')
export const SET_USER_PACKAGE_TYPE = 'SET_USER_PACKAGE_TYPE';

// Action type to set the role of the user (e.g., 'user' or 'admin')
export const SET_USER_ROLE = 'SET_USER_ROLE';

// Action type to set the list of features available to the user
export const SET_FEATURES = 'SET_FEATURES';

// Action type to set the currently selected feature from the available features
export const SET_SELECTED_FEATURE = 'SET_SELECTED_FEATURE';

// Action type to set the controls available for the 'Overview' feature
export const SET_OVERVIEW_CONTROLS = 'SET_OVERVIEW_CONTROLS';

// Action type to set the currently selected control within the 'Overview' feature
export const SET_OVERVIEW_SELECTED_CONTROL = 'SET_OVERVIEW_SELECTED_CONTROL';

// Action type to set the circular progress data for the 'Overview' feature
export const SET_OVERVIEW_CIRCULAR_PROGRESS_DATA = 'SET_OVERVIEW_CIRCULAR_PROGRESS_DATA';
