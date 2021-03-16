import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

const AboutScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>C and System Programmers Association</Text>

      <Text>Version: 1.0.0</Text>
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

export default AboutScreen
