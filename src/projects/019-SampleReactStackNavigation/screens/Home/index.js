import React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Start Screen</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}>
            </Button>
            <Button
                title="Register"
                onPress={() => navigation.navigate('Register')}>
            </Button>
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

export default HomeScreen
