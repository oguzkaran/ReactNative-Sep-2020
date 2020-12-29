import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import Greeting from './Greeting.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Oğuz Karan" place="Zonguldak'ta"/>
      <Greeting name="Kaan Aslan" place="Eskişehir'de"/>
      <Button title="Tamam" onPress={() => Alert.alert("Tamam basıldı")}/>
      <Image source={{uri : "https://i.ytimg.com/vi/YzrAHP0TovY/maxresdefault.jpg"}}
                  style={{width : 300, height : 300}}/>
      <Image source={{uri : "https://i.imgur.com/DEnuhHr.jpeg"}}
                  style={{width : 200,  height : 200}}/>      
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
