import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50
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
            <View style={styles.container}>
                <View style={{width: 40, height: 40, backgroundColor: 'skyblue'}}/>
                <View style={{width: 100, height: 100, backgroundColor: 'blue'}}/>
                <View style={{width: 200, height: 200, backgroundColor: 'red'}}/>
                <View style={{width: 100, height: 100, backgroundColor: 'blue'}}/>
                <View style={{width: 40, height: 40, backgroundColor: 'skyblue'}}/>
            </View>
        )
    }
}

export default MainScreen
