import { Animated, Easing } from 'react-native'

const MIN_Y_OFFSET = 50
const TAB_BAR_HEIGHT = 82

export default function(screenHeight) {
   var module = {}
   var initialUsedSpace
   var tension
   var friction
   var initialPosition
   var callbackPositionUpdated

   module.calculateInitialPosition = function(initialUsedSpace) {
      initialUsedSpace = Math.abs(initialUsedSpace)
      initialPosition = (screenHeight - initialUsedSpace - TAB_BAR_HEIGHT)
      return initialPosition
   }

   module.getInitialUsedSpace = function() {
      return initialUsedSpace
   }

   module.getInitialPosition = function() {
      return initialPosition
   }


   module.setupAnimation = function(higherTension, friction, callbackPositionUpdated) {
      this.tension = higherTension
      this.friction = friction
      this.callbackPositionUpdated = callbackPositionUpdated
   }

   module.isAValidMovement = function(distanceX, distanceY) {
      var moveTravelledFarEnough =  Math.abs(distanceY) > Math.abs(distanceX) && Math.abs(distanceY) > 2
      return moveTravelledFarEnough
   }

   module.startAnimation = function(velocityY, positionY, initialPosition, id) {
      
      var isGoingToUp = ( velocityY < 0 )? true : false
      var currentPosition = Math.abs(positionY / screenHeight)
      var endPosition = isGoingToUp ? MIN_Y_OFFSET : initialPosition

      var position = new Animated.Value(positionY)
      position.removeAllListeners()

      Animated.timing(position, {
         toValue: endPosition,
         tension: 30,
         friction: 1,
         easing: Easing.elastic(1),
         velocity: velocityY
      }).start()

      position.addListener(this.callbackPositionUpdated)
   }
   
   module.open = function(initialPosition, id) {

      const position = new Animated.Value(initialPosition)
      Animated.timing(position, {
         toValue: MIN_Y_OFFSET,
         tension: 30,
         friction: 1,
         easing: Easing.elastic(1),
         velocity: 5
      }).start()

      position.addListener(this.callbackPositionUpdated)
   }

   return module
}
