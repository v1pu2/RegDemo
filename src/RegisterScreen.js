
import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity, Alert,
  BackHandler, ImageBackground, Dimensions, Image, TouchableHighlight
} from 'react-native';
import images from './theme/Images'
import commonStyles from '../src/theme/CommonStyles'


console.disableYellowBox = true
export default class RegisterScreen extends Component {
  static navigationOptions = {
    header: null
  };

  // constructor(props){
  //   super(props);
  //   this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  // }

  constructor(props) {
    super(props);
    //this.login= this.login.bind(this);
    // this.registerCall = this.registerCall.bind(this);
    var { height, width } = Dimensions.get('window');
    this.state = {
      screenHeight: height, screenWidth: width,
      page: 'form',
      name: '',
      email: '',
      phone: '',
      address: '',
      age: '',
      gender: 'male',
      status: '',
      wholeResult: '',
      isFemale: false,
      isMale: true,
    
    };
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

  onIsFemale = () => {
    this.setState({ isFemale: true, isMale: false, gender:'female' })
  }
  onIsMale = () => {
    this.setState({ isMale: true, isFemale: false,gender:'male' })
  }


  onClickListener = () => {
    // if (this.state.isFemale) {
    //   Alert.alert('female'+this.state.gender);
    
    // }
    // else {
    //   Alert.alert('male'+this.state.gender);
     
    // }
    this.registerCall();
    // this.props.navigation.navigate("ThanksScreen");
    // const { first_name,last_name,email } = this.state;

    // if(first_name.length<0){
    //   Alert.alert("Please enter fname");
    // }else if(last_name.length<0){
    //   Alert.alert("please enter lname");
    // }else if(email.length<0){
    //   Alert.alert("please enter email")
    // }else{
    //   this.props.navigation.navigate("ThanksScreen");
    // }

    // if (this.state.first_name || this.state.first_name != " ") {
    //   if (this.state.last_name) {
    //     if (this.state.email) {
    // this.registerCall();

    //     } else {
    //       Alert.alert("Please enter email");
    //     }
    //   } else {
    //     Alert.alert("Please enter lastname");
    //   }
    // } else {
    //   Alert.alert("Please enter firstname");
    // }
  }


  registerCall() {
    // Alert.alert('clicked');
    // var url1 = 'https://b9460ef3.ngrok.io/employees'
var url='http://zconcept99.com/testapi/form.php'

let formdata = new FormData();

formdata.append("page", this.state.page)
formdata.append("name", this.state.name)
formdata.append("email", this.state.email)
formdata.append("phone", this.state.phone)
formdata.append("address", this.state.address)
formdata.append("age", this.state.age)
formdata.append("gender", this.state.gender)

console.log("TAG", "inputParam:" + JSON.stringify(formdata))

    fetch(url, {
      method: 'POST',
      // body: JSON.stringify({"page":this.state.page, "name": this.state.name, "email": this.state.email,
      // "phone":this.state.phone,"address":this.state.address,"age":this.state.age,"gender":this.state.gender }),
      body: formdata,
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    })
      .then((response) => response.json())
      .then((res) => {
        if (typeof (res.message) != "undefined") {
          Alert.alert("Error signing up", "Error: " + res.message);
        }
        else {
          Alert.alert("Success", "You have succesfully signed up" + JSON.stringify(res));
        }
      }).catch((error) => {
        console.error(error);
      });

    this.props.navigation.navigate("ThanksScreen");

  }


  render() {
    return (
      <View style={commonStyles.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content" />

        <Text style={styles.input}>Registration</Text>
        <View style={{ margin: 20, justifyContent: 'center' }}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Name"
              ref={this.name}
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({ name })}
              clearButtonMode={"always"}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Email"
              ref={this.email}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({ email })} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Phone"
              ref={this.phone}
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(phone) => this.setState({ phone })} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Address"
              ref={this.address}
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(address) => this.setState({ address })} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
              placeholder="Age"
              ref={this.age}
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(age) => this.setState({ age })} />
          </View>

          <View style={{ flexDirection: 'row',marginleft:10, }}>
            <View style={{ flex: 1 }}>
              <Text style={{color:'white',fontSize:14}}>Gender:</Text>
            </View>
           

            {/* design of no available radio   */}
            <View style={{ flex: 1 }}>

              <TouchableHighlight onPress={() => this.onIsMale()} underlayColor="transparent">
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={this.state.isMale == false ? images.iconRadioUnselect : images.iconRadioSelect} style={styles.radiobutton} />
                  <Text style={{color:'white',fontSize:14}} >Male</Text>
                </View>
              </TouchableHighlight>
            </View>

             {/* design of available radio */}
             <View style={{ flex: 1 }}>
              <TouchableHighlight onPress={() => this.onIsFemale()} underlayColor="transparent">
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={this.state.isFemale ? images.iconRadioSelect : images.iconRadioUnselect} style={styles.radiobutton} />
                  <Text style={{color:'white',fontSize:14}}>Female</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

        </View>
        <TouchableOpacity style={commonStyles.buttonStyle} onPress={() => this.onClickListener()}>
          <Text style={commonStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 30,
    marginBottom: 20,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  signUpText: {
    color: '#FFFFFF',
    alignItems: 'center'
  },
  inputContainer: {

    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    marginLeft: 16,
    flex: 1,
  },
  radiobutton: { height: 25, width: 25, marginRight: 10 },
})
