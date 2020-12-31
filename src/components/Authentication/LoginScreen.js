import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { createUserAccount, setCurrentUser } from '../../redux/actions/actions';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
    };

    this.signIn = this.signIn.bind(this);
  }

  signIn(){
    this.props.setCurrentUser('cedfolly@gmail.com', 'enfendel25');
    //this.props.navigation.navigate("Home");
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
                 leftIcon={{ type: 'font-awesome', name: 'envelope', containerStyle: {paddingRight: 5} }}
                 // style={styles}
                 onChangeText={value => this.setState({ email: value })}
             />
             <Input
                 label="Password"
                 name="password"
                 secureTextEntry={true} 
                 placeholder="Password"
                 autoCapitalize='none'
                 leftIcon={{ type: 'font-awesome', name: 'lock', containerStyle: {paddingRight: 5}  }}
                 // style={styles}
                 onChangeText={value => this.setState({ password: value })}
             />
             <Button
                 title="LOGIN"
                 buttonStyle={{ 'borderColor': 'green' }}
                 type="solid"
                 onPress={this.signIn}
             />
             <Text>First visit ? </Text>
             <Button title="Create an account" type="clear" onPress={() => this.props.navigation.navigate('Register')}/>
         </View>
     );
   }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (email, password) => {dispatch(setCurrentUser(email, password))}
})

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen)