import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
  AppRegistry,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
  View,
  Animated,
  AlertIOS,
  PanResponder,
  Dimensions as ReactDimensions,
  TouchableOpacity
} from 'react-native'

import Dimensions from '../lib/dimensions'
import Colors from '../lib/colors'
import Typography from '../lib/typography'
import AnimationHelper from '../lib/animationHelper'

const TENSION = 800
const FRICTION = 90
const MIN_Y_OFFSET = 50
const TAB_BAR_HEIGHT = 82
const SCREEN_WIDTH = ReactDimensions.get('window').width
const SCREEN_HEIGHT = ReactDimensions.get('window').height
const DraggableDrawerHelper = AnimationHelper(SCREEN_HEIGHT)

export default class Drawer extends Component {
  
  static propTypes = {
    percent: PropTypes.object.isRequired,
  }
  
  constructor (props) {
    super(props)
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    const headerSize = 88
    var initialDrawerPosition = DraggableDrawerHelper.calculateInitialPosition(headerSize)
        
    // console.log(initialDrawerSize, 'Initila size')
    this.state = {
      touched: false,
      position: new Animated.Value(initialDrawerPosition),
      initialPosition: initialDrawerPosition,
      percent: props.percent,
      isClosed: true,
    }
  }

  onUpdatePosition (position) {
    this.state.position.setValue(position)
    const percent = 1 - (position - MIN_Y_OFFSET) / (this.state.initialPosition - MIN_Y_OFFSET)
    this.state.percent.setValue(percent)
    this.setState({ isClosed: percent < 0.01 })
  }

  componentWillMount () {
    // Initialize the DraggableDrawerHelper that will drive animations
    DraggableDrawerHelper.setupAnimation(TENSION, FRICTION,
      (position) => {
        if (!this.center) return
        this.onUpdatePosition(position.value)
      }
    )

    this._panGesture = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return DraggableDrawerHelper.isAValidMovement(gestureState.dx, gestureState.dy) && this.state.touched == true
      },
      onPanResponderMove: (evt, gestureState) => {
        this.moveDrawerView(gestureState)
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.moveFinished(gestureState)
      },
    })
  }

  moveDrawerView (gestureState) {
    if (!this.center) return
    var currentValue = Math.abs(gestureState.moveY / SCREEN_HEIGHT)
    var position = gestureState.moveY - SCREEN_HEIGHT * 0.05
    this.onUpdatePosition(position)
  }

  moveFinished (gestureState) {
    if (!this.center) return
    DraggableDrawerHelper.startAnimation(gestureState.vy, gestureState.moveY, this.state.initialPosition, gestureState.stateId)
  }

  render() {
    
    const percent = this.state.percent
    const imageSize = 50
    const initialImageSize = 50
    const finalImageSize = 150
    const finalImageX = (SCREEN_WIDTH - 2 * Dimensions.mediumMargin) / 2 - finalImageSize / 2
    
    const interpolate = outputRange => {
      return percent.interpolate({
        inputRange: outputRange.length == 3 ? [0, 0.5, 1] : [0, 1],
        outputRange: outputRange
      })
    }
    
    return (
      <Animated.View
        style={{
          top: this.state.position,
          backgroundColor: 'white',
          flex: 1,
          position: 'absolute',
          width: '100%',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          overflow: 'hidden',
        }}
        ref={(center) => this.center = center}
        {...this._panGesture.panHandlers}>
        <TouchableWithoutFeedback
          onPressIn={() => { this.setState({ touched: true }) }}
          onPressOut={() => { this.setState({ touched: false }) }}
          onPress={() => this.state.isClosed && DraggableDrawerHelper.open(this.state.initialPosition, 2)}
        >
          
          <Animated.View style={{
            backgroundColor: interpolate([Colors.green, Colors.white, Colors.white]),
            flexDirection: 'column',
            alignItems: 'stretch',
            height: interpolate([88, 250, 280]),
            padding: Dimensions.mediumMargin,
            paddingTop: 0,
          }}>
          
            <View style={{ alignItems: 'center' }}>
              <Animated.View style={{
                backgroundColor: interpolate([Colors.white, Colors.grey5]),
                width: 20,
                height: 1,
                marginTop: 10
              }}/>
            </View>
            
            <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center' }}>
              <Animated.Image
                style={{
                  left: interpolate([0, 10, finalImageX]),
                  top: interpolate([0, 75, 100]),
                  width: interpolate([initialImageSize, finalImageSize]),
                  height: interpolate([initialImageSize, finalImageSize]),
                  borderRadius: interpolate([initialImageSize / 2, finalImageSize / 2]),
                  position: 'absolute',
                }}
                source={{ url: 'http://cvl-demos.cs.nott.ac.uk/vrn/queue/59b4192763dd4.jpg' }}
              />
            
              <Animated.View style={{
                position: 'absolute',
                left: interpolate([
                  initialImageSize + Dimensions.mediumMargin,
                  initialImageSize + Dimensions.mediumMargin,
                  0
                ]),
                top: interpolate([5, 20])
              }}>
                <Animated.Text style={[ Typography.body, {
                  textAlign: 'left',
                  fontSize: interpolate([
                    StyleSheet.flatten(Typography.body).fontSize,
                    StyleSheet.flatten(Typography.subhead).fontSize
                  ]),
                  color: interpolate([Colors.white, Colors.black]),
                }]}>
                  Morning ride is
                </Animated.Text>
                
                <Animated.Text style={[ Typography.subhead, {
                  textAlign: 'left',
                  fontSize: interpolate([
                    StyleSheet.flatten(Typography.subhead).fontSize,
                    StyleSheet.flatten(Typography.headline).fontSize
                  ]),
                  color: interpolate([Colors.white, Colors.green]),
                }]}>
                  Confirmed for 8:00 am
                </Animated.Text> 
              </Animated.View>
            </View>
          
                     
          </Animated.View>

        </TouchableWithoutFeedback>
        <Animated.View style={{
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: Colors.white,
          height: SCREEN_HEIGHT,
          opacity: interpolate([0, 0, 1]),
        }}>
          <Text style={[ Typography.headline, { marginTop: Dimensions.largeMargin }]}>
            Meet Robert
          </Text>
        </Animated.View>
      </Animated.View>
    )
  }
}
