import axios from 'axios';
import { Dispatch } from 'react';
import { GlobalAction } from '../types';

/**
 * Generic function to handle API calls for the given controls.
 * 
 * @param apis - An object where the keys are control names and the values are their respective API URLs.
 * @param dispatch - A function to dispatch actions to the global state.
 */
export const fetchDataForControls = async (
  apis: { [control: string]: string },      // Object mapping control names to API URL
  dispatch: Dispatch<GlobalAction>          // Dispatch function to update global state
) => {
  try {
     // Create an array of promises for API calls based on the provided URLs
    const dataPromises = Object.entries(apis).map(async ([control, url]) => {
      const response = await axios.get(url);
      return { control, data: response.data };
    });

    // Wait for all API calls to complete
    const results = await Promise.all(dataPromises);

    // Process the results of the API calls
    results.forEach(({ control, data }) => {
      switch (control) {
        case 'OverviewCircularProgress':
          // Dispatch the fetched data to the global state for OverviewCircularProgress
          dispatch({ type: 'SET_OVERVIEW_CIRCULAR_PROGRESS_DATA', payload: data });
          break;
        default:
          break;
      }
    });
  } catch (error) {
    console.error('Error fetching data for controls:', error);
  }
};
