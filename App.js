import * as React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Main from './src/components/Main.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress, next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  })
  return {
      leftButtonStyle: { opacity },
      rightButtonStyle: { opacity },
      titleStyle: { opacity },
      backgroundStyle: { opacity },
  }
}


export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
