var TENSION = 800;
var FRICTION = 90;
const MIN_Y_OFFSET = 50
const TAB_BAR_HEIGHT = 82

import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

var SCREEN_HEIGHT = ReactDimensions.get('window').height;
var DraggableDrawerHelper = (function(screen_height) {
   var module = {};
   var initialUsedSpace;
   var tension;
   var friction;
   var initialPosition;
   var callbackPositionUpdated;

   module.calculateInitialPosition = function(initialUsedSpace) {
      initialUsedSpace = Math.abs(initialUsedSpace);
      initialPosition = (screen_height - initialUsedSpace - TAB_BAR_HEIGHT);
      return initialPosition;
   };

   module.getInitialUsedSpace = function(){
      return initialUsedSpace;
   };

   module.getInitialPosition = function(){
      return initialPosition;
   };


   module.setupAnimation = function ( higher_tension, friction, callbackPositionUpdated ){
      this.tension = higher_tension;
      this.friction = friction;
      this.callbackPositionUpdated = callbackPositionUpdated;

   };


   module.isAValidMovement = function(distanceX, distanceY){
      var moveTravelledFarEnough =  Math.abs(distanceY) > Math.abs(distanceX) && Math.abs(distanceY) > 2;
      return moveTravelledFarEnough;
   };


   module.startAnimation = function (velocityY, positionY,initialPosition,id ){
      // console.log('creating animation ');
      var isGoingToUp = ( velocityY < 0 )? true : false;
      var speed = Math.abs(velocityY);
      var currentPosition = Math.abs(positionY / screen_height);
      var endPosition = isGoingToUp ? MIN_Y_OFFSET : initialPosition;

      var position = new Animated.Value(positionY);
      position.removeAllListeners();

      // console.log('configuration : '+endPosition)

      Animated.timing(position, {
         toValue: endPosition,
         tension: 30,
         friction: 1,
         //easing:Easing.elastic,
         velocity: velocityY
      }).start();

      // position.addListener((position)=>{console.log('position by',position,endPosition);});
      position.addListener(this.callbackPositionUpdated);
   };

   return module;
})(SCREEN_HEIGHT)

export default class Drawer extends Component {
  
  static propTypes = {
    onBackgroundStyleNeedsChange: PropTypes.func.isRequired,
    onTabBarStyleNeedsChange: PropTypes.func.isRequired,
  }
  
  constructor (props) {
    super(props)
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    const headerSize = 88
    var initialDrawerPosition = DraggableDrawerHelper.calculateInitialPosition(headerSize);
        
    // console.log(initialDrawerSize, 'Initila size');
    this.state = {
      touched: 'FALSE',
      position: new Animated.Value(initialDrawerPosition),
      initialPosition: initialDrawerPosition
    };
  }

  onUpdatePosition (position) {
    this.state.position.setValue(position);
    this._previousTop = position;
    
    const percent = 1 - (position - MIN_Y_OFFSET) / (this.state.initialPosition - MIN_Y_OFFSET)
    const maxScale = 0.9
    
    this.props.onBackgroundStyleNeedsChange({
      transform: [
        { scaleX: 1 - (1 - maxScale) * percent },
        { scaleY: 1 - (1 - maxScale) * percent },
      ]
    })
  }

  componentWillMount () {
    // Initialize the DraggableDrawerHelper that will drive animations
    DraggableDrawerHelper.setupAnimation(TENSION, FRICTION,
      (position) => {
        if (!this.center) return;
        this.onUpdatePosition(position.value);
      }
    );

    this._panGesture = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return DraggableDrawerHelper.isAValidMovement(gestureState.dx, gestureState.dy) && this.state.touched == 'TRUE';
      },
      onPanResponderMove: (evt, gestureState) => {
        this.moveDrawerView(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.moveFinished(gestureState);
      },
    });
  }


  moveDrawerView (gestureState) {
    // console.log(gestureState.vy, 'GESTURE');
    if (!this.center) return;
    var currentValue = Math.abs(gestureState.moveY / SCREEN_HEIGHT);
    var isGoingToUp = (gestureState.vy < 0);
    //Here, I'm subtracting %5 of screen size from edge drawer position to be closer as possible to finger location when dragging the drawer view
    var position = gestureState.moveY - SCREEN_HEIGHT * 0.05;
    //Send to callback function the current drawer position when drag down the drawer view component
    //   if(!isGoingToUp) this.props.onDragDown(1-currentValue);
    this.onUpdatePosition(position);
  }

  moveFinished (gestureState) {
    var isGoingToUp = (gestureState.vy < 0);
    if (!this.center) return;
    DraggableDrawerHelper.startAnimation(gestureState.vy, gestureState.moveY, this.state.initialPosition, gestureState.stateId);
  }

  render() {

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
          onPressIn={() => { this.setState({ touched: 'TRUE' }); }}
          onPressOut={() => { this.setState({ touched: 'FALSE' }); }}>
          
          <View style={{
            flexDirection: 'column',
            backgroundColor: Colors.green,
            alignItems: 'stretch',
            height: 88,
            padding: Dimensions.mediumMargin,
            paddingTop: 0,
            
          }}>
          
            <View style={{ alignItems: 'center' }}>
              <View style={{ backgroundColor: Colors.white, width: 20, height: 1, marginTop: 10 }}/>
            </View>
          
            <Text style={[ Typography.body, { marginTop: 20, color: Colors.white, textAlign: 'left' } ]}>
              Morning ride is
            </Text>
            
            <Text style={[ Typography.subhead, { color: Colors.white, textAlign: 'left' } ]}>
              Confirmed for 8:00 am
            </Text>          
          </View>

        </TouchableWithoutFeedback>
        <View style={{ backgroundColor: Colors.white, height: SCREEN_HEIGHT }} />
      </Animated.View>
    );
  }
};