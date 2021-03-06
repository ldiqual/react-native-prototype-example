import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'

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
        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 30, fontWeight: 'bold' }}>Your trip</Text>
        
        <Image
          style={{ height: 200, marginTop: 20 }}
          source={{ uri: 'https://a0.thelateroomsgroup.com/moonstick/images/placeholders/mapplaceholder.836efba1.jpg' }}
        />
        
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}>
        
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'http://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f' }}
          />
          <Text style={{ marginLeft: 20, fontSize: 25 }}>Eric</Text>
        
        </View>
        
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
        }}>
        
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'http://www.teachersculptacademy.com/images/c4.jpg' }}
          />
          <Text style={{ marginLeft: 20, fontSize: 25 }}>Natasha</Text>
        
        </View>
        
        <Button
          containerStyle={{padding:10, height:48, overflow:'hidden', borderRadius:6, backgroundColor: '#3498db', marginTop: 20, marginLeft: 20, marginRight: 20}}
          disabledContainerStyle={{backgroundColor: 'grey'}}
          style={{fontSize: 20, color: 'white' }}>
          See trip
        </Button>
        
      </View>
    )
  }
}
