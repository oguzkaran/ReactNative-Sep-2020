import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch} from 'react-native';

import {mobileAppService} from '../../../global/global.js'
import {UserInfo} from "../../../entity/UserInfo.js"
import {ExceptionUtil} from "../../../util/ExceptionUtil.js"
import StringUtil from "../../../util/StringUtil.js"
import {alertEmptyFieldsText, alertSaveFailText} from '../../../resource/Resource.js'
import {alertSaveSuccessText, alertInvalidOperationText} from '../../../resource/Resource.js'
import {buttonSaveUserText} from '../../../resource/Resource.js'
import {placeholderUsernameText, placeholderNameText, placeholderEmailText} from '../../../resource/Resource.js'

const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState("oguzkaran")
    const [name, setName] = useState("Oğuz Karan")
    const [email, setEmail] = useState("oguzkaran@csystem.org")
    const [usernameValidationInfo, setUsernameValidationInfo] = useState({borderColor:'gray', borderWidth:1})
    const [nameValidationInfo, setNameValidationInfo] = useState({borderColor:'gray', borderWidth:0})
    const [emailValidationInfo, setEmailValidationInfo] = useState({borderColor:'gray', borderWidth:0})

    const validate = () => {
        let count = 0
        setUsername(username.trim())

        if (username == "")
            ++count

        setName(name.trim())

        if (name == "")
            ++count

        setEmail(email.trim())

        if (email == "")
            ++count

        return count
    }

    const clearTextInputs = () => {
        setUsername("")
        setName("")
        setEmail("")
    }

    const onUsernameChangeText = text =>  {
        if (text.trim() == "")
            setUsernameValidationInfo({borderColor:'red', borderWidth:1})
        else
            setUsernameValidationInfo({borderColor:'gray', borderWidth:1})
        setUsername(text)
    }
    const onNameChangeText = text => {
        if (text.trim() == "")
            setNameValidationInfo({borderColor:'red', borderWidth:1})
        else
            setNameValidationInfo({borderColor:'gray', borderWidth:0})

        setName(text)
    }
    const onEmailChangeText = text =>  {
        if (text.trim() == "")
            setEmailValidationInfo({borderColor:'red', borderWidth:1})
        else
            setEmailValidationInfo({borderColor:'gray', borderWidth:0})
        setEmail(text)
    }
    const onSaveButtonPressed = async () => {
        const count = validate()
        let message = ""

        if (count > 0) {
            alert(count + " tane alanı boş geçmişsiniz")
            return
        }

        const action = async () => {
            const user = await mobileAppService.saveUser(new UserInfo(0, username, name, email))

            if (user.id != 0)
                clearTextInputs();

            alert(user.id == 0 ? alertSaveFailText : alertSaveSuccessText)
        }

        ExceptionUtil.subscribe(action, ex => ex.message)
    }

    return (
        <View style={styles.container}>
            <TextInput value={username} style={{width: 200, borderColor: usernameValidationInfo.borderColor, borderWidth: usernameValidationInfo.borderWidth}}
                onChangeText={onUsernameChangeText }  placeholder="username"/>
            <TextInput value={name} style={{width: 200, borderColor: nameValidationInfo.borderColor, borderWidth: nameValidationInfo.borderWidth}}
                onChangeText={onNameChangeText}  placeholder="name"/>
            <TextInput value={email} style={{width: 200, borderColor: emailValidationInfo.borderColor, borderWidth: emailValidationInfo.borderWidth}}
                onChangeText={onEmailChangeText } placeholder="email"/>
            <TouchableOpacity onPress={onSaveButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center'}}>{buttonSaveUserText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default RegisterScreen
