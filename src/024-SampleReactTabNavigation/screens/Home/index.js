import React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';

const HomeScreen = ({route, navigation}) => {
    const {greetingText, number} = route.params

    return (
        <View style={styles.container}>
            <Text>{greetingText}</Text>
            <Text>{number}</Text>
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
