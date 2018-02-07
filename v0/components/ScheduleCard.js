import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ScheduleCard extends React.Component {
  
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
        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 30, fontWeight: 'bold' }}>Schedule</Text>
      
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 15,
          borderRadius: 20,
          backgroundColor: 'white',
        }}>
        
          <TouchableHighlight>
            <Icon.Button name="plus" backgroundColor="#3498db" style={{ width: 50, height: 50, padding: 0, paddingLeft: 17 }} borderRadius={25}>
            </Icon.Button>
          </TouchableHighlight>
          
          <TouchableHighlight style={{ marginLeft: 10 }}>
            <Button name="plus" style={{ color: 'white' }} containerStyle={{
              width: 50,
              height: 50,
              backgroundColor:"#bdc3c7",
              borderRadius: 25,
              paddingTop: 15,
              paddingBottom: 15,
            }}>
              Thu
            </Button>
          </TouchableHighlight>
          
          <TouchableHighlight style={{ marginLeft: 10 }}>
            <Button name="plus" style={{ color: 'white' }} containerStyle={{
              width: 50,
              height: 50,
              backgroundColor:"#bdc3c7",
              borderRadius: 25,
              paddingTop: 15,
              paddingBottom: 15,
            }}>
              Fri
            </Button>
          </TouchableHighlight>
        </View>
        
                    
      </View>
    )
  }
}
