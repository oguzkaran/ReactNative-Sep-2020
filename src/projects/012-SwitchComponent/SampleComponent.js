import React, {useState} from 'react';
import { StyleSheet, Text, Switch } from 'react-native';

const SampleComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false)
    const [statusText, setStatusText] = useState("")

    const toggleSwitch = () =>  {
        setIsEnabled(!isEnabled)
        setStatusText(isEnabled ? "Kapalı" : "Açık")
    }

    return (
        <>
            <Text>{statusText}</Text>
            <Switch value={isEnabled} onValueChange={toggleSwitch}/>
        </>
    )
}


export {SampleComponent}
