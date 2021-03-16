import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import TabsMainScreen from '../Tabs'

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const okButtonClicked = () => {
    navigation.navigate('TabsMainScreen')
  }

  return (
    <View style={styles.container}>
      <TextInput style={{width: 200, height: 30, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
                 value={username}
                 placeholder="Username"
                 textValueChange={text => setUsername(text)}/>

      <TextInput style={{width: 200, height: 30, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
                value={password}
                placeholder="Password"
                textValueChange={text => setPassword(text)}/>


      <TouchableOpacity style={{width: 200, height: 30, backgroundColor: '#003399', justifyContent: 'center'}}
                        onPress={okButtonClicked}>
        <Text style={{textAlign: 'center', color: 'white'}}>OK</Text>
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
