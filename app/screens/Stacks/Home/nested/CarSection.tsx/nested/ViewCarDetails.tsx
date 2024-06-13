import { ScrollView,StyleSheet,View } from 'react-native'
import React from 'react'

//Library
import {Avatar,Text} from "@rneui/themed"
import { AvatarSrc } from '../../../../../../constants/ImagesConstants'

const ViewCarDetails = () => {
  return (
    <ScrollView style={styles.container}>
<View style={{display:'flex',alignItems:'center',marginTop:20}}>
<Avatar containerStyle={{width:"80%",height:200}} avatarStyle={{objectFit:"cover",borderRadius:5}} source={{uri:AvatarSrc}} size={300}/>
</View>
 
    </ScrollView>
  )
}
const styles=StyleSheet.create({
container:{
  flex:1
}
})
export default ViewCarDetails