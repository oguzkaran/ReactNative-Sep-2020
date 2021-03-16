import React from 'react';
import { StyleSheet} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AddScreen from '../Add'
import TodosScreen from '../Todos'
import DetailsScreen from '../Details'
import AboutScreen from '../About'

const BottomTab = createBottomTabNavigator()

const TabsMainScreen = () => {
  return (
        <BottomTab.Navigator
            initialRouteName="Todos">
          <BottomTab.Screen name="Add" component={AddScreen}/>
          <BottomTab.Screen name="Todos" component={TodosScreen}/>
          <BottomTab.Screen name="Details" component={DetailsScreen}/>
          <BottomTab.Screen name="About" component={AboutScreen}/>
        </BottomTab.Navigator>
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


export default TabsMainScreen
