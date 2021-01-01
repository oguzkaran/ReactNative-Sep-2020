import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import StartScreen from '../mainscreens/Start'
import HomeScreen from '../mainscreens/Home'
import RegisterScreen from '../mainscreens/Register'
import LoginScreen from '../mainscreens/Login'

const ScreenStack = createStackNavigator()

const MainNavigation = () => {
    return (
        <NavigationContainer>
          <ScreenStack.Navigator>
            <ScreenStack.Screen name="Start" component={StartScreen}/>
            <ScreenStack.Screen name="Home" component={HomeScreen}/>
            <ScreenStack.Screen name="Register" component={RegisterScreen}/>
            <ScreenStack.Screen name="Login" component={LoginScreen}/>
          </ScreenStack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation
