import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import HomeStack from './src/navigators/HomeStack';

const App = () => {
  return (
    <SafeAreaView
      style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HomeStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
