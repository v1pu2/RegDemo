/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component  } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GetInScreen from './src/GetInScreen'
import RegisterScreen from './src/RegisterScreen'
import ThanksScreen from './src/ThanksScreen'

const emptyHeader = {
  header: null
}

const AppNavigator = createStackNavigator({
  GetInScreen: GetInScreen,
  RegisterScreen: RegisterScreen,
  ThanksScreen: ThanksScreen,
},
  {
    initialRouteName: 'GetInScreen',
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  // componentDidMount() {
  //   SplashScreen.hide(this);
  // }


  render() {
    return <AppContainer />;
  }
}