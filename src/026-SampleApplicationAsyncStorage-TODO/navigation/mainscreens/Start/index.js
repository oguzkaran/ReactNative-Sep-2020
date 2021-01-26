import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StartScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{width: 200, height:25, backgroundColor: 'gray'}}
                onPress={() => navigation.navigate('Login')}>
                <Text style={{textAlign: 'center'}} >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{width: 200, height:25, backgroundColor: 'gray', textAlign: 'center'}}
                onPress={() => navigation.navigate('Register')}>
                <Text style={{textAlign: 'center'}}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{width: 200, height:25, backgroundColor: 'gray', textAlign: 'center'}}
                onPress={() => navigation.navigate('List')}>
                <Text style={{textAlign: 'center'}}>List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{width: 200, height:25, backgroundColor: 'gray', textAlign: 'center'}}
                onPress={() => navigation.navigate('Search')}>
                <Text style={{textAlign: 'center'}}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartScreen
