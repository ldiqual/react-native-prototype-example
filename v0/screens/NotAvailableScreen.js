import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TripCard, PermissionCard, SectionHeader, ScheduleCard, FeedbackCard, CommunityCard, BasicCard, PendingCard, WelcomeCard, NotAvailableCard } from '../components'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class NotAvailableScreen extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: 'Not-available',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="frown-o" size={20} style={{ color: tintColor }} />
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
        
          <NotAvailableCard />
          <BasicCard title="Share Scoop" iconName="share" />
          
          <SectionHeader title="Don't forget..." />
          <BasicCard title="Verify your email" iconName="envelope-o" />
          <BasicCard title="Enable notifications" iconName="bell-o" />
          
          <SectionHeader title="And also..." />
          <BasicCard title="FAQ" iconName="question-circle-o" />
          
          <View style={{ height: 70 }}></View>
          
        </ScrollView>
        
      </View>
    )
  }
}
