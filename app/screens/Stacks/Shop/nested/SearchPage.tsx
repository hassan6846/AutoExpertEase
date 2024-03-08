import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Pressable, View } from "react-native"
import { Icon, Text,SearchBar,  } from "@rneui/themed"

const Search = ({ navigation }: { navigation: any }) => {
  return (
    <View  style={{ flex: 1,backgroundColor:"#fff",width:"100%"}}>

      {/* StartPressable */}
      <Pressable  style={({pressed})=>[
        SearchStyles.SearchList,
        {
        backgroundColor:pressed ?"#d9d9d9":'#fff'
        }
      ]}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
          <Icon name="search" type="material" style={{marginRight:10}} />
          <Text>Car Polish</Text>
        </View>
        <Icon size={14} name="north-west" type="material" />
 
      </Pressable>
      <Pressable  style={({pressed})=>[
        SearchStyles.SearchList,
        {
        backgroundColor:pressed ?"#d9d9d9":'#fff'
        }
      ]}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
          <Icon name="search" type="material" style={{marginRight:10}} />
          <Text>Tyres</Text>
        </View>
        <Icon size={14} name="north-west" type="material" />
 
      </Pressable>
      {/* End of pressable */}
    </View>
  )
}
// SearchpAge Styles
const SearchStyles = StyleSheet.create({
  // For pressable
  SearchList: {

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
   
  }
})

export default Search