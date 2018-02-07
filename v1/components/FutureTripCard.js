import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../lib/colors'
import Typography from '../lib/typography'
import Dimensions from '../lib/dimensions'

export default class BasicCard extends React.Component {
  
  static propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  
  render() {
    return (        
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: Dimensions.mediumMargin,
        marginBottom: 0,
        padding: Dimensions.mediumMargin,
        borderRadius: 4,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOpacity: 0.20,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8
      }}>    
      
        <View style={{
          flex: 1,
          flexDirection: 'column',
        }}>   
          <Text style={Typography.body}>
            { this.props.title }
          </Text>
          <Text style={Typography.subhead}>
            { this.props.title }
          </Text>
        </View>
        
        <Image
          style={{ marginLeft: 'auto', width: 24, height: 24, resizeMode: 'contain' }}
          source={require('../assets/icNextDarkOff24.png')}
        />
                    
      </View>
    )
  }
}
