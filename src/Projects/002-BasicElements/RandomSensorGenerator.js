/*
  Sınıf Çalışması: İsimlerden oluşan bir dizi içerisinden ve belirli bir aralıktan
  rasgele isim ve sayı üreten ve bunları örneğin
    Test sensoründen 45 birim ölçülmüştür
  biçiminde bir Text gösteren bileşeni yazınız. Burada Test ve 45 değerleri rasgele
  belirlenecektir
*/

import React from 'react';
import {Text} from 'react-native';
import {randomInt} from './randomutil.js'

const sensorNames = ["Test", "Weather", "Humudity", "Mest"]

class SensorInfo {
  constructor(name, value)
  {
    this._name = name
    this._value = value
  }

  get name()
  {
    return this._name
  }

  get value()
  {
    return this._value
  }
}

const getSensor = () => new SensorInfo(sensorNames[randomInt(0, sensorNames.length)], randomInt(-10, 10))


const RandomSensorGenerator = () => {
    const sensorInfo = getSensor()

    return (
      <Text>{sensorInfo.name} sensoründen {sensorInfo.value} birim ölçülmüştür</Text>
    )
}

export {RandomSensorGenerator}
