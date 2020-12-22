import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

import {mobileAppService} from '../global/global.js'
import {UserInfo} from "../entity/UserInfo.js"
import {ExceptionUtil} from "../util/ExceptionUtil.js"

const RegisterForm = props => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("oguzkaran")
    const [name, setName] = useState("Oğuz Karan")
    const [email, setEmail] = useState("oguzkaran@csystem.org")

    const onListViewTouchableOpacityPress = ui => {
        const action = ui => {
            alert(`[${ui.id}]${ui.username}-${ui.lastUpdate.toString()}`)
            mobileAppService.updateUserDate(ui)
        }
        ExceptionUtil.subscribe(() => action(ui), ex => alert(ex.message))
    }

    const setListView = ui => (
        <TouchableOpacity key={ui.id} onPress={() => {onListViewTouchableOpacityPress(ui)}}
            style={{width: 100, height:25}}>
            <Text style={{backgroundColor: 'green', textAlign: 'center'}}>{ui.username}</Text>
        </TouchableOpacity>
    )

    const validate = () => {
        setUsername(username.trim())

        if (username == "")
            return false

        setEmail(email.trim())

        if (email == "")
            return false

        setName(name.trim())

        if (name == "")
            return false

        return true
    }

    const onUsernameChangeText = text => setUsername(text)
    const onNameChangeText = text => setName(text)
    const onEmailChangeText = text => setEmail(text)
    const onSaveButtonPressed = () => {
        if (!validate()) {
            alert("Alanlar boş geçilemez")
            return
        }

        const action = () => {
            const user = mobileAppService.saveUser(new UserInfo(0, username, name, email))
            alert(user.id == 0 ? "Eklenemedi" : "Kayıt başarıyla eklendi")
        }

        ExceptionUtil.subscribe(action, ex => ex.message)
    }

    const onDeleteAllUsersButtonPressed = () => {
        const action = () =>  {
            mobileAppService.deleteAllUsers()
            setUsers(mobileAppService.getAllUsers())
        }
        ExceptionUtil.subscribe(action, () => alert("Beklenmedik bir durum oluştu"))
    }

    const onListButtonPressed = () => {
        const action = () => setUsers(mobileAppService.getAllUsers())
        ExceptionUtil.subscribe(action, () => alert("Geçersiz işlem"))
    }

    return (
        <View>
            <TextInput value={username} onChangeText={onUsernameChangeText }  placeholder="username"/>
            <TextInput value={name} onChangeText={onNameChangeText}  placeholder="name"/>
            <TextInput value={email} onChangeText={onEmailChangeText } placeholder="email"/>
            <TouchableOpacity onPress={onSaveButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center'}}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDeleteAllUsersButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'red'}}>
                <Text style={{textAlign: 'center'}}>Delete All Users</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onListButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'gray'}}>
                <Text style={{textAlign: 'center'}}>List</Text>
            </TouchableOpacity>
            {
                users.map((u, index) => setListView(u))
            }

        </View>
    )
}


export {RegisterForm}
