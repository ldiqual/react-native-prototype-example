import { Animated, Easing } from 'react-native'

const MIN_Y_OFFSET = 50
const TAB_BAR_HEIGHT = 82

export default function(screen_height) {
   var module = {}
   var initialUsedSpace
   var tension
   var friction
   var initialPosition
   var callbackPositionUpdated

   module.calculateInitialPosition = function(initialUsedSpace) {
      initialUsedSpace = Math.abs(initialUsedSpace)
      initialPosition = (screen_height - initialUsedSpace - TAB_BAR_HEIGHT)
      return initialPosition
   }

   module.getInitialUsedSpace = function(){
      return initialUsedSpace
   }

   module.getInitialPosition = function(){
      return initialPosition
   }


   module.setupAnimation = function ( higher_tension, friction, callbackPositionUpdated ){
      this.tension = higher_tension
      this.friction = friction
      this.callbackPositionUpdated = callbackPositionUpdated
   }

   module.isAValidMovement = function(distanceX, distanceY){
      var moveTravelledFarEnough =  Math.abs(distanceY) > Math.abs(distanceX) && Math.abs(distanceY) > 2
      return moveTravelledFarEnough
   }


   module.startAnimation = function (velocityY, positionY,initialPosition,id ){
      
      var isGoingToUp = ( velocityY < 0 )? true : false
      var speed = Math.abs(velocityY)
      var currentPosition = Math.abs(positionY / screen_height)
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

   return module
}
