/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  BackHandler
} from 'react-native';
import commonStyles from '../src/theme/CommonStyles'


export default class ThanksScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.navigate("GetInScreen");
    return true;
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <TouchableHighlight style={commonStyles.buttonStyle} onPress={() => this.props.navigation.navigate('GetInScreen')}>
          <Text style={commonStyles.buttonText}>
            Thank You
      </Text>
        </TouchableHighlight>
      </View>
    )
  }
}