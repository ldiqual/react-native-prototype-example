import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
// import { ActiveScreen, FutureScreen, AfterSignupScreen, NotAvailableScreen } from './screens'

const Tabs = TabNavigator({
  // Active: {
  //   screen: ActiveScreen
  // },
})

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}
