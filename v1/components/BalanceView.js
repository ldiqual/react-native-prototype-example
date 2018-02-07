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
      }}>   
        
        <Text style={Typography.body}>
          $10
        </Text>
        <Text style={Typography.helper}>
          Balance
        </Text>
            
      </View>
    )
  }
}
