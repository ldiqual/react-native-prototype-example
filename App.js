import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppV1 from './v1/App'

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <AppV1 />
    );
  }
}
