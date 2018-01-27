import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TripCard, PermissionCard, SectionHeader, ScheduleCard, FeedbackCard, CommunityCard, BasicCard } from './components'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ActiveScreen, FutureScreen, AfterSignupScreen } from './screens'

const Tabs = TabNavigator({
  Active: {
    screen: ActiveScreen
  },
  
  Future: {
    screen: FutureScreen,
  },
  
  AfterSignup: {
    screen: AfterSignupScreen,
  },
})

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}
