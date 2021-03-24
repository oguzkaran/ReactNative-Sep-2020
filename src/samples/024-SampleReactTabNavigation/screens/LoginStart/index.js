import React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import StartScreen from '../Start'
import HomeScreen from '../Home'
import RegisterScreen from '../Register'
import LoginScreen from '../Login'

const ScreenStack = createStackNavigator()

const LoginStackNavigation = ({navigation}) => {
    return (
      <ScreenStack.Navigator initialRouteName="Start"
          screenOptions={
              {
                  headerStyle: {
                      backgroundColor: '#F4511F'
                  }
              }
          }
      >
          <ScreenStack.Screen name="Start" component={StartScreen}
              options= {{title: "Start Screen"}}/>
          <ScreenStack.Screen name="Home" component={HomeScreen}
              options={({route}) => ({title: route.params.homeTitle})}/>
          <ScreenStack.Screen name="Register" component={RegisterScreen}
              options={
                  {
                      title : "Register Screen",
                      headerStyle: {backgroundColor : '#F56765'},
                      fontWeight: 'bold'
                  }
              }
          />
          <ScreenStack.Screen name="Login" component={LoginScreen}
              options= {{title : "Login Screen"}}/>
      </ScreenStack.Navigator>

    )
}


const LoginStartScreen = ({navigation}) => {
    return (
      <LoginStackNavigation/>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginStartScreen
