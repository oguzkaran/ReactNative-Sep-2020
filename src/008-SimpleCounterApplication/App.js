import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {CounterComponent} from './CounterComponent.js';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterComponent text="Sayaç"/>      
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
