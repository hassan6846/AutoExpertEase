import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button,Text,Avatar } from "@rneui/themed";
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { AvatarSrc } from '../../../../constants/ImagesConstants';

const ProductViewPage = () => {
  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.scrollView} contentContainerStyle={Styles.scrollViewContent}>
        {/* Your Scrollable  content  */}
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <Avatar avatarStyle={{ borderRadius: 5 }} containerStyle={{ height: 250, width: "90%", marginBottom: 5 }} source={{ uri: AvatarSrc }} />
      </View>
      {/* Row for horizontal product View */}
      <View style={Styles.ImageRow}>
        <Avatar size={60} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
        <Avatar size={60} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
        <Avatar size={60} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
        <Avatar size={60} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
      </View>
      {/* Row for horizontal product View */}
      {/* Text Details */}
      <Text h4 style={{ paddingHorizontal: 20, marginTop: 5 }}>BDK Polypro Car Seat Covers Full
        Set in Charcoal</Text>
      {/* Category Start */}
      <View style={{ flexDirection: "row", paddingHorizontal: 20, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", marginRight: 5 }}>Category :</Text>
        <Text style={{ fontSize: 10, backgroundColor: "gray", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, color: "#fff" }}>Automotive Seat cover</Text>
      </View>
      {/* Category ends */}
      {/* Price Start */}
      <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20}}>
     <>
     <Text h3 style={{marginRight:5}}>$200</Text>
      <Text style={{fontSize:12,fontWeight:"200",textDecorationLine:"line-through"}}>$270</Text>
     </>
     <>
     <Text style={{fontSize:10,fontWeight:"bold",marginLeft:5,textDecorationLine:"underline",color:ThemeProviderColors.Light.Primary}}>4.3(380)</Text>
     </>
      </View>
      {/* Price Ends */}
      <Text  style={{paddingHorizontal:20,fontSize:12,marginTop:10,fontWeight:"bold"}}>Product Details Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque veniam adipisci tenetur, porro natus error accusantium quis molestias eius. Dolores et quasi in ad beatae, dolorum fugiat ullam nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fuga eligendi earum totam temporibus laborum alias numquam, tenetur blanditiis doloribus itaque adipisci similique. Laboriosam maxime voluptatem aut expedita. Numquam nihil fugit quidem illo facilis ipsum maiores natus sint, hic suscipit enim voluptatem aspernatur, qui amet esse libero. Id, beatae! Cumque, iste atque? Est, ea sapiente deserunt, quae, expedita amet veritatis consequatur tempore sint cumque vel! Quae sint unde soluta amet aspernatur reprehenderit minima optio, voluptatem eaque deleniti! Dicta, ex veniam quibusdam recusandae animi saepe, nihil molestias facilis ut amet qui omnis est repellendus, distinctio sint mollitia iure minus incidunt voluptas. Sunt molestias cum, iste quas quos voluptatibus eligendi possimus cumque fuga veniam alias quis eaque magnam esse molestiae assumenda praesentium, culpa adipisci at velit placeat suscipit! Nulla veniam aut sapiente provident. Aperiam voluptates, ea aliquam id odit ipsam nemo porro molestiae pariatur maiores fugiat doloremque dolore similique minus mollitia minima adipisci quia quaerat atque voluptatum officiis corporis suscipit recusandae veritatis! Nostrum, suscipit. Ducimus, ratione possimus quasi saepe hic mollitia atque minima placeat distinctio iure eum exercitationem accusantium illum in velit voluptates repudiandae non quas voluptate sequi ad dicta quos aperiam. Culpa eligendi quibusdam soluta cupiditate corporis, assumenda obcaecati ad facilis error doloremque eius iure delectus et cumque ut officiis ratione, iste animi nulla dolore alias voluptate reiciendis natus fugit! Deserunt explicabo aliquid fugiat commodi doloremque at, mollitia aperiam neque iusto obcaecati. Similique molestiae quisquam, facilis atque, iusto beatae aperiam maiores corrupti commodi voluptatibus laudantium ratione enim numquam ipsum quod assumenda hic! Eius repellat laborum inventore dolorum repellendus obcaecati unde ipsum? Repellendus sequi voluptatem mollitia tempora maxime nesciunt possimus officiis eius at velit? Excepturi, quae eos. Nisi doloremque, eum tempore laudantium est ullam voluptatibus doloribus, tempora dolorum, facere sequi blanditiis quas velit vel maxime aliquid harum inventore repudiandae? Quas, nihil corrupti!</Text>
      {/* Wrapper to Add Product Features */}

      {/* Product Features Wrapper ends... */}
      </ScrollView>
      <Button color={ThemeProviderColors.Light.Primary} title="Add to Cart" containerStyle={Styles.button} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor:"red", 
  },
  scrollViewContent: {
    paddingBottom: 60, // Adjust based on the button's height
  },
  button: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 30,
  },
  ImageRow: {
    columnGap: 5,
    justifyContent: "center",

    flexDirection: "row"
  }
});

export default ProductViewPage;
