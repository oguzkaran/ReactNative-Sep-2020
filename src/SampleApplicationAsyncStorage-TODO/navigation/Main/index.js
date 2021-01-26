import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import RegisterScreen from '../mainscreens/Register'
import ListStartScreen from '../mainscreens/ListStart'
import SearchStartScreen from '../mainscreens/SearchStart'

const Tab = createBottomTabNavigator()

const MainNavigation = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Register" component={RegisterScreen}/>
        <Tab.Screen name="ListStart" component={ListStartScreen}/>
        <Tab.Screen name="SearchStart" component={SearchStartScreen}/>
      </Tab.Navigator>
    );
}

export default MainNavigation
