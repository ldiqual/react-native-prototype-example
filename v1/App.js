import React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, ScrollView, Image } from 'react-native'
import Button from 'react-native-button'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActiveScreen from './screens/ActiveScreen'
import { Font } from 'expo'
import Colors from './lib/colors'

const drawerAnimationPercent = new Animated.Value(0)

class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    }
  }

  componentWillReceiveProps(props) {
    const state = this.props.navigation.state
    const params = state.routes[state.index].params || {}
    const style = params.tabBarStyle || {}
    this.setState({ style: style })
  }

  render() {
    const interpolate = outputRange => {
      return drawerAnimationPercent.interpolate({
        inputRange: outputRange.length == 3 ? [0, 0.5, 1] : [0, 1],
        outputRange: outputRange
      })
    }
    
    return (
      <Animated.View style={{
        marginBottom: interpolate([0, -82])
      }}>
        <TabBarBottom {...this.props} />
      </Animated.View>
    )
  }
}

const createEmptyScreen = (name, icon) => {
  return class EmptyScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: name,
      tabBarIcon: ({ tintColor }) => (
        <Image source={icon} style={{ tintColor: tintColor }} />
      ),
    }
    render() {
      return <View />
    }
  }
}

const Tabs = TabNavigator({
  Active: {
    screen: ActiveScreen
  },
  Community: {
    screen: createEmptyScreen('Community', require('./assets/icCommunityDarkGreenOff.png'))
  },
  Stream: {
    screen: createEmptyScreen('Stream', require('./assets/icStreamDarkGreenOff.png'))
  },
  Account: {
    screen: createEmptyScreen('Account', require('./assets/icAccountDarkGreenOff.png'))
  },
}, {
  tabBarComponent: TabBar,
  tabBarOptions: {
    activeTintColor: Colors.green,
    inactiveTintColor: Colors.grey4,
    style: {
      backgroundColor: Colors.white,
    }
  }
})

export default class App extends React.Component {
  
  constructor(...args) {
    super(...args)
    this.state = {}
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'gotham-regular': require('./assets/GothamSSm-Book.otf'),
      'gotham-medium': require('./assets/GothamSSm-Medium.otf'),
    })
    this.setState({ isFontLoaded: true })
  }
  
  render() {
    return (
      this.state.isFontLoaded ? <Tabs screenProps={{ drawerAnimationPercent: drawerAnimationPercent }} /> : <View />
    )
  }
}
