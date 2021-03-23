import React from 'react';
import {View} from 'react-native';
import {RandomSensorGenerator} from "./RandomSensorGenerator.js"

const RandomSensors = () => {
    return (
      <View>
          <RandomSensorGenerator/>
          <RandomSensorGenerator/>
          <RandomSensorGenerator/>
      </View>
    )
}

export default RandomSensors
