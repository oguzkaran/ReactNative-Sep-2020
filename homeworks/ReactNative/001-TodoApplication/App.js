import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import StartScreen from './screens/Start'
import TabsMainScreen from './screens/Tabs'

const ScreenStack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <ScreenStack.Navigator
        screenOptions = {
          {
            headerStyle: {
              backgroundColor: '#F7E1C2'
            }
          }
        }>
        <ScreenStack.Screen name="TODO APP" component={StartScreen}/>
        <ScreenStack.Screen name="Login" component={LoginScreen}/>
        <ScreenStack.Screen name="Register" component={RegisterScreen}/>
        <ScreenStack.Screen name="TabsMainScreen" component={TabsMainScreen}
                            options={{title: "TODO APP"}}/>
      </ScreenStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
