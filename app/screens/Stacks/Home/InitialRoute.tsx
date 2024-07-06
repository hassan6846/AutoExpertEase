import React, { useEffect,useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View,Alert } from 'react-native';

// Utils libraries
import { Text, Avatar, Icon } from '@rneui/themed';
import { DrvingVideoImage, pakImage, pakleasson, Sedan } from '../../../constants/ImagesConstants';
import ThemeProviderColors from '../../../provider/ThemeProvider';
import * as Location from 'expo-location';

// State management
import { useSelector, useDispatch } from 'react-redux';
import { SetAvatar } from '../../../slices/UserSlice';
import { requestPermissions } from '../../../utils/LocationTracker';

interface HomeInitalProps {
  navigation: any;
}

const HomeInital: React.FC<HomeInitalProps> = ({ navigation }) => {
  // State management
  const id = useSelector((state: any) => state.auth.userid);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);

  const serviceArray = [
    { title: 'Rent Cars', icon: 'car-rental', route: 'allcars' },
    { title: 'AutoHelp', icon: 'electric-car', route: 'Support' },
    { title: 'Auto Repair', icon: 'electric-car', route: 'Service' },
    { title: 'Learn Drive', icon: 'school', route: 'Service' },
  ];

  useEffect(() => {

    requestPermissions()
    const fetchAvatar = async () => {
      try {
        const response = await fetch(`https://backend-autoexpertease-production-5fd2.up.railway.app/api/getavatar/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const avatar = data.avatar;
        dispatch(SetAvatar(avatar));
      } catch (error) {
        console.log('Error fetching avatar:', error);
      }
    };

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert('Permission Denied', 'Permission to access location was denied');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    fetchAvatar();
  }, [id, dispatch]);

  return (
    <ScrollView style={Style.container}>
      <Text style={Style.headingText}>Explore Services</Text>
      {/* Service Array */}
      <View style={Style.ServiceContainer}>
        {serviceArray.map((item, key) => (
          <Pressable
            onPress={() => navigation.navigate(item.route)}
            key={key}
            style={Style.servicePressable}
          >
            <Icon name={item.icon} type="material" />
            <Text style={Style.serviceText}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
      {/* Service Array Ends */}
      <Text style={Style.headingText}>Driving School</Text>
      {/* Map Video Recommendations here */}
      <ScrollView contentContainerStyle={Style.horizontalScroll} horizontal={true}>
        {[DrvingVideoImage, pakImage, pakleasson].map((image, index) => (
          <Pressable key={index} style={Style.videoPressable}>
            <View style={Style.videoContainer}>
              <Avatar containerStyle={Style.avatarContainer} avatarStyle={Style.avatarStyle} source={{ uri: image }} />
              <Icon containerStyle={Style.iconContainer} name="play-arrow" type="material" size={90} color="white" />
            </View>
          </Pressable>
        ))}
      </ScrollView>
      {/* End of the Map Video Recommendations */}
      <View style={Style.browseRentalContainer}>
        <Text style={Style.headingText}>Browse Rental Vehicle</Text>
        <Text onPress={() => navigation.navigate('allcars')} style={Style.seeMoreText}>See more</Text>
      </View>
      {/* Horizontal Scroll map some vehicles here */}
      <ScrollView style={Style.vehicleScroll} contentContainerStyle={Style.horizontalScroll} showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={Style.BookingWrapper}>
          <Avatar containerStyle={Style.carAvatarContainer} avatarStyle={Style.carAvatarStyle} source={{ uri: Sedan }} />
          <View style={Style.featureContainer}>
            <Text style={Style.carTitle}>Toyota Yaris</Text>
            <Text style={Style.carPrice}>Rs 5600/<Text style={Style.carPriceSubtext}>day</Text></Text>
          </View>
          <Text style={Style.carDescription}>Without Driver</Text>
          <View style={Style.propertiesContainer}>
            <View style={Style.propertyItem}>
              <Icon color="#fff" size={17} name="airline-seat-recline-normal" type="material" />
              <Text style={Style.propertyText}>4</Text>
            </View>
            <View style={Style.propertyItem}>
              <Icon color="#fff" size={17} name="ac-unit" type="material" />
              <Text style={Style.propertyText}>Yes</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Experts Drivers */}
      {/* Experts Drivers */}
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  headingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ServiceContainer: {
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
    width: '100%',
    flexWrap: 'wrap',
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  servicePressable: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    elevation: 2,
  },
  serviceText: {
    fontSize: 9,
  },
  horizontalScroll: {
    columnGap: 10,
  },
  videoPressable: {
    height: 160,
  },
  videoContainer: {
    width: '100%',
    position: 'relative',
    height: '100%',
  },
  avatarContainer: {
    width: '100%',
    position: 'relative',
    height: '100%',
  },
  avatarStyle: {
    objectFit: 'cover',
    aspectRatio: 2,
    borderRadius: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: '30%',
    left: '40%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
  browseRentalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeMoreText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: ThemeProviderColors.Light.Primary,
  },
  vehicleScroll: {
    flex: 1,
    marginBottom: 50,
  },
  BookingWrapper: {
    borderRadius: 5,
    backgroundColor: '#F8FAFC',
  },
  carAvatarContainer: {
    width: '100%',
    height: 120,
    borderRadius: 5,
  },
  carAvatarStyle: {
    objectFit: 'contain',
    width: 170,
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  carTitle: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 12,
  },
  carPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  carPriceSubtext: {
    color: '#97ADB6',
    fontSize: 10,
    alignSelf: 'center',
  },
  carDescription: {
    fontSize: 11,
    fontWeight: '300',
    color: '#97ADB6',
    marginLeft: 5,
  },
  propertiesContainer: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    columnGap: 5,
  },
  propertyItem: {
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ThemeProviderColors.Light.Primary,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  propertyText: {
    fontSize: 10,
    color: '#fff',
  },
});

export default HomeInital;
