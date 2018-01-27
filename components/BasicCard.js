import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class BasicCard extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
  }
  
  render() {
    return (        
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        marginBottom: 0,
        marginTop: 15,
        paddingLeft: 20,
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom: 15,
        borderRadius: 20,
        backgroundColor: 'white',
      }}>
      
        <Icon name={ this.props.iconName } size={30} color='#2ecc71' ></Icon>
        
        <Text style={{ marginLeft: 17, fontSize: 20 }}>
          { this.props.title }
        </Text>
        
        <Image
          style={{ marginLeft: 'auto', width: 25, height: 45, borderRadius: 35, opacity: 0.5, tintColor: '#bdc3c7', resizeMode: 'stretch' }}
          source={{ uri: 'https://cdn2.iconfinder.com/data/icons/web-and-mobile-ui-volume-27/48/1319-512.png' }}
        />
                    
      </View>
    )
  }
}
