import React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import FutureTripCard from '../components/FutureTripCard'
import SectionHeader from '../components/SectionHeader'
import ScheduleCard from '../components/ScheduleCard'
import SeeMoreCard from '../components/SeeMoreCard'
import BalanceView from '../components/BalanceView'
import ScheduleView from '../components/ScheduleView'
import Drawer from '../components/Drawer'
import Colors from '../lib/colors'
import Dimensions from '../lib/dimensions'

export default class ActiveScreen extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: 'Trips',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../assets/icTripWhiteOn.png')} style={{ tintColor: tintColor }} />
    ),
  }
  
  constructor(props) {
    super(props)
    this.state = {
      backgroundStyle: {}
    }
  }
  
  onBackgroundStyleNeedsChange(style) {
    this.setState({ backgroundStyle: style })
  }
  
  onTabBarStyleNeedsChange(style) {
    
  }
  
  render() {
    console.log(this.state.backgroundStyle)
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      }}>
        <Animated.View style={[this.state.backgroundStyle, {
          flex: 1,
          backgroundColor: Colors.grey1,
          alignItems: 'stretch',
          justifyContent: 'center',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }]}>
        
          <ScrollView style={{ paddingTop: 50 }}>
            
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              padding: Dimensions.mediumMargin
            }}>
              <BalanceView />
              <ScheduleView />
            </View>
            
            <SectionHeader title="Upcoming Trips" />
            <FutureTripCard date="Wednesday 8/19" title="Morning ride" />
            <FutureTripCard date="Wednesday 8/19" title="Evening ride" />
            <FutureTripCard date="Thursday 8/20" title="Morning ride" />
            <ScheduleCard />
            <SeeMoreCard />
            
          </ScrollView>
          
        </Animated.View>
        <Drawer
          onBackgroundStyleNeedsChange={ this.onBackgroundStyleNeedsChange.bind(this) }
          onTabBarStyleNeedsChange={ this.onTabBarStyleNeedsChange.bind(this) }
        />          
          
      </View>
        
    )
  }
}
