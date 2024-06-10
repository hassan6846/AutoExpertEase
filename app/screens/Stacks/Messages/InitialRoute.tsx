import React, { useState } from 'react';
import { View, StyleSheet, FlatList, RefreshControl,Pressable } from 'react-native';
import { ListItem, Text, Avatar } from "@rneui/themed";
import NoInbox from '../../../components/NoInbox/NoInbox';
import ThemeProviderColors from '../../../provider/ThemeProvider';

const Messages = ({ navigation }: { navigation: any }) => {
  const [hasMessages, setHasMessages] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  // Sample data
  const data = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://i.pravatar.cc/80',
      subtitle: 'Hlo How are You'
    },
    {
      name: 'Chris Jackson ',
      avatar_url: 'https://i.pravatar.cc/100',
      subtitle: 'Hi How its going boi'
    }
  ];

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refreshing delay
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={Styles.MessageContainer}>
      {hasMessages ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem onPress={()=>navigation.navigate('messageview')} bottomDivider>
              <Avatar size={50} containerStyle={{borderRadius:60}} avatarStyle={{borderRadius:60}} source={{ uri: item.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title style={{fontSize:13}}>{item.name} </ListItem.Title>
                <ListItem.Subtitle style={{fontSize:12,color:ThemeProviderColors.Light.FontSubHeading}}>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron/>
            </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <NoInbox />
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  MessageContainer: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Messages;
