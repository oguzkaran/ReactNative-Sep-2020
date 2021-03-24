import React, {useState} from 'react';
import { Text, Button, TextInput } from 'react-native';


const EnableDisableComponent = () => {
    const [isDisabled, setDisabled] = useState(true)
    const [buttonTextValue, setButtonTextValue] = useState("Enable/Disable")
    const [message, setMessage] = useState("")
    const [textValue, setTextValue] = useState("No message yet")

    return (
        <>
            <TextInput value={buttonTextValue} onChangeText={text => setButtonTextValue(text)} placeholder="Input the button text"/>
            <TextInput value={message} onChangeText={text => setMessage(text)} placeholder="Input a text"/>
            <Text>
                {textValue}
            </Text>
            <Button title="RED" color="red" onPress={() => setTextValue(message)} disabled={isDisabled}/>
            <Button title="GREEN" color="green" onPress={() => setTextValue(message.toUpperCase())} disabled={isDisabled}/>
            <Button title="BLUE" color="blue" onPress={() => setTextValue(message.toLowerCase())}/>
            <Button title={buttonTextValue} color="gray" onPress={() => setDisabled(!isDisabled)}/>
        </>
    )
}


export {EnableDisableComponent}
