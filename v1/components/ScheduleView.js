import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../lib/colors'
import Typography from '../lib/typography'
import Dimensions from '../lib/dimensions'

export default class BalanceView extends React.Component {
  
  render() {
    return (        
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto'
      }}>   
        
        <Image source={require('../assets/icAddDarkOff24.png')} style={{ tintColor: Colors.green }} />
            
      </View>
    )
  }
}
