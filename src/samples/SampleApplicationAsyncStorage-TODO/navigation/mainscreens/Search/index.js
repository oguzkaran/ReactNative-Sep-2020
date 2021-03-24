import React, {useState} from 'react';
import { StyleSheet, Button, View, Text, TextInput} from 'react-native';
import {mobileAppService} from '../../../global/global.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SearchScreen = ({navigation}) => {
    const [username, onUsernameChangeText] = useState("")
    const userId = mobileAppService.getUserIdByUsername(username)

    const onFindButtonPressed = () => {
        if (userId > 0)
            navigation.navigate('UserDetails', {userId: userId})
        else
            alert("Kullanıcı bulunamadı")
    }
    return (
        <View style={styles.container}>
            <Text>Kullanıcı Arama</Text>
            <TextInput
                        value={username}
                        onChangeText={text => onUsernameChangeText(text)}
                        placeholder="Aranacak kullanıcı ismini giriniz"/>
            <Button
                title="Bul"
                onPress={onFindButtonPressed}>
            </Button>
        </View>
    )
}

export default SearchScreen
