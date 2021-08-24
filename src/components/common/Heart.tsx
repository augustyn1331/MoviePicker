import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const Heart: React.FC = () => {
  return (
    <Animated.View style={styles.heartIconBox}>
      <AnimatedLottieView
        source={require('../../assets/lottie/heart5.json')}
        autoPlay
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  heartIconBox: {
    position: 'absolute',
    width: 300,
    height: 300,
    margin: 20,
  },
});
export default Heart;