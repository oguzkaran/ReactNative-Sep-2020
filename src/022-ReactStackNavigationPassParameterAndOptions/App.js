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
      </NavigationContainer>
  );
}
