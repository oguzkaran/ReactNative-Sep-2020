import React, {useState} from 'react';
import { Text, Button, TextInput } from 'react-native';


const EnableDisableComponent = () => {
    const [isDisabled, setDisabled] = useState(true)
    const [buttonTextValue, setButtonTextValue] = useState("Enable/Disable")
    const [message, setMessage] = useState("")
    const [textValue, setTextValue] = useState("No message yet")

    return (
        <>
            <TextInput value={message} onChangeText={text => setMessage(text)} placeholder="Input a text"/>
            <Text>
                {textValue}
            </Text>
            <Button title="OK" color="red" onPress={() => setTextValue(message)} disabled={isDisabled}/>
            <Button title="Enable" color="gray" onPress={() => setDisabled(false)} disabled={!isDisabled}/>
            <Button title="Disable" color="gray" onPress={() => setDisabled(true)} disabled={isDisabled}/>
        </>
    )
}


export {EnableDisableComponent}
