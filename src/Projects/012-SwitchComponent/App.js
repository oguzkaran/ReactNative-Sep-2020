import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {SampleComponent} from './SampleComponent.js'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>C ve Sistem Programcıları Derneği</Text>
      <SampleComponent/>      
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
