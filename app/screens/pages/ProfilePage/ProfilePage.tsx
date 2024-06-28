import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Avatar, ListItem, Text } from "@rneui/themed";
import ThemeProviderColors from '../../../provider/ThemeProvider';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  // Fetching data from Redux store
  const email = useSelector((state: any) => state.auth.Email);
  const phone = useSelector((state: any) => state.auth.phone);
  const firstName = useSelector((state: any) => state.auth.firstName);
  const lastName = useSelector((state: any) => state.auth.lastName);
  const avatar = useSelector((state: any) => state.user.avatar);

  // Array of data containing icons and corresponding texts
  const listItemData = [
    { icon: 'mail', text: email },
    { icon: 'phone', text: phone },
    // Add more objects as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar avatarStyle={{ borderRadius: 300 }} source={{ uri: avatar }} size={150} />
        <Text style={{ marginTop: 10 }} h4>{firstName} {lastName}</Text>
      </View>
      <Text style={{ marginTop: 10, textAlign: "left", marginBottom: 10, fontSize: 14 }}>User Info</Text>

      {/* Map over the array to render ListItem components */}
      {listItemData.map((item, index) => (
        <ListItem style={{ marginBottom: 5 }} key={index}>
          <Icon color={ThemeProviderColors.Light.Primary} name={item.icon} type='material' />
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 13 }}>{item.text}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  avatarContainer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: 'center',
    width: "100%"
  },
});

export default ProfilePage;
