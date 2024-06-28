import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useCallback } from 'react';
import { Text, Button, Avatar, LinearProgress } from "@rneui/themed";
import { AvatarSrc } from '../../../../constants/ImagesConstants';
import ThemeProviderColors from '../../../../provider/ThemeProvider';
import { useFocusEffect } from '@react-navigation/native';

const HailingPage = ({ navigation }: { navigation: any }) => {
  useFocusEffect(
    useCallback(() => {
      const onBeforeRemove = (e: any) => {
        e.preventDefault();
        Alert.alert(
          "Hold on!",
          "Are you sure you want to cancel?",
          [
            {
              text: "No",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Yes", onPress: () => navigation.dispatch(e.data.action) }
          ]
        );
      };

      navigation.addListener('beforeRemove', onBeforeRemove);

      return () => {
        navigation.removeListener('beforeRemove', onBeforeRemove);
      };
    }, [navigation])
  );

  return (
    <View style={{ flex: 1 }}>
      <LinearProgress />

      <ScrollView style={Styles.HailContainer}>
        {/* Card 1 */}
        <View style={Styles.HailCard}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>

            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <Avatar size={50} containerStyle={{ borderRadius: 60 }} avatarStyle={{ borderRadius: 60 }} source={{ uri: AvatarSrc }} />
              <Text style={{ marginLeft: 5 }} h4>Ahmed Ali Shah</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>5000Rs</Text>
              <Text style={{ fontWeight: "bold" }}>5min</Text>
              <Text style={{ fontWeight: "bold" }}>1.3km</Text>
            </View>

          </View>
          {/* acceptcontainer */}
          <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text h3>4.4</Text>
            {/* Buttons */}
            <View style={{ flexDirection: 'row' }}>
              <Button title="Decline" />
              <Button onPress={() => navigation.navigate('simulator_page')} color={ThemeProviderColors.Light.Primary} buttonStyle={{ marginLeft: 5 }} title="Accept" />
            </View>
            {/* Buttons */}
          </View>
          {/* acceptcontainer ends */}
        </View>

        {/* Card 2 */}
        <View style={Styles.HailCard}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>

            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <Avatar size={50} containerStyle={{ borderRadius: 60 }} avatarStyle={{ borderRadius: 60 }} source={{ uri: AvatarSrc }} />
              <Text style={{ marginLeft: 5 }} h4>Ahmed Ali Shah</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>5000Rs</Text>
              <Text style={{ fontWeight: "bold" }}>5min</Text>
              <Text style={{ fontWeight: "bold" }}>1.3km</Text>
            </View>

          </View>
          {/* acceptcontainer */}
          <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text h3>4.4</Text>
            {/* Buttons */}
            <View style={{ flexDirection: 'row' }}>
              <Button title="Decline" />
              <Button color={ThemeProviderColors.Light.Primary} buttonStyle={{ marginLeft: 5 }} title="Accept" />
            </View>
            {/* Buttons */}
          </View>
          {/* acceptcontainer ends */}
        </View>

      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  HailContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  // Card for hailing
  HailCard: {
    padding: 10,
    backgroundColor: "#F0F0F0",
    marginBottom: 5,
    borderRadius: 5
  }
});

export default HailingPage;
