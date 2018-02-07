import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'


export default class WelcomeCard extends React.Component {
  
  render() {
    return (

      <View style={{
        flex: 1,
        alignItems: 'center',
        margin: 20,
        marginBottom: 0,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingBottom: 30,
      }}>
        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 30, fontWeight: 'bold' }}>
          Welcome to Scoop!
        </Text>
        
        <Image
          style={{ tintColor: '#2ecc71', marginTop: 20, width: 100, height: 100, borderRadius: 35 }}
          source={{ uri: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-031_hi_bubble_welcome-512.png' }}
        />
        
        <Text style={{ marginTop: 10, marginLeft: 20, marginRight: 20, fontSize: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        
      </View>
    )
  }
}
