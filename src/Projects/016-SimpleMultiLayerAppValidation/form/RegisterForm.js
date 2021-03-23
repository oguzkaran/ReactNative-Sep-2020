import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch} from 'react-native';

import {mobileAppService} from '../global/global.js'
import {UserInfo} from "../entity/UserInfo.js"
import {ExceptionUtil} from "../util/ExceptionUtil.js"
import StringUtil from "../util/StringUtil.js"
import {alertEmptyFieldsText, alertSaveFailText, alertNoSuchUserText} from '../resource/Resource.js'
import {alertSaveSuccessText, alertUnexpectedStateText, alertInvalidOperationText} from '../resource/Resource.js'
import {buttonSaveUserText, buttonDeleteAllUsersText, buttonListUsersText} from '../resource/Resource.js'
import {placeholderUsernameText, placeholderNameText, placeholderEmailText} from '../resource/Resource.js'

const RegisterForm = props => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [deleteSwitchEnabled, setDeleteSwitchEnabled] = useState(false)
    const [usernameValidationInfo, setUsernameValidationInfo] = useState({borderColor:'gray', borderWidth:1})
    const [nameValidationInfo, setNameValidationInfo] = useState({borderColor:'gray', borderWidth:0})
    const [emailValidationInfo, setEmailValidationInfo] = useState({borderColor:'gray', borderWidth:0})

    const onListViewTouchableOpacityPress = ui => {
        const action = ui => {
            alert(`[${ui.id}]${ui.name}-${ui.username}-${ui.lastUpdate.toString()}`)
            mobileAppService.updateUserDate(ui)
        }
        ExceptionUtil.subscribe(() => action(ui), ex => alert(ex.message))
    }

    const setListView = ui => (
        <TouchableOpacity key={ui.id} onPress={() => {onListViewTouchableOpacityPress(ui)}}
            style={{width: 200, height:25}}>
            <Text style={{backgroundColor: 'green', textAlign: 'center'}}>{ui.username}</Text>
        </TouchableOpacity>
    )

    const validate = () => {
        let count = 0
        setUsername(username.trim())

        if (username == "") {
            ++count
            setUsernameValidationInfo({borderColor:'red', borderWidth:1})
        }

        setName(name.trim())

        if (name == "") {
            ++count
            setNameValidationInfo({borderColor:'red', borderWidth:0.5})
        }

        setEmail(email.trim())

        if (email == ""){
            ++count
            setEmailValidationInfo({borderColor:'red', borderWidth:0.5})
        }

        return count
    }

    const setTextInputsDefault = () => {
        setUsernameValidationInfo({borderColor:'gray', borderWidth:1})
        setNameValidationInfo({borderColor:'gray', borderWidth:0})
        setEmailValidationInfo({borderColor:'gray', borderWidth:0})
    }

    const onUsernameChangeText = text => setUsername(text)
    const onNameChangeText = text => setName(text)
    const onEmailChangeText = text => setEmail(text)
    const onSaveButtonPressed = () => {
        setTextInputsDefault()
        const count = validate()
        let message = ""

        if (count > 0) {
            alert(count + " tane alanı boş geçmişsiniz")
            return
        }

        const action = () => {
            const user = mobileAppService.saveUser(new UserInfo(0, username, name, email))

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
            <TextInput value={username} style={{borderColor: usernameValidationInfo.borderColor, borderWidth: usernameValidationInfo.borderWidth}}
                onChangeText={onUsernameChangeText }  placeholder="username"/>
            <TextInput value={name} style={{borderColor: nameValidationInfo.borderColor, borderWidth: nameValidationInfo.borderWidth}}
                onChangeText={onNameChangeText}  placeholder="name"/>
            <TextInput value={email} style={{borderColor: emailValidationInfo.borderColor, borderWidth: emailValidationInfo.borderWidth}}
                onChangeText={onEmailChangeText } placeholder="email"/>
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
