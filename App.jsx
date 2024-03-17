import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import HomeStack from './src/navigators/HomeStack';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <HomeStack />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
