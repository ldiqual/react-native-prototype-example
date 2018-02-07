import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'


export default class FeedbackCard extends React.Component {
  
  render() {
    return (

      <View style={{
        flex: 1,
        alignItems: 'stretch',
        margin: 20,
        marginBottom: 0,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingBottom: 30,
      }}>
        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 30, fontWeight: 'bold' }}>Leave feedback</Text>
        
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        
          <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          
            <Image
              style={{ width: 70, height: 70 }}
              source={{ uri: 'http://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f' }}
            />
            <Text style={{ marginTop: 5, fontSize: 22 }}>Eric</Text>
          
          </View>
          
          <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          
            <Image
              style={{ width: 70, height: 70 }}
              source={{ uri: 'http://www.teachersculptacademy.com/images/c4.jpg' }}
            />
            <Text style={{ marginTop: 5, fontSize: 22 }}>Natasha</Text>
          
          </View>
          
          <Image
            style={{ width: 30, height: 60, borderRadius: 35, marginTop: 5, opacity: 0.5, tintColor: '#bdc3c7', resizeMode: 'stretch' }}
            source={{ uri: 'https://cdn2.iconfinder.com/data/icons/web-and-mobile-ui-volume-27/48/1319-512.png' }}
          />
        </View>
        
      </View>
    )
  }
}
