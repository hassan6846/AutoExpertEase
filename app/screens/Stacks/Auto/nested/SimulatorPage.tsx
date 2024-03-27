import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import GoogleMapDesign from '../../../../utils/GoogleMapDesign';
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import { Text, Icon, Avatar, Button } from "@rneui/themed"
import { AvatarSrc } from '../../../../constants/ImagesConstants';

const SimulatorPage = ({navigation}:{navigation:any}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
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
      <BottomSheet snapPoints={['40', '20%']} ref={bottomSheetRef}>
        <BottomSheetView style={{ padding: 20 }}>
<View style={{position: "absolute", right: 20, top: 0,display:"flex",alignItems:"center",justifyContent:"center"}}>
  
  <Text style={{fontWeight:"bold"}}>4.5Km</Text>
   <Text style={{fontWeight:"bold"}}>5min</Text>
<Icon onPress={()=>navigation.navigate("chat_expert")} size={20}  color={ThemeProviderColors.Light.Primary} reverse name='message' type='material' />

  </View>          
          <View style={{ display: "flex", justifyContent: "center" }}>
            <Avatar avatarStyle={{ borderRadius: 60 }} size={60} source={{ uri: AvatarSrc }} />
     <View style={{flexDirection:"row",alignItems:"center"}}>    
         <Text h4 style={{ marginBottom: 10 }}>Ahmed Ali Shah</Text>
         <Text style={{ marginBottom: 10,marginLeft:5 }}>4.3</Text>
     </View>
            <Button color={ThemeProviderColors.Light.Primary} title="Contact Expert" />
            <Button color="error" buttonStyle={{ marginTop: 10 }} title="Cancel" />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SimulatorPage;
