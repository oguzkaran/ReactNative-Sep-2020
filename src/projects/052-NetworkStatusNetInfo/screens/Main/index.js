import React, {Component, useState, useEffect} from 'react';
import {Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo'

const connectionMap = {
    none: 'Disconnected',
    unknown: 'Disconnected',
    wifi: 'Connected',
    cellular: 'Connected',
    mobile: 'Connected'
}

const MainScreen = props => {
    const [connected, setConnected] = useState("Connect")
    const [type, setType] = useState("")
    const useEffectCallback = () => {
        const networkChangeCallback = connection => {setConnected(connectionMap[connection.type]); setType(connection.type)}
        const unsubscribe = NetInfo.addEventListener(networkChangeCallback)
        return () => unsubscribe()
    }

    useEffect(useEffectCallback, [])

    return (
        <>
            <Text>Network Status:{connected}</Text>
            <Text>Network Type:{type}</Text>
        </>
    )
}


export default MainScreen
