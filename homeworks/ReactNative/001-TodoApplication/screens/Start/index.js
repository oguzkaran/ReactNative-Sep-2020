import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{width: 200, height: 30, borderWidth: 1, backgroundColor: '#003399', justifyContent: 'center'}}
                        onPress={() => navigation.navigate('Login')}>
        <Text style={{textAlign: 'center', color:'white'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width: 200, height: 30, borderWidth: 1, backgroundColor: '#003399', justifyContent: 'center'}}
                        onPress={() => navigation.navigate('Register')}>
        <Text style={{textAlign: 'center', color:'white'}}>Register</Text>
      </TouchableOpacity>

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

export default StartScreen
