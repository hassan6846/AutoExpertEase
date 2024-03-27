import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import GoogleMapDesign from '../../../../utils/GoogleMapDesign';
import ThemeProviderColors from '../../../../provider/ThemeProvider';

const SimulatorPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
      customMapStyle={GoogleMapDesign}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 33.6844, // Center the map at a specific location (Islamabad)
          longitude: 73.0479,
          latitudeDelta: 2, // Zoom level (adjust as needed)
          longitudeDelta: 2,
        }}
      >
        {/* Static Polyline with fixed coordinates */}
        <Polyline

          coordinates={[
            { latitude: 33.6844, longitude: 73.0479 }, // Islamabad
            { latitude: 31.5497, longitude: 74.3436 }, // Lahore
          ]}
          strokeColor={ThemeProviderColors.Light.Primary}
          strokeWidth={4}
        />

        {/* Static Markers with fixed coordinates */}
        <Marker
          coordinate={{ latitude: 33.6844, longitude: 73.0479 }}
          title="Islamabad"
          description="This is Islamabad"
        />
        <Marker
          coordinate={{ latitude: 31.5497, longitude: 74.3436 }}
          title="Lahore"
          description="This is Lahore"
        />
      </MapView>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SimulatorPage;
