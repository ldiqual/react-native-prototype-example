import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import FutureTripCard from '../components/FutureTripCard'
import SectionHeader from '../components/SectionHeader'
import ScheduleCard from '../components/ScheduleCard'
import SeeMoreCard from '../components/SeeMoreCard'
import Colors from '../lib/colors'

export default class ActiveScreen extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: 'Active',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="car" size={20} style={{ color: tintColor }} />
    ),
  };
  
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.grey1,
        alignItems: 'stretch',
        justifyContent: 'center',
      }}>
      
        <ScrollView style={{ paddingTop: 50 }}>
          
          <SectionHeader title="Upcoming Trips" />
          <FutureTripCard date="Wednesday 8/19" title="Morning ride" />
          <FutureTripCard date="Wednesday 8/19" title="Evening ride" />
          <FutureTripCard date="Thursday 8/20" title="Morning ride" />
          <ScheduleCard />
          <SeeMoreCard />
          
        </ScrollView>
        
      </View>
    )
  }
}
