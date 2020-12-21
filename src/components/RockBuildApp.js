import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import { setFirebase } from '../redux/actions/actions';
import LoginScreen from '../components/Authentication/LoginScreen';
import RegisterScreen from '../components/Authentication/RegisterScreen';
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
  }

  render() {

    return (
        <NavigationContainer>
          <AuthStackNavigator />
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RockBuildApp);