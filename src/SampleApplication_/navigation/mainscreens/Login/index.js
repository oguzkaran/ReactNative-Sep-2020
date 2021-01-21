import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput} from 'react-native';

const LoginScreen = ({route, navigation}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const nextScreen = route.params.nextScreen

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <TextInput
                style={{width: 200}}
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder="Kullanıcı adı"/>
            <TextInput
                style={{width: 200}}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Kullanıcı adı"/>
            <TouchableOpacity
                style={{width: 200, backgroundColor: 'gray'}}
                onPress={() => navigation.navigate(nextScreen)}>
                <Text style={{textAlign:'center'}}>Tamam</Text>
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

export default LoginScreen
