import axios from 'axios';
import { Dispatch } from 'react';
import { GlobalAction } from '../types';

// Generic function to handle API calls for the given controls
export const fetchDataForControls = async (
  apis: { [control: string]: string },
  dispatch: Dispatch<GlobalAction>
) => {
  try {
    const dataPromises = Object.entries(apis).map(async ([control, url]) => {
      const response = await axios.get(url);
      return { control, data: response.data };
    });

    const results = await Promise.all(dataPromises);

    results.forEach(({ control, data }) => {
      switch (control) {
        case 'OverviewCircularProgress':
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
