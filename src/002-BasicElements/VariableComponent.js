import React from 'react';
import {Text} from 'react-native';

const VariableComponent = () => {
  const city = "Zonguldak'ta"
  const name = "Oğuz Karan"

  return (
    <Text>Merhaba ben {name}, {city} doğdum</Text>
  )
}


export {VariableComponent}
