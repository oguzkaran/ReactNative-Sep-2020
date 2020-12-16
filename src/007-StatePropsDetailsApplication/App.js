import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MyComponent} from './MyComponent.js';
import {YourComponent} from './YourComponent.js';
import {TheirComponent} from './TheirComponent.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>C ve Sistem Programcıları Derneği</Text>
      <Text>SAYAÇ</Text>
      <MyComponent/>
      <YourComponent message="Sayaç" order="1"/>
      <YourComponent message="Sayaç->" order="2"/>
      <YourComponent message="Counter" order="3"/>
      <Text>CSD</Text>
      <TheirComponent message="count" order="4"/>
      <StatusBar style="auto" />
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
