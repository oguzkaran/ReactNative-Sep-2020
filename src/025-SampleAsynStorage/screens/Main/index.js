import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {
    const messageKey = "message"
    const [messageInputText, setMessageInputText] = useState("")
    const [messageOutputText, setMessageOutputText] = useState("")
    const onMessageChangeText = text => setMessageInputText(text)
    const onSaveButtonPressed = async () => await saveMessage(messageInputText)
    const onGetMessageButtonPressed = async () => setMessageOutputText(await retrieveMessage())

    const saveMessage = async () => {
        try {
            await AsyncStorage.setItem(messageKey, messageInputText)
            alert("Mesaj kaydedildi")
        }
        catch (error) {
            alert(error.message)
        }
    }

    const retrieveMessage = async () => {
        try {
            const message = await AsyncStorage.getItem(messageKey)
            return message
        }
        catch (error) {
            alert(error.message)
        }
    }



    return (
        <View style={styles.container}>
            <TextInput
                value={messageInputText}
                style={{width: 200}}
                onChangeText={onMessageChangeText}
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
