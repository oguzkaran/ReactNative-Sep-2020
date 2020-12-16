import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Counter} from './Counter.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CSD</Text>
      <Counter incName="Artır" decName="Azalt" clrName="Temizle" initVal="1"/>
      <Text>Counter2</Text>
      <Counter/>
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
