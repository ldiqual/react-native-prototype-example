import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TripCard, PermissionCard, SectionHeader, ScheduleCard, FeedbackCard, CommunityCard, BasicCard } from '../components'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ActiveScreen extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: 'Active trip',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="car" size={20} style={{ color: tintColor }} />
    ),
  };
  
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}>
      
        <ScrollView style={{ paddingTop: 50 }}>
        
          <TripCard />
          <PermissionCard />
          
          <SectionHeader title="Don't forget..." />
          <ScheduleCard />
          <FeedbackCard />
          
          <SectionHeader title="And also..." />
          <CommunityCard />
          <BasicCard title="Add your company" iconName="briefcase" />
          <BasicCard title="Share Scoop" iconName="share" />
          
          <View style={{ height: 70 }}></View>
          
        </ScrollView>
        
      </View>
    )
  }
}
