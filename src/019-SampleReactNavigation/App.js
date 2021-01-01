import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import StartScreen from './screens/Start'
import HomeScreen from './screens/Home'
import RegisterScreen from './screens/Register'
import LoginScreen from './screens/Login'

const ScreenStack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <ScreenStack.Navigator initialRouteName="Start">
            <ScreenStack.Screen name="Home" component={HomeScreen}/>
            <ScreenStack.Screen name="Start" component={StartScreen}/>
            <ScreenStack.Screen name="Register" component={RegisterScreen}/>
            <ScreenStack.Screen name="Login" component={LoginScreen}/>
        </ScreenStack.Navigator>
      </NavigationContainer>
  );
}
