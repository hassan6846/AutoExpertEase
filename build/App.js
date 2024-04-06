import "expo-dev-client"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text} from 'react-native';
import Mapbox from "@rnmapbox/maps"
Mapbox.setAccessToken('pk.eyJ1IjoiaGFzc2Fuc2hlcml5YXIiLCJhIjoiY2xybnIxam00MTg0djJscXI1bXVxNTR3aCJ9.4r9apA2hHuxU3tOoGDVZbQ')




export default function App() {
  return (
    <View style={styles.container}>
      <Mapbox.MapView 
    localizeLabels={true}
    logoEnabled={false}
      style={styles.map}/>
      <Text>Walter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width:"100%",
  }
});
