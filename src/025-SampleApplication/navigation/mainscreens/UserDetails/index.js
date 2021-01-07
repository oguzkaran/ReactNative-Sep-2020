import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import {ExceptionUtil} from "../../../util/ExceptionUtil.js"
import {mobileAppService} from '../../../global/global.js'
import {UserInfo} from "../../../entity/UserInfo.js"
import {buttonDeleteAllUsersText, buttonListUsersText} from '../../../resource/Resource.js'
import {alertUnexpectedStateText, alertNoSuchUserText} from '../../../resource/Resource.js'

const UserDetailsScreen = ({route, navigation}) => {
    const getUserById = () => {
        const ui = mobileAppService.getUserById(route.params.userId)

        //Bu kısım daha sonra eklenecek

        return ui
    }

    const {id, username, name, email, registerDate, lastUpdate} = getUserById()

    const onGoBackButtonPressed = () => navigation.goBack()
    const onGoStartButtonPressed = () => navigation.navigate('Start')

    return (
        <View style={styles.container}>
            <Text>Kullanıcı Detayları</Text>
            <Text>{id}</Text>
            <Text>{username}</Text>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{registerDate.toString()}</Text>
            <Text>{lastUpdate.toString()}</Text>
            <TouchableOpacity onPress={onGoBackButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'gray'}}>
                <Text style={{textAlign: 'center'}}>Geriye Dön</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onGoStartButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'gray'}}>
                <Text style={{textAlign: 'center'}}>Başlangıca dön</Text>
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

export default UserDetailsScreen
