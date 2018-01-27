import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TripCard, PermissionCard, SectionHeader, ScheduleCard, FeedbackCard, CommunityCard } from './components'

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'Welcome Loïs',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}>
      
        <ScrollView>
        
          <TripCard />
          <PermissionCard />
          
          <SectionHeader title="Don't forget..."/>
          <ScheduleCard />
          <FeedbackCard />
          
          <SectionHeader title="And also..."/>
          <CommunityCard />
          
        </ScrollView>
        
      </View>
    )
  }
}
