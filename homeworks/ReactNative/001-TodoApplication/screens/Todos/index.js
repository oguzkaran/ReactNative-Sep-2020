import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

const TodosScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Todos Screen </Text>

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

export default TodosScreen
