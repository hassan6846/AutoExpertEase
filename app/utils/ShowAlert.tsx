import {Alert} from "react-native"


const showAlert=()=>{
    Alert.alert(
        'Information',
        'To start Earning With AutoExpert-Ease You need to fill in your personal Information',
        [
          {
            text: 'close',
            style: 'cancel',
            onPress: () => console.log('Cancel Pressed'),
          },
          {
            text: 'Proceed',
            style: 'default',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: false }
      );
}
export default showAlert