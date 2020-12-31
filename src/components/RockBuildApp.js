import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import { setFirebase, setCurrentUser } from '../redux/actions/actions';
import LoginScreen from '../components/Authentication/LoginScreen';
import RegisterScreen from '../components/Authentication/RegisterScreen';
import HomeScreen from '../components/Home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const AuthStack = createStackNavigator();

function AuthStackNavigator(){
  return(
    <AuthStack.Navigator initialRouteName='Login' >
      <AuthStack.Screen name='Login' component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  )
}


class RockBuildApp extends Component {

  componentDidMount(){
    this.props.setFirebase();
    // this.props.setCurrentUser('cedfolly@gmail.com', 'enfendel25');
  }

  render() {

    return (
        <NavigationContainer>
          {!this.props.userID ? (
            <AuthStackNavigator />
            )
            :
            (
            <HomeScreen />
          )}
        </NavigationContainer>
      );
    
    
  }
}

const mapStateToProps = state => ({
  userID: state.auth.userID,
  settings: state.auth.settings
})

const mapDispatchToProps = dispatch => ({
  setFirebase: () => {dispatch(setFirebase())},
  setCurrentUser: (email, password) => {dispatch(setCurrentUser(email, password))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RockBuildApp);