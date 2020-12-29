import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Greeting} from './Greeting.js'
import {GreetingComponent} from "./GreetingComponent.js"
import {VariableComponent} from "./VariableComponent.js"
import {RandomSensorGenerator} from "./RandomSensorGenerator.js"
import RandomSensors from "./RandomSensors.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Temel Kullanım</Text>
      <Greeting/>
      <GreetingComponent/>
      <VariableComponent/>
      <Text>Random Generated Sensors</Text>
      <RandomSensors/>
      <Text>Other generated sensors</Text>
      <RandomSensorGenerator/>
      <RandomSensorGenerator/>
      <RandomSensorGenerator/>
      <RandomSensorGenerator/>      
    </View>
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
