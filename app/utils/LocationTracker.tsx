// File: src/backgroundTasks.js (adjust path and file name as per your project structure)

import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import Store from '../store/Store'; // Adjust the path as needed

export const LOCATION_TASK_NAME = 'background-location-task';

export const requestPermissions = async () => {
    const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
    if (foregroundStatus === 'granted') {
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus === 'granted') {
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
          accuracy: Location.Accuracy.Balanced,
        });
      }
    }
  };


TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }:{data:any,error:any}) => {
  if (error) {
    console.error('Error in background task:', error);
    return;
  }

  const { latitude, longitude } = data.locations[0].coords;

  // Request permissions and handle location data as needed
  const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
  const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();

  // Access userid directly from Redux store
  const userId = Store.getState().auth.userid;

  try {
    const response = await fetch('https://backend-autoexpertease-production-5fd2.up.railway.app/api/location/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userId,
        latitude: latitude,
        longitude: longitude,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to send location data');
    }
    console.log('Location data sent successfully:', { latitude, longitude });
  } catch (error) {
    console.error('Error sending location data:', error);
  }
});
