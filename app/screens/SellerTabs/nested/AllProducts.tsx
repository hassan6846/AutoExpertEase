import { View,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import {Text} from "@rneui/themed"
const AllProducts = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Flex Row */}
   <View>
<View>
<Text h3 style={{textAlign:'center'}}>Product Uploaded</Text>
</View>
{/* Flex Endss */}
   </View>

    </ScrollView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
export default AllProducts