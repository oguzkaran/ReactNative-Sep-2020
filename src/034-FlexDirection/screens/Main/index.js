import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize:20,
    }
})

class MainScreen extends Component {
    constructor()
    {
      super()
    }

    render()
    {
        return (
            <>
                <View style={{flex: 3, flexDirection: 'column-reverse', backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput placeholder="Input your text"></TextInput>
                    <Text>C ve Sistem Programcıları Derneği</Text>
                </View>
                <View style={{flex: 3, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput placeholder="Input your text"></TextInput>
                    <Text>C ve Sistem Programcıları Derneği</Text>
                </View>
                <View style={{flex: 2, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput placeholder="Input your text" style={styles.text}></TextInput>
                    <Text>CSD</Text>
                </View>
                <View style={{flex: 3, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput placeholder="Input your text" style={styles.text}></TextInput>
                    <Text>C ve Sistem Programcıları Derneği</Text>
                </View>
            </>
        )
    }
}

export default MainScreen
