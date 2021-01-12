import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Person from '../../viewmodel/Person'

const MainScreen = () => {
    const personKey = "@person"
    const [nameInputText, setNameInputText] = useState("")
    const [emailInputText, setEmailInputText] = useState("")
    const [messageOutputText, setMessageOutputText] = useState("")
    const onNameChangeText = text => setNameInputText(text)
    const onEmailChangeText = text => setEmailInputText(text)
    const onSaveButtonPressed = async () => await saveMessage()
    const onGetMessageButtonPressed = async () => setMessageOutputText(await retrieveMessage())

    const saveMessage = async () => {
        try {
            await AsyncStorage.setItem(personKey, JSON.stringify({name: nameInputText, email: emailInputText}))

            // Dikkat örnekte aşağıdaki gibi çağrı _name ve _email olarak kaydedimesini sağlar
            //await AsyncStorage.setItem(personKey, JSON.stringify(new Person(nameInputText, emailInputText)))

            alert("Mesaj kaydedildi")
        }
        catch (error) {
            alert(error.message)
        }
    }

    const retrieveMessage = async () => {
        try {
            const person = JSON.parse(await AsyncStorage.getItem(personKey))

            return `${person.name}, ${person.email}`
        }
        catch (error) {
            alert(error.message)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={nameInputText}
                style={{width: 200}}
                onChangeText={onNameChangeText}
                placeholder="Mesajı giriniz"/>
            <TextInput
                    value={emailInputText}
                    style={{width: 200}}
                    onChangeText={onEmailChangeText}
                    placeholder="Mesajı giriniz"/>
            <TouchableOpacity
                style={{width: 200, backgroundColor: 'gray'}}
                onPress={onSaveButtonPressed}>
                <Text style={{textAlign: 'center'}}>Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{width: 200, backgroundColor: 'gray'}}
                onPress={onGetMessageButtonPressed}>
                <Text style={{textAlign: 'center'}}>Göster</Text>
            </TouchableOpacity>
            <Text>{messageOutputText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen
