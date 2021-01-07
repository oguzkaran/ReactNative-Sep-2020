import React, {useState} from 'react';
import { StyleSheet, Button, View, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StartScreen = ({navigation}) => {
    const [value, onChangeText] = useState("")

    const getRandom = () => parseInt(Math.random() * 100)

    return (
        <View style={styles.container}>
            <Text>Start Screen</Text>
            <TextInput
                        value={value}
                        onChangeText={text => onChangeText(text)}
                        placeholder="Aktarılacak yazıyı giriniz"/>
            <Button
                title="Home Screen"
                onPress={() => navigation.navigate('Home',
                            {greetingText: value, number:getRandom(), homeTitle: "My Home Screen"})}>
            </Button>
        </View>
    )
}

export default StartScreen
