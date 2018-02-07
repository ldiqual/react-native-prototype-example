import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TripCard, PermissionCard, SectionHeader, ScheduleCard, FeedbackCard, CommunityCard, BasicCard, PendingCard, WelcomeCard } from '../components'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AfterSignupScreen extends React.Component {
  
  static navigationOptions = {
    tabBarLabel: 'Signed-up',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user-plus" size={20} style={{ color: tintColor }} />
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
        
          <WelcomeCard />
          <ScheduleCard />
          <CommunityCard />
          
          <SectionHeader title="Don't forget..." />
          <BasicCard title="Enter referral code" iconName="code" />
          <BasicCard title="Verify your email" iconName="envelope-o" />
          <BasicCard title="Enable notifications" iconName="bell-o" />
          
          <SectionHeader title="And also..." />
          <BasicCard title="Share Scoop" iconName="share" />
          
          <View style={{ height: 70 }}></View>
          
        </ScrollView>
        
      </View>
    )
  }
}
