import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import Typography from '../lib/typography'
import Dimensions from '../lib/dimensions'

export default class SectionHeader extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  render() {
    return (        
      <Text style={[
        Typography.headline, {
          marginTop: Dimensions.mediumMargin,
          marginLeft: Dimensions.mediumMargin,
        }
      ]}>
      { this.props.title }
      </Text>
    )
  }
}
