import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {initialCriterias, initialEvents, defaultSettings} from '../database/initialData';
import * as firebase from 'firebase';

class RockBuildApp extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
    };

    this.signIn = this.signIn.bind(this);
  }

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyBUtZFTuzEhTCkwV2L6C9vKa5GR0bo6PwA",
      authDomain: "rockbuild-39b38.firebaseapp.com",
      databaseURL: "https://rockbuild-39b38-default-rtdb.firebaseio.com",
      projectId: "rockbuild-39b38",
      storageBucket: "rockbuild-39b38.appspot.com",
      messagingSenderId: "815117212521",
      appId: "1:815117212521:web:c8b31cec5d0b0d03183bf8",
      measurementId: "G-CS53DHK0S9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  signIn(){
    // this.props.setCurrentUser(this.state.email, this.state.password);
    //this.props.navigation.navigate("Home");
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((userData) => {
      // Signed in 
      // ...
      console.log(userData.user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  render() {

    return (
      <View>
            {/* <Text>LOGIN</Text> */}
            <Input
                label="Email address"
                name="email"
                placeholder="example@gmail.com"
                autoCapitalize='none'
                // leftIcon={{ type: 'font-awesome', name: 'envelope', containerStyle: {paddingRight: 5} }}
                // style={styles}
                onChangeText={value => this.setState({ email: value })}
            />
            <Input
                label="Password"
                name="password"
                secureTextEntry={true} 
                placeholder="Password"
                autoCapitalize='none'
                // leftIcon={{ type: 'font-awesome', name: 'lock', containerStyle: {paddingRight: 5}  }}
                // style={styles}
                onChangeText={value => this.setState({ password: value })}                      
            />
            <Button
                title="LOG IN"
                buttonStyle={{ 'borderColor': 'green' }}
                type="solid"
                onPress={this.signIn}
            />
            <Text>First visit ? </Text>
            {/* <Button title="Create an account" type="clear" onPress={() => this.props.navigation.navigate('Register')}/> */}
        </View>
        );
    
    
  }
}

export default RockBuildApp;