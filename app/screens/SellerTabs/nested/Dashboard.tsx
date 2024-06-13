import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Text } from "@rneui/themed"

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Flex Row */}
      <View style={{width:"100%",flexDirection:'row',columnGap:5}}>
        <View style={{backgroundColor:"red",width:"50%",paddingVertical:30,borderRadius:5}}>
          <Text style={{ textAlign: 'center' }}>Product Uploaded</Text>
          <Text h3 style={{ textAlign: 'center' }}>0</Text>
        </View>
        <View style={{backgroundColor:"red",width:"50%",paddingVertical:30,borderRadius:5}}>
          <Text style={{ textAlign: 'center' }}>Orders</Text>
          <Text h3 style={{ textAlign: 'center' }}>0</Text>
        </View>
        {/* Flex Endss */}
      </View>
      {/* Earnings */}
    <View style={{width:'100%',backgroundColor:"navy",paddingVertical:30,marginTop:10,borderRadius:5}}>
    <Text style={{ textAlign: 'center' }}>Income</Text>
    <Text h3 style={{ textAlign: 'center' }}>0</Text>

    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,padding:10
  }
})
export default Dashboard