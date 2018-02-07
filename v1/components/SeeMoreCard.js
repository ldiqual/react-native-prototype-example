import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../lib/colors'
import Typography from '../lib/typography'
import Dimensions from '../lib/dimensions'

export default class SeeMoreCard extends React.Component {
  
  render() {
    return (        
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: Dimensions.mediumMargin,
        marginBottom: 0,
        padding: Dimensions.mediumMargin,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.border
      }}>    
        
        <Text style={[Typography.subhead, { marginLeft: Dimensions.mediumMargin }]}>
          See all
        </Text>
        
        <Image
          style={{ width: 24, height: 24, resizeMode: 'contain', marginLeft: Dimensions.mediumMargin }}
          source={require('../assets/icNextDarkOff24.png')}
        />        
                    
      </View>
    )
  }
}
