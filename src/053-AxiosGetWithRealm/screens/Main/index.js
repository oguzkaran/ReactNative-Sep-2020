import React, {Component, useState, useEffect} from 'react';
import {TouchableOpacity, Image, TextInput, Text} from 'react-native';

import Realm from 'realm'
import axios from 'axios'
import NetInfo from '@react-native-community/netinfo'

const url = "https://randomuser.me/api/"

const MainScreen = props => {

    const realm = new Realm({
        schema: [
            {
                name: 'User',
                properties: {
                    firstName: 'string',
                    lastName: 'string'
                }
            }
        ]
    })

    const [users, setUsers] = useState(realm.objects('User'))
    const [connected, setConnected] = useState(false)

    useEffect(() => {
        const networkChangeCallback = connection => setConnected(connection.type != 'none' && connection.type != 'unknown')
        const unsubscribe = NetInfo.addEventListener(networkChangeCallback)
        return () => unsubscribe()
    })

    const addUserCallback = name => {
        try {
            realm.create('User', {
                firstName: name.first,
                lastName: name.last
            })
            setUsers(realm.objects('User'))
        }
        catch (e) {
            alert('addUserCallback' +  e.message)
        }
    }

    const deleteAllUserCallback = ()  => {
        try {
            realm.deleteAll()
            setUsers(realm.objects('User'))
        }
        catch (e) {
            alert('addUserCallback' +  e.message)
        }
    }

    const onFetchButtonPressed =  async () =>  {
        try {
            if (!connected) {
                alert('Disconnected')
                return
            }
            const response = await axios.get(url)

            const name = response.data.results[0].name

            realm.write(() => addUserCallback(name))
        }
        catch (e) {
            alert(e.message)
        }
    }

    const onDeleteAllButtonPressed =  async () =>  {
        try {
            realm.write(() => deleteAllUserCallback())
        }
        catch (e) {
            alert(e.message)
        }
    }

    return (
        <>
            <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 40}}
                onPress={onFetchButtonPressed}
            >
                <Text>Fetch</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', height: 40}}
                onPress={onDeleteAllButtonPressed}
            >
                <Text>Delete All</Text>
            </TouchableOpacity>

            {
                users.map((user, index) => (<Text key={index}>{user.firstName} {user.lastName}</Text>))
            }
        </>
    )
}


export default MainScreen
