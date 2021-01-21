import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../Login'
import ListScreen from '../List'
import UserDetailsScreen from '../UserDetails'

const ListStartStack = createStackNavigator()

const ListStartScreen = () => {
    return (
      <ListStartStack.Navigator>
        <ListStartStack.Screen name="Login" component={LoginScreen} initialParams={{nextScreen: "List"}}/>
        <ListStartStack.Screen name="List" component={ListScreen}/>
        <ListStartStack.Screen name="UserDetails" component={UserDetailsScreen}/>
      </ListStartStack.Navigator>
    );
}

export default ListStartScreen
