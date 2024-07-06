import { View, ScrollView, StyleSheet, Alert } from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { Text, Button, Avatar, LinearProgress } from "@rneui/themed";
import { AvatarSrc } from "../../../../constants/ImagesConstants";
import ThemeProviderColors from "../../../../provider/ThemeProvider";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";

const HailingPage = ({ navigation }: { navigation: any }) => {
  const taskid = useSelector((state: any) => state.task.taskid);
  const [offers,setoffers]=useState<any>([])
  const HandleConfirm = async () => {
    try {
      const response = await fetch(
        `https://backend-autoexpertease-production-5fd2.up.railway.app/api/delete-task/${taskid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);

      navigation.navigate("inital_service");
    } catch (error) {
      console.log(error);
      navigation.navigate("inital_service");
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBeforeRemove = (e: any) => {
        e.preventDefault();
        Alert.alert("Hold on!", "Are you sure you want to cancel?", [
          {
            text: "No",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: async () => {
              navigation.removeListener("beforeRemove", onBeforeRemove);
              await HandleConfirm();
            },
          },
        ]);
      };

      navigation.addListener("beforeRemove", onBeforeRemove);

      return () => {
        navigation.removeListener("beforeRemove", onBeforeRemove);
      };
    }, [navigation])
  );
  useEffect(()=>{
    //Fetch Offers After interval
    const FetchOffers=async()=>{
      const response=await fetch(`https://backend-autoexpertease-production-5fd2.up.railway.app/api/offers/${taskid}`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
        }
      })
      const data=await response.json()
      setoffers(data.offers)
      console.log(offers)
    }

    
FetchOffers()

  },[])
  return (
    <View style={{ flex: 1 }}>
      <LinearProgress />

      <ScrollView style={Styles.HailContainer}>
        {/* Card 1 */}
        <View style={Styles.HailCard}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar
                size={50}
                containerStyle={{ borderRadius: 60 }}
                avatarStyle={{ borderRadius: 60 }}
                source={{ uri: AvatarSrc }}
              />
              <Text style={{ marginLeft: 5 }} h4>
                {taskid}
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                5000Rs {taskid._id}
              </Text>
              <Text style={{ fontWeight: "bold" }}>5min</Text>
              <Text style={{ fontWeight: "bold" }}>1.3km</Text>
            </View>
          </View>
          {/* acceptcontainer */}
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text h3>4.4</Text>
            {/* Buttons */}
            <View style={{ flexDirection: "row" }}>
              <Button title="Decline" />
              <Button
                onPress={() => navigation.navigate("simulator_page")}
                color={ThemeProviderColors.Light.Primary}
                buttonStyle={{ marginLeft: 5 }}
                title="Accept"
              />
            </View>
            {/* Buttons */}
          </View>
          {/* acceptcontainer ends */}
        </View>

        {/* Card 2 */}
        <View style={Styles.HailCard}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar
                size={50}
                containerStyle={{ borderRadius: 60 }}
                avatarStyle={{ borderRadius: 60 }}
                source={{ uri: AvatarSrc }}
              />
              <Text style={{ marginLeft: 5 }} h4>
                Ahmed Ali Shah
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>5000Rs</Text>
              <Text style={{ fontWeight: "bold" }}>5min</Text>
              <Text style={{ fontWeight: "bold" }}>1.3km</Text>
            </View>
          </View>
          {/* acceptcontainer */}
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text h3>4.4</Text>
            {/* Buttons */}
            <View style={{ flexDirection: "row" }}>
              <Button title="Decline" />
              <Button
                color={ThemeProviderColors.Light.Primary}
                buttonStyle={{ marginLeft: 5 }}
                title="Accept"
              />
            </View>
            {/* Buttons */}
          </View>
          {/* acceptcontainer ends */}
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  HailContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  // Card for hailing
  HailCard: {
    padding: 10,
    backgroundColor: "#F0F0F0",
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default HailingPage;
