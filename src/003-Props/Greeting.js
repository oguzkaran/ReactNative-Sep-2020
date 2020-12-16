import React from 'react';
import { Text, View } from 'react-native';

const Greeting = props => {  
  return (
      <View>
        <Text>Merhaba ben {props.name}. {props.place} doğdum</Text>
      </View>
  )
}

export default Greeting
