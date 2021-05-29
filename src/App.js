/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import 'react-native-gesture-handler';
//import { createAppContainer } from 'react-navigation';

//import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
//import Communicat from '../Communicat.js';
const App = () => {
  return (
  <>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <FlashMessage position='top' />
  </>
  );
};


export default App;
