import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { initEvents } from '../../redux/actions/actions'

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        date: new Date,
        day: '',
        rates: {}
    };
  }

  componentDidMount(){
    this.props.initEvents();
    
    console.log(this.props.settings);
  }

  render(){
    let day = this.state.date.getDay();
    let weekConfig = this.props.settings.weekConfiguration
    console.log(this.weekConfig);
    let type = weekConfig.work.includes(day) ? 'WORK DAY' : 'REST DAY';
    
    // {this.props.settings.work.includes(this.state.date.getDay()) ? 'WORK DAY' : 'REST DAY'}
    return(
      <View>
        <Text>{type}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  userID: state.auth.userID,
  settings: state.auth.settings
})

const mapDispatchToProps = dispatch => ({
  initEvents: () => {dispatch(initEvents())},
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)