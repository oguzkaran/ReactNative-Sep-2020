import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';

const SampleComponent = props => {
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [resultText, setResultText] = useState("")

    const showAlert = () => {
        Alert.alert(title, message,
            [
                {
                    text: "İptal",
                    onPress: () => setResultText("İptal")
                },
                {
                    text: "Hayır",
                    onPress: () => setResultText("Hayır")
                },
                {
                    text: "Evet",
                    onPress: () => setResultText("Evet")
                }
            ]
        )
    }

    const onOKButtonPressed = () => {
        showAlert()
        //...
    }

    const onTitleChangeText = text => setTitle(text)
    const onMessageChangeText = text => setMessage(text)

    return (
        <View>
            <TextInput value={title} onChangeText={onTitleChangeText}  placeholder="username"/>
            <TextInput value={message} onChangeText={onMessageChangeText}  placeholder="username"/>
            <Text>{resultText}</Text>
            <TouchableOpacity onPress={onOKButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center'}}>OK</Text>
            </TouchableOpacity>
        </View>
    )
}

export {SampleComponent}
