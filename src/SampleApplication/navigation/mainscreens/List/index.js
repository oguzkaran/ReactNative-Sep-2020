import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch} from 'react-native';

import {ExceptionUtil} from "../../../util/ExceptionUtil.js"
import {mobileAppService} from '../../../global/global.js'
import {buttonDeleteAllUsersText, buttonListUsersText} from '../../../resource/Resource.js'
import {alertInvalidOperationText, alertUnexpectedStateText, alertNoSuchUserText} from '../../../resource/Resource.js'

const ListScreen = ({navigation}) => {
    const [users, setUsers] = useState([])
    const [deleteSwitchEnabled, setDeleteSwitchEnabled] = useState(false)

    const onListViewTouchableOpacityPress = ui => {
        const action = ui => {
            mobileAppService.updateUserDate(ui)
            navigation.navigate("UserDetails", {userId: ui.id})
        }
        ExceptionUtil.subscribe(() => action(ui), ex => alert(ex.message))
    }

    const setListView = ui => (
        <TouchableOpacity key={ui.id} onPress={() => {onListViewTouchableOpacityPress(ui)}}
            style={{width: 200, height:25}}>
            <Text style={{backgroundColor: 'green', textAlign: 'center'}}>{ui.username}</Text>
        </TouchableOpacity>
    )

    const onDeleteAllUsersButtonPressed = () => {
        const action = () =>  {
            mobileAppService.deleteAllUsers()
            setUsers(mobileAppService.getAllUsers())
            setDeleteSwitchEnabled(false)
        }
        ExceptionUtil.subscribe(action, () => alert(alertUnexpectedStateText))
    }

    const onListButtonPressed = async () => {
        const action = async () => {
            const allUsers = await mobileAppService.getAllUsers()
            
            if (allUsers.length != 0)
                setUsers(allUsers)
            else
                alert(alertNoSuchUserText)
        }
        ExceptionUtil.subscribe(action, () => alert(alertInvalidOperationText))
    }
    return (
        <View style={styles.container}>
            <Text>List Screen</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListScreen
