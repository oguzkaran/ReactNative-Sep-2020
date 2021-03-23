import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

const SampleComponent = props => {
    const [cities, setCities] = useState([])
    const [cityName, setCityName] = useState("")
    const [cityPlate, setCityPlate] = useState("")

    const setListView = ci => (
        <TouchableOpacity key={ci.plate} onPress={() => displayCityInfo(ci)}
            style={{width: 100, height:25}}>
            <Text style={{backgroundColor: 'green', textAlign: 'center'}}>{ci.name}</Text>
        </TouchableOpacity>
    )

    const displayCityInfo = ci => alert(`${ci.plate}, ${ci.name}`)

    const onCityNameChangeText = text => setCityName(text)
    const onCityPlateChangeText = text => setCityPlate(text)
    const onOkButtonPressed = () => {
        if (cities.findIndex(ci => ci.plate == cityPlate) == -1)
        //if (cities.find(ci => ci.plate == cityPlate) == undefined)
            setCities(cities.concat({plate: cityPlate, name: cityName}))
        else
            alert("Eklenen plakaya sahip şehir var")
    }

    return (
        <View>
            <TextInput value={cityPlate} onChangeText={onCityPlateChangeText }/>
            <TextInput value={cityName} onChangeText={onCityNameChangeText }/>
            {
                cities.map((ci, index) => setListView(ci))
            }
            <TouchableOpacity onPress={onOkButtonPressed}
                style={{width: 100, height:25, backgroundColor: 'red'}}>
                <Text style={{textAlign: 'center'}}>Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}


export {SampleComponent}
