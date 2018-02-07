import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActiveScreen from './screens/ActiveScreen'
import { Font } from 'expo'

const Tabs = TabNavigator({
  Active: {
    screen: ActiveScreen
  },
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
