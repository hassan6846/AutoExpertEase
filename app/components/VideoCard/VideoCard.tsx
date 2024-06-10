import { View,StyleSheet} from 'react-native'
//libraries
import {ListItem,Avatar} from "@rneui/themed"
//utils 
import { AvatarSrc } from '../../constants/ImagesConstants'
import ThemeProviderColors from '../../provider/ThemeProvider'

const VideoCard = ({ navigation }: { navigation: any }) => {
  return (
    <ListItem onPress={() => navigation.navigate("viewvideo")} bottomDivider>
    <Avatar containerStyle={{ width: 100, borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} size={80} source={{ uri: AvatarSrc}} />
    <ListItem.Content>
      <ListItem.Title style={{ fontSize: 14 }}>Walter White</ListItem.Title>
      <View style={styles.avatarContainer}>
        <Avatar avatarStyle={{ borderRadius: 20 }} size={20} source={{ uri: AvatarSrc }} />
        <ListItem.Subtitle style={styles.subTitleText}>Pak Wheels</ListItem.Subtitle>
      </View>
      <ListItem.Subtitle style={{ fontSize: 12 }}>2 weeks &bull; 0 Views </ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  )
}
const styles=StyleSheet.create({
    avatarContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    subTitleText:{
        marginLeft: 5,
        fontSize: 10,
        alignSelf: 'center',
        color: ThemeProviderColors.Light.FontSubHeading,
    }
})
export default VideoCard