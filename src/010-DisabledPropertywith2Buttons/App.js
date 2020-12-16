import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {EnableDisableComponent} from './EnableDisableComponent.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>C ve Sistem Programcıları Derneği</Text>
      <EnableDisableComponent/>
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
