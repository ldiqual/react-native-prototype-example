import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'

export default class PermissionCard extends React.Component {
  
  render() {
    return (        
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        marginTop: 15,
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'white',
      }}>
        
        <Image
          style={{ width: 40, height: 40 }}
          source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/alert-circle-orange-512.png' }}
        />
        
        <Text style={{ marginLeft: 15, fontSize: 20 }}>Enable location permission</Text>
                    
      </View>
    )
  }
}
