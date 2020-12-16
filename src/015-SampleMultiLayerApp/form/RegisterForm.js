import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

import {mobileAppService} from '../global/global.js'
import {UserInfo} from "../entity/UserInfo.js"

const RegisterForm = props => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const setListView = u => (
        <TouchableOpacity key={u.id} onPress={() => {}}
            style={{width: 100, height:25}}>
            <Text style={{backgroundColor: 'green', textAlign: 'center'}}>{u.username}</Text>
        </TouchableOpacity>
    )

    const onUsernameChangeText = text => setUsername(text)
    const onNameChangeText = text => setName(text)
    const onEmailChangeText = text => setEmail(text)
    const onSaveButtonPressed = () => {
        try {
            mobileAppService.saveUser(new UserInfo(0, username, name, email))
        }
        catch (ex) {
            alert(ex.message)
        }
    }
    const onListButtonPressed = () => {
        try {
            setUsers(mobileAppService.getAllUsers())
        }
        catch (ex) {
            alert("Geçersiz işlem")
        }
    }

    return (
        <View>
            <TextInput value={username} onChangeText={onUsernameChangeText }  placeholder="username"/>
            <TextInput value={name} onChangeText={onNameChangeText}  placeholder="name"/>
            <TextInput value={email} onChangeText={onEmailChangeText } placeholder="email"/>
            <TouchableOpacity onPress={onSaveButtonPressed}
                style={{width: 100, height:25, backgroundColor: 'red'}}>
                <Text style={{textAlign: 'center'}}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onListButtonPressed}
                style={{width: 100, height:25, backgroundColor: 'red'}}>
                <Text style={{textAlign: 'center'}}>List</Text>
            </TouchableOpacity>
            {
                users.map((u, index) => setListView(u))
            }

        </View>
    )
}


export {RegisterForm}
