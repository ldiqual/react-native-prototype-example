import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import Typography from '../lib/typography'

export default class SectionHeader extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  render() {
    return (        
      <Text style={[
        Typography.headline, {
          marginTop: 50,
          marginLeft: 20,
        }
      ]}>
      { this.props.title }
      </Text>
    )
  }
}
