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
  
  static propTypes = {
    drawerAnimationPercent: PropTypes.object,
  }
  
  static navigationOptions = {
    tabBarLabel: 'Trips',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../assets/icTripWhiteOn.png')} style={{ tintColor: tintColor }} />
    ),
  }
  
  constructor(props) {
    super(props)
    this.state = {
      backgroundStyle: {},
      dimmingViewStyle: {
        opacity: 0,
        display: 'none',
      },
      isDimmingViewVisible: false,
      drawerAnimationPercent: props.screenProps.drawerAnimationPercent || new Animated.Value(0)
    }
  }
  
  render() {
    
    const interpolate = function(outputRange) {
      return this.state.drawerAnimationPercent.interpolate({
        inputRange: outputRange.length == 3 ? [0, 0.5, 1] : [0, 1],
        outputRange: outputRange
      })
    }.bind(this)
    
    this.state.drawerAnimationPercent.addListener(function(ev) {
      const shouldBeVisible = ev.value > 0.01
      if (shouldBeVisible != this.state.isDimmingViewVisible) {
        this.setState({isDimmingViewVisible: shouldBeVisible})
      }
    }.bind(this))
    
    return (
      <View ref={ comp => this._test = comp } style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      }}>
        <Animated.View style={{
          transform: [
            { scaleX: interpolate([1, 0.9]) },
            { scaleY: interpolate([1, 0.9]) },
          ],
          flex: 1,
          backgroundColor: Colors.grey1,
          alignItems: 'stretch',
          justifyContent: 'center',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
        
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
        
        <Animated.View style={{
          display: this.state.isDimmingViewVisible ? 'flex' : 'none',
          opacity: interpolate([0, 0.6]),
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'black'
        }} />
        
        <Drawer
          percent={ this.state.drawerAnimationPercent }
        />
          
      </View>
        
    )
  }
}
