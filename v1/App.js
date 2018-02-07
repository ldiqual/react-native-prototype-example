import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActiveScreen from './screens/ActiveScreen'
import { Font } from 'expo'
import Colors from './lib/colors'

const Tabs = TabNavigator({
  Active: {
    screen: ActiveScreen
  },
}, {
  tabBarOptions: {
    activeTintColor: Colors.green,
    inactiveTintColor: Colors.grey4,
    style: {
      // backgroundColor: 
    }
  }
})

export default class App extends React.Component {
  
  constructor(...args) {
    super(...args)
    this.state = {}
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'gotham-regular': require('./assets/GothamSSm-Book.otf'),
      'gotham-medium': require('./assets/GothamSSm-Medium.otf'),
    })
    this.setState({ isFontLoaded: true })
  }
  
  render() {
    return (
      this.state.isFontLoaded ? <Tabs /> : <View />
    )
  }
}
