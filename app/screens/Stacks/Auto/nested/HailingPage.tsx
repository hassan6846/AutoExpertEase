import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import { Text, Button, Avatar, LinearProgress } from "@rneui/themed"
import { getHeight } from '../../../../utils/GetDimension'
import { AvatarSrc } from '../../../../constants/ImagesConstants'
import ThemeProviderColors from '../../../../provider/ThemeProvider'



const HailingPage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearProgress />

      <ScrollView style={Styles.HailContainer}>
{/* Card 1 */}
        <View style={Styles.HailCard}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>

            <View style={{flexDirection:"row",alignItems:'center'}}>
              <Avatar size={50} containerStyle={{ borderRadius: 60 }} avatarStyle={{ borderRadius: 60 }} source={{ uri: AvatarSrc }} />
              <Text style={{ marginLeft: 5 }} h4>Ahmed Ali Shah</Text>
            </View>

            <View style={{alignItems:"flex-end"}}>
              <Text style={{fontSize:20,fontWeight:"bold"}} >5000Rs</Text>
              <Text style={{fontWeight:"bold"}} >5min</Text>
              <Text   style={{fontWeight:"bold"}}>1.3km</Text>
            </View>

          </View>
          {/* acceptcontainer */}
          <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text h3>4.4</Text>
            {/* Buttons */}
            <View style={{ flexDirection: 'row' }}>
              <Button title="Decline" />
              <Button onPress={()=>navigation.navigate('simulator_page')} color={ThemeProviderColors.Light.Primary} buttonStyle={{ marginLeft: 5 }} title="Accept" />
            </View>
            {/* Buttons */}
          </View>
          {/* acceptcontainer ends */}
        </View>



{/* Card 2 */}

<View style={Styles.HailCard}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>

            <View style={{flexDirection:"row",alignItems:'center'}}>
              <Avatar size={50} containerStyle={{ borderRadius: 60 }} avatarStyle={{ borderRadius: 60 }} source={{ uri: AvatarSrc }} />
              <Text style={{ marginLeft: 5 }} h4>Ahmed Ali Shah</Text>
            </View>

            <View style={{alignItems:"flex-end"}}>
              <Text style={{fontSize:20,fontWeight:"bold"}} >5000Rs</Text>
              <Text style={{fontWeight:"bold"}} >5min</Text>
              <Text   style={{fontWeight:"bold"}}>1.3km</Text>
            </View>

          </View>
          {/* acceptcontainer */}
          <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text h3>4.4</Text>
            {/* Buttons */}
            <View style={{ flexDirection: 'row' }}>
              <Button title="Decline" />
              <Button color={ThemeProviderColors.Light.Primary} buttonStyle={{ marginLeft: 5 }} title="Accept" />
            </View>
            {/* Buttons */}
          </View>
          {/* acceptcontainer ends */}
        </View>


      </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
  HailContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  // Card for hailing
  HailCard: {
    padding: 10,
    backgroundColor: "#F0F0F0",
marginBottom:5,
    borderRadius: 5
  }
})
export default HailingPage