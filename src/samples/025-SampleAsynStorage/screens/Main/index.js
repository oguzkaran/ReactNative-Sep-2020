import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {
    const personKeyPrefix = "@person:"
    const getKey = (prefix, suffix) => `${prefix}${suffix}`
    const [people, setPeople] = useState([])
    const [emailInputText, setEmailInputText] = useState("")
    const [nameInputText, setNameInputText] = useState("")
    const onNameChangeText = text => setNameInputText(text)
    const onEmailChangeText = text => setEmailInputText(text)
    const onSaveButtonPressed = async () => await savePerson()
    const onListButtonPressed = async () => setPeople(await retrievePeople())
    const onClearDataButtonPressed = async () => {setPeople([]); await AsyncStorage.clear()}

    const savePerson = async () => {
        try {
            const key = getKey(personKeyPrefix, emailInputText)
            const result = await AsyncStorage.getItem(key)

            if (result != null) {
                alert(`${emailInputText} email değeri mevcut`)
                return
            }

            await AsyncStorage.setItem(key, JSON.stringify({name: nameInputText, email: emailInputText}))

            alert("Mesaj kaydedildi")
        }
        catch (error) {
            alert(error.message)
        }
    }

    const retrievePeople = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys()

            if (keys.length == 0) {
                alert("Hiç veri eklenmemiş")
                return []
            }
            const peopleKeys = keys.filter(k => k.startsWith(personKeyPrefix))
            const peopleInfo = await AsyncStorage.multiGet(peopleKeys)

            return peopleInfo.map(pi => JSON.parse(pi[1]))
        }
        catch (error) {
            alert(error.message)
        }
    }

    const setPeopleList = p => (
        <TouchableOpacity
            key={p.email}
            onPress={() => {}}
            style={{width: 200, height: 30}}>
            <Text style={{textAlign: 'center', backgroundColor: 'green'}}>{p.name}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <TextInput
                value={emailInputText}
                style={{width: 200}}
                onChangeText={onEmailChangeText}
                placeholder="Email giriniz"/>
            <TextInput
                value={nameInputText}
                style={{width: 200}}
                onChangeText={onNameChangeText}
                placeholder="İsim giriniz"/>
            <TouchableOpacity
                style={{width: 200, backgroundColor: 'gray'}}
                onPress={onSaveButtonPressed}>
                <Text style={{textAlign: 'center'}}>Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{width: 200, backgroundColor: 'gray'}}
                onPress={onListButtonPressed}>
                <Text style={{textAlign: 'center'}}>Listele</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={{width: 200, backgroundColor: 'gray'}}
                    onPress={onClearDataButtonPressed}>
                    <Text style={{textAlign: 'center'}}>Tümünü Sil</Text>
            </TouchableOpacity>
            {
                people.map(p => setPeopleList(p))
            }
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
