import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';

const SampleComponent = props => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [fullname, setFullname] = useState("")
    const [isUpdated, setIsUpdated] = useState(false)

    const showAlert = () => {
        Alert.alert("Uyarı", "Daha önce işlem yapmadınız. Emin misiniz?",
            [
                {
                    text: "İptal",
                    onPress: () => {}
                },
                {
                    text: "Hayır",
                    onPress: () => {}
                },
                {
                    text: "Evet",
                    onPress: () => clearViews()
                }
            ]
        )
    }

    const clearViews = () => {setName(""); setSurname(""); setFullname("")}

    const onOKButtonPressed = () => {
        setFullname(name + " " + surname)
        setIsUpdated(false)
    }

    const onClearButtonPressed = () => {
        if (isUpdated)
            showAlert()
        else
            clearViews()
    }

    const onNameChangeText = text => {setIsUpdated(true); setName(text)}
    const onSurnameChangeText = text => {setIsUpdated(true); setSurname(text)}

    return (
        <View>
            <TextInput value={name} onChangeText={onNameChangeText}  placeholder="name"/>
            <TextInput value={surname} onChangeText={onSurnameChangeText}  placeholder="surname"/>
            <Text>{fullname}</Text>
            <TouchableOpacity onPress={onOKButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center'}}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClearButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center'}}>Clear</Text>
            </TouchableOpacity>
        </View>
    )
}

export {SampleComponent}
