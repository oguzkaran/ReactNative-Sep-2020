import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginStartScreen from './screens/LoginStart'
import ChatScreen from './screens/Chat'
import ContactsScreen from './screens/Contacts'

const BottomTab = createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions= {{
          activeTintColor: 'orange',
          inactiveTintColor: 'gray'
        }}
      >
        <BottomTab.Screen name="LoginStart" component={LoginStartScreen}/>
        <BottomTab.Screen name="Chat" component={ChatScreen}
          options={{tabBarBadge: 3}}/>
        <BottomTab.Screen name="Contacts" component={ContactsScreen}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
