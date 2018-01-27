import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TripCard, PermissionCard, SectionHeader, ScheduleCard, FeedbackCard, CommunityCard, BasicCard, PendingCard } from '../components'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ActiveScreen extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: 'Eg: Done',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="history" size={20} style={{ color: tintColor }} />
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
        
          <FeedbackCard />
          
          <SectionHeader title="Don't forget..." />
          <PendingCard />
          <ScheduleCard />
          
          
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
