import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class TripCard extends React.Component {
  
  render() {
    return (

      <View style={{
        flex: 1,
        alignItems: 'stretch',
        margin: 20,
        marginBottom: 0,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingBottom: 30,
      }}>
        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 30, fontWeight: 'bold' }}>Finding a Carpool...</Text>
        
        <Image
          style={{ height: 200, marginTop: 20 }}
          source={{ uri: 'https://a0.thelateroomsgroup.com/moonstick/images/placeholders/mapplaceholder.836efba1.jpg' }}
        />
        
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
        }}>
        
          <Text style={{ fontSize: 25 }}>Home</Text>
          <Icon name='chevron-right' size={15} style={{ marginLeft: 20, marginRight: 20 }} />
          <Text style={{ fontSize: 25 }}>Work</Text>
          <Icon name='chevron-right' size={15} style={{ marginLeft: 20, marginRight: 20 }} />
          <Text style={{ fontSize: 25 }}>$7</Text>
        
        </View>
        
        <View style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 20,
          marginLeft: 20
        }}>
        
          <Button
            containerStyle={{ flex: 1, padding:10, height:48, overflow:'hidden', borderRadius:6, backgroundColor: '#3498db' }}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            style={{ fontSize: 20, color: 'white' }}>
            Cancel
          </Button>
          
          <Button
            containerStyle={{ flex: 1, padding:10, height:48, overflow:'hidden', borderRadius:6, backgroundColor: '#3498db', marginLeft: 20, marginRight: 20 }}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            style={{ fontSize: 20, color: 'white' }}>
            Edit
          </Button>
        
        </View>
        
      </View>
    )
  }
}
