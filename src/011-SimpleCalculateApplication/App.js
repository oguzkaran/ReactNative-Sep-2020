import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {SimpleCalculateComponent} from './SimpleCalculateComponent.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>C ve Sistem Programcıları Derneği</Text>
      <SimpleCalculateComponent/>
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
