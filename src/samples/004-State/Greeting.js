import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Greeting = props => {
  const [isOlder, setOlder] = useState(true)

  return (
      <View>
        <Text> Merhaba ben {props.name}. Ben {isOlder ? "yaşlıyım" : "gencim"}</Text>
        <Button title={isOlder ? "Genç" : "Yaşlı"} onPress={() => setOlder(!isOlder)}/>
      </View>
  )
}

const GreetingComponent = () => {
  return (
    <>
      <Greeting name="Oğuz Karan"/>
      <Greeting name="Kaan Aslan"/>
    </>
  )
}

export {GreetingComponent}
