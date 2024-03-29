import { View,StyleSheet,Pressable, ScrollView } from 'react-native'
import React from 'react'

import { Text,Divider,ListItem,Switch,Icon,} from "@rneui/themed"


const Settings = ({ navigation }: { navigation: any }) => {
    return (
        <ScrollView  style={Style.container}>







<Pressable onPress={()=>navigation.navigate('language')} style={({ pressed }) => [ { backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',},Style.pressableContainer]}>
 


                <ListItem.Content>
                    <ListItem.Title >Language</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
                    </Pressable>
                    <Pressable onPress={()=>navigation.navigate('language')} style={({ pressed }) => [ { backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',},Style.pressableContainer]}>
 


 <ListItem.Content>
     <ListItem.Title >Language</ListItem.Title>
 </ListItem.Content>
 <ListItem.Chevron/>
     </Pressable>
     
     <Pressable onPress={()=>navigation.navigate('language')} style={({ pressed }) => [ { backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',},Style.pressableContainer]}>
 


 <ListItem.Content>
     <ListItem.Title >Language</ListItem.Title>
 </ListItem.Content>
 <ListItem.Chevron/>
     </Pressable>

{/* DarkTheme toggle */}
<Pressable style={({ pressed }) => [ { backgroundColor: pressed ? 'rgba(59, 59, 59, 0.082)' : 'white',},Style.pressableContainer]}>
 


                <ListItem.Content>
                    <ListItem.Title >Dark Theme</ListItem.Title>
                </ListItem.Content>
            <Switch/>
                    </Pressable>

{/* Show The Expert Tab Navigation If user is a Expert Else not */}


{/* Show The Shop Dashboard if he is vendor  */}

        </ScrollView>
    )
}
const Style=StyleSheet.create({
    container:{
        flex:1,

    },
    pressableContainer:{
   
        flexDirection:"row",
        paddingVertical:20,
        paddingHorizontal:20,
        justifyContent:"space-between",
        alignItems:"center"
    }
})
export default Settings