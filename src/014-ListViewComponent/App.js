import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MainComponent} from './MainComponent.js';

export default function App() {
  return (
    <View style={styles.container}>
      <MainComponent/>      
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
