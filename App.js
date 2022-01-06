
import React from 'react';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import Home from './src/Home';
import SplashScreen from './src/SplashScreeen';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 1000,
    mass: 10,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig={
    animation:'timing',
    config:{
        duration:200,
        easing:Easing.linear
    }
}


function MyStacks(){
  return(
      <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS,transitionSpec: {
        open: config,
        close: closeConfig,
},headerTransparent:false,headerTitle:null,}}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}} />
      </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStacks/>
    </NavigationContainer>
  );
}




export default App;
