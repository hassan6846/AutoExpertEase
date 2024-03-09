import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Animated } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { Image } from 'expo-image';
import { AvatarSrc } from '../../../../constants/ImagesConstants';

const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;

export default function ViewProfileImage() {
  const scale = new Animated.Value(1);
  let lastScale = 3;

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale } }],
    { useNativeDriver: false }
  );

  const onPinchHandlerStateChange = (event:any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale *= event.nativeEvent.scale;
      scale.setValue(1);
    }
  };

  return (
    <PinchGestureHandler
      onGestureEvent={onPinchGestureEvent}
      onHandlerStateChange={onPinchHandlerStateChange}
    >
      <Animated.View
        style={[
          Styles.ImageContainer,
          {
            transform: [{ scale: scale }],
          },
        ]}
      >
        <Image
          contentFit="cover"
          allowDownscaling={true}
          focusable={true}
          style={Styles.ViewImage}
          source={{ uri: AvatarSrc }}
          transition={1000}
        />
      </Animated.View>
    </PinchGestureHandler>
  );
}

const Styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewImage: {
    width: getWidth,
    height: getHeight / 2,
  },
});
