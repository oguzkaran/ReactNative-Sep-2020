import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../Login'
import SearchScreen from '../Search'
import UserDetailsScreen from '../UserDetails'

const SearchStartStack = createStackNavigator()

const SearchStartScreen = () => {
    return (
      <SearchStartStack.Navigator>
        <SearchStartStack.Screen name="Login" component={LoginScreen} initialParams={{nextScreen: "Search"}}/>
        <SearchStartStack.Screen name="Search" component={SearchScreen}/>
        <SearchStartStack.Screen name="UserDetails" component={UserDetailsScreen}/>
      </SearchStartStack.Navigator>
    );
}

export default SearchStartScreen
