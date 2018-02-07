import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'


export default class CommunityCard extends React.Component {
  
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
        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 30, fontWeight: 'bold' }}>
          Your community
        </Text>
        
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        
          <Image
            style={{ width: 70, height: 70, borderRadius: 35 }}
            source={{ uri: 'http://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f' }}
          />
          
          <Image
            style={{ width: 70, height: 70, borderRadius: 35 }}
            source={{ uri: 'https://cdn9.dissolve.com/p/D205_121_003/D205_121_003_0004_600.jpg' }}
          />
          
          <Image
            style={{ width: 70, height: 70, borderRadius: 35 }}
            source={{ uri: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/097/1ce/3b02cb6.jpg' }}
          />
          
          <Image
            style={{ width: 30, height: 60, borderRadius: 35, opacity: 0.5, tintColor: '#bdc3c7', resizeMode: 'stretch' }}
            source={{ uri: 'https://cdn2.iconfinder.com/data/icons/web-and-mobile-ui-volume-27/48/1319-512.png' }}
          />
        </View>
        
      </View>
    )
  }
}
