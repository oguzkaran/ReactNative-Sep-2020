import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import StartScreen from '../mainscreens/Start'
import LoginScreen from '../mainscreens/Login'
import RegisterScreen from '../mainscreens/Register'
import ListScreen from '../mainscreens/List'
import UserDetailsScreen from '../mainscreens/UserDetails'
import SearchScreen from '../mainscreens/Search'

const ScreenStack = createStackNavigator()

const MainNavigation = () => {
    return (
        <NavigationContainer>
          <ScreenStack.Navigator>
            <ScreenStack.Screen name="Start" component={StartScreen}/>
            <ScreenStack.Screen name="Login" component={LoginScreen}/>
            <ScreenStack.Screen name="Register" component={RegisterScreen}/>
            <ScreenStack.Screen name="List" component={ListScreen}/>
            <ScreenStack.Screen name="UserDetails" component={UserDetailsScreen}/>
            <ScreenStack.Screen name="Search" component={SearchScreen}/>            
          </ScreenStack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation
