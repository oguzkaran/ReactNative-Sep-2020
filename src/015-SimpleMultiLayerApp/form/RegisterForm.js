import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch} from 'react-native';

import {mobileAppService} from '../global/global.js'
import {UserInfo} from "../entity/UserInfo.js"
import {ExceptionUtil} from "../util/ExceptionUtil.js"
import StringUtil from "../util/StringUtil.js"
import {alertEmptyFieldsText, alertSaveFailText, alertNoSuchUserText} from '../resource/Resource.js'
import {alertSaveSuccessText, alertUnexpectedStateText, alertInvalidOperationText} from '../resource/Resource.js'
import {buttonSaveUserText, buttonDeleteAllUsersText, buttonListUsersText} from '../resource/Resource.js'
import {placeholderUsernameText, placeholderNameText, placeholderSurnameText, placeholderEmailText} from '../resource/Resource.js'

const RegisterForm = props => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("oguzkaran")
    const [name, setName] = useState("oĞUZ")
    const [surname, setSurname] = useState("Karan")
    const [email, setEmail] = useState("oguzkaran@csystem.org")
    const [deleteSwitchEnabled, setDeleteSwitchEnabled] = useState(false)

    const onListViewTouchableOpacityPress = ui => {
        const action = ui => {
            alert(`[${ui.id}]${ui.name}-${ui.username}-${ui.lastUpdate.toString()}`)
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
        validationErrors = []
        setUsername(username.trim())

        if (username == "")
            validationErrors.push("username")

        setName(name.trim())

        if (name == "")
            validationErrors.push("name")

        setSurname(surname.trim())

        if (surname == "")
            validationErrors.push("surname")

        setEmail(email.trim())

        if (email == "")
            validationErrors.push("email")

        return validationErrors
    }

    const onUsernameChangeText = text => setUsername(text)
    const onNameChangeText = text => setName(text)
    const onSurnameChangeText = text => setSurname(text)
    const onEmailChangeText = text => setEmail(text)
    const onSaveButtonPressed = () => {
        const validationErrors = validate()
        let message = ""

        if (validationErrors.length != 0) {
            validationErrors.forEach(m => message += m + " ")
            alert(message + "alanları boş geçilemez")
            return
        }

        const action = () => {
            const fullname = name.capitalize() + " " + surname.toUpperCase()
            const user = mobileAppService.saveUser(new UserInfo(0, username, fullname, email))
            alert(user.id == 0 ? alertSaveFailText : alertSaveSuccessText)
        }

        ExceptionUtil.subscribe(action, ex => ex.message)
    }

    const onDeleteAllUsersButtonPressed = () => {
        const action = () =>  {
            mobileAppService.deleteAllUsers()
            setUsers(mobileAppService.getAllUsers())
            setDeleteSwitchEnabled(false)
        }
        ExceptionUtil.subscribe(action, () => alert(alertUnexpectedStateText))
    }

    const onListButtonPressed = () => {
        const action = () => {
            const allUsers = mobileAppService.getAllUsers()

            if (allUsers.length != 0)
                setUsers(allUsers)
            else
                alert(alertNoSuchUserText)
        }
        ExceptionUtil.subscribe(action, () => alert(alertInvalidOperationText))
    }

    return (
        <View>
            <TextInput value={username} onChangeText={onUsernameChangeText }  placeholder="username"/>
            <TextInput value={name} onChangeText={onNameChangeText}  placeholder="name"/>
            <TextInput value={surname} onChangeText={onSurnameChangeText}  placeholder="surname"/>
            <TextInput value={email} onChangeText={onEmailChangeText } placeholder="email"/>
            <TouchableOpacity onPress={onSaveButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center'}}>{buttonSaveUserText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDeleteAllUsersButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'red'}} disabled={!deleteSwitchEnabled}>
                <Text style={{textAlign: 'center'}}>{buttonDeleteAllUsersText}</Text>
            </TouchableOpacity>
            <Switch
                onValueChange={() => setDeleteSwitchEnabled(!deleteSwitchEnabled)}
                value={deleteSwitchEnabled} />
            <TouchableOpacity onPress={onListButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'gray'}}>
                <Text style={{textAlign: 'center'}}>{buttonListUsersText}</Text>
            </TouchableOpacity>
            {
                users.map((u, index) => setListView(u))
            }

        </View>
    )
}


export {RegisterForm}
