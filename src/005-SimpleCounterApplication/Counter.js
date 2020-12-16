import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function getExactValue(a)
{
  return a == undefined ? 0 : parseInt(a);
}

const Counter = props => {
  const [counter, setCounter] = useState(getExactValue(props.initVal))

  return (
    <View>
      <Text>{counter}</Text>
      <Button title={props.incName ? props.incName : "Increment"} onPress={() => setCounter(counter + 1)}/>
      <Button title={props.decName ? props.decName : "Decrement"} onPress={() => setCounter(counter - 1)}/>
      <Button title={props.clrName ? props.clrName : "Clear"} onPress={() => setCounter(getExactValue(props.initVal))}/>
    </View>
  )
}

export {Counter}
