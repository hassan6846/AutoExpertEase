import React, { useRef, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, Button, Icon, ListItem, Avatar,Divider } from '@rneui/themed';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { getHeight } from '../../../utils/GetDimension';
import ThemeProviderColors from '../../../provider/ThemeProvider';
import { JazzCash, easypaisa } from '../../../constants/ImagesConstants';

const ExpertPayments = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isSheetOpen, SetisSheetOpen] = useState(false)
  //Handle Click
  function HandleToggle() {
    if (bottomSheetRef.current) {
      if (isSheetOpen) {
        bottomSheetRef.current.close();
      }
      else {
        bottomSheetRef.current.expand();
      }
    }
    SetisSheetOpen(!isSheetOpen);

  }
  // Handle backdrop press
  const handleBackdropPress = () => {
    if (isSheetOpen && bottomSheetRef.current) {
      bottomSheetRef.current.close();
      SetisSheetOpen(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.balanceTitle}>Current Balance</Text>
        <Text  style={styles.balanceAmount}>500</Text>
        <Button onPress={HandleToggle} title="Top-up Account" color={ThemeProviderColors.Light.Primary} containerStyle={styles.buttonContainer} />
        <Pressable style={styles.withdrawButton}><Text style={styles.withdrawText}>Withdraw Cash</Text></Pressable>
      </View>
      <BottomSheet
    
        enableContentPanningGesture={true}
        backgroundStyle={{ backgroundColor: '#fff' }} snapPoints={['30', '20%']} ref={bottomSheetRef}
        containerStyle={[
      
          isSheetOpen ? styles.openSheet : styles.closedSheet,
        ]}
      
      >
        <BottomSheetView style={styles.bottomSheetContent}>
          <Pressable>
            <ListItem>
              <Avatar avatarStyle={{ objectFit: "contain", }} source={{ uri: JazzCash }} />
              <ListItem.Content>
                <ListItem.Title >Jazzcash</ListItem.Title>

              </ListItem.Content>
            </ListItem>
          </Pressable>
          {/* Easypaisa Pay */}
          <Divider/>
          <Pressable>
            <ListItem>
              <Avatar source={{ uri: easypaisa }} />
              <ListItem.Content>
                <ListItem.Title >EasyPaisa</ListItem.Title>

              </ListItem.Content>
            </ListItem>
          </Pressable>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContent: {
    flex: 1,

  },
  balanceTitle: {
    fontSize: getHeight / 40,
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: getHeight / 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '60%',
    borderRadius: 8,
    marginTop: 20,
  },
  withdrawButton: {
    marginTop: 20,
  },
  withdrawText: {
    fontSize: getHeight / 60,
    fontWeight: 'bold',
  },
  openSheet: {
backgroundColor:'rgba(0, 0, 0, 0.349)'
  },

  closedSheet:{
   

  }
});

export default ExpertPayments;
