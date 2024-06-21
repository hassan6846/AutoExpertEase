import { View,ScrollView,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react'
//Components
import InputComponent from '../../../../../../components/InputComponent/InputComponent'
//library
import { Text,CheckBox,Avatar,Button} from '@rneui/themed'
import * as ImagePicker from 'expo-image-picker';

//util
import { selectPhoto } from '../../../../../../constants/ImagesConstants'

const PostCar = () => {
  //Handle Pickup images
  const selectImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.6,
      base64: true,
      selectionLimit: 2,
    });

    if (!result.canceled) {
      const base64Images = result.assets.map((asset) => asset.base64!); // Use non-null assertion operator

      setImages(base64Images);
      console.log(base64Images[0]);
    }
  };
  const [checked, setChecked] = React.useState(true);
  const [images, setImages] = useState<string[]>([]);
 const [name, setName] = useState('');
 const [plate,setPlate] = useState('');
 const [registration, setRegistration] = useState('');
 const [color, setColor] = useState('');
 const [carType, setCarType] = useState('');
 const [enginetype, setEngineType] = useState('');
 const [fuelType, setFuelType] = useState('');
 const [yearOfManufacture, setYearOfManufacture] = useState('');
 const [mileage, setMileage] = useState('');
 const [carCondition, setCarCondition] = useState('');
 const [seats, setSeats] = useState('');
 const [pricePerDay, setPricePerDay] = useState('');
 const [ac, setAc] = useState(false);
const [tracker, setTracker] = useState(false);
 const [workSoundSystem, setWorkSoundSystem] = useState(false);
 const [legalDocuments, setLegalDocuments] = useState(false);
 const [pickedLocation, setPickedLocation] = useState('');
 const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.ChildWrapper}>
      <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Car Info</Text>
      <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5, fontStyle: 'italic' }} >Note:"Please ensure that you fill out the form from the same location where the rental car will be picked up."</Text>

      <InputComponent placeholder="Name"/>
      <InputComponent placeholder="No Plate"/>
      <InputComponent placeholder="Vehicle Registration No"/>

      <InputComponent placeholder="Color"/>
      <InputComponent placeholder="Car type sedan or any"/>

      </View>
      <View  style={styles.ChildWrapper}>
        <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Car Details</Text>
        <InputComponent placeholder="Engine Type"/>
        <InputComponent placeholder="Fuel Type"/>
        <InputComponent placeholder="Year of Manufacture"/>
        <InputComponent placeholder="Mileage"/>
        <InputComponent placeholder="Car Condition"/>
        <InputComponent placeholder="Seats"/>
      </View>
      {/* Car Details */}
      <View style={styles.ChildWrapper}>
      <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Features</Text>

        <CheckBox checked title="Ac"/>
        <CheckBox checked title="tracker"/>
        <CheckBox checked title="Working Sound System"/>
        <CheckBox checked title="Legal Documents"/>

      </View>
      <View style={styles.ChildWrapper}>
      <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Set Pricing /Day</Text>
      <InputComponent placeholder="Pricing Per Day"/>
      <Text style={{marginLeft:8,fontSize:12}}>Your Earning /Day Will Be</Text>
      </View>
      {/* Location */}
      <View style={styles.ChildWrapper}>
      <Text style={{ textAlign: "center", marginBottom: 20, marginTop: 5 }} h4>Location</Text>
      <InputComponent placeholder="Enter Pickup Address Address"/>
      </View>
      <View>
      <TouchableOpacity onPress={selectImage}  style={{ padding: 10, backgroundColor: "#fff", borderRadius: 5 }}>
      {
        images.length>0?(
          <FlatList
          contentContainerStyle={{gap:10}}
         
          
          data={images}
          horizontal
          renderItem={({ item }) => (
            <Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: `data:image/jpeg;base64,${item}` }} size={50} />
          )}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: selectPhoto }} size={50} />}
        />
        ):(
          <Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: selectPhoto }} size={50} />
        )
      }
        </TouchableOpacity>
      </View>
      <Button buttonStyle={{marginBottom:50,marginTop:10}} title="Post Car"/>

    </ScrollView>
  )
}
const styles=StyleSheet.create({
 container:{
  flex:1,
  padding:10,
 }
 ,ChildWrapper:{
  backgroundColor:"#fff",
  padding:5,
  borderRadius:5,
  marginBottom:20,
 }
})
export default PostCar