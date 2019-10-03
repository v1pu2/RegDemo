/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import commonstyles from '../src/theme/CommonStyles'

export default class GetInScreen extends Component{
  static navigationOptions = {
   header:null
  };

  constructor(props){
    super(props);

  }
  render(){
    return(
      <View style={commonstyles.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content" />
        <TouchableHighlight style={commonstyles.buttonStyle} onPress={()=>this.props.navigation.navigate('RegisterScreen')}>
        <Text style={commonstyles.buttonText}>
         Get In
        </Text>
        </TouchableHighlight>
      </View>
    )
  }
}