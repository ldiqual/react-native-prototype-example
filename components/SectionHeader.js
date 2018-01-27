import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'

export default class PermissionCard extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  render() {
    return (        
      <Text style={{
        marginTop: 50,
        marginLeft: 20,
        fontSize: 18
      }}>
      { this.props.title }
      </Text>
    )
  }
}
