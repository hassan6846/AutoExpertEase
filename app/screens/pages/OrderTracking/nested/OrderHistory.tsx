import React from 'react';
import { View, StyleSheet, ScrollView,  Text, TouchableWithoutFeedback } from 'react-native';
import { Icon, Avatar } from "@rneui/themed";
import { AvatarSrc } from '../../../../constants/ImagesConstants';
import ThemeProviderColors from '../../../../provider/ThemeProvider';

const OrderHistory = () => {


 





 
  return (
    <TouchableWithoutFeedback>
      <View style={Styles.container}>
        <ScrollView style={Styles.History}>
          {/* Card for orders */}
          <View style={Styles.HistoryCard}>
            <View style={Styles.OrderTxtDetails}>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: ThemeProviderColors.Light.FontSubHeading }}>Order Id :#3801231</Text>
              <Text style={{ fontSize: 12, color: ThemeProviderColors.Light.FontSubHeading }}>11-Apr-2024 7:59</Text>
              <Text style={{ color: "green", fontSize: 12 }}>Completed <Icon type='material' name='done' size={10} color="green" /></Text>
            </View>
            <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', columnGap: 5 }}>
              {Array.from({ length: 10 }).map((_, index) => (
                <Avatar key={index} size={60} containerStyle={{ borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} source={{ uri: AvatarSrc }} />
              ))}
            </ScrollView>
            {/* Ends */}
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Rs 489.00</Text>

            </View>
          </View>
          {/* Ends */}
        </ScrollView>

      </View>
    </TouchableWithoutFeedback>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  History: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#f9f9f9"
  },
  OrderTxtDetails: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: "space-between"
  },
  HistoryCard: {
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff"
  },
  rateButton: {
    backgroundColor: ThemeProviderColors.Light.Primary,
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 12
  },
  bottomSheetContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  commentInput: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: ThemeProviderColors.Light.Primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toastContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OrderHistory;
