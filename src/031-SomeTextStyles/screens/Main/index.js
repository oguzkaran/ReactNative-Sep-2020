import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
    container: {
        marginTop: 300
    },
    largeBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 25
    },

    blue: {
        color: 'blue',
    },

    red: {
        color: 'red',
    },

})



class MainScreen extends Component {
    constructor()
    {
      super()
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.largeBlue}>C ve Sistem Programcıları Derneği</Text>
                <Text style={styles.blue}>C ve Sistem Programcıları Derneği</Text>
                <Text style={styles.red}>C ve Sistem Programcıları Derneği</Text>
            </View>
        )
    }

}




export default MainScreen
