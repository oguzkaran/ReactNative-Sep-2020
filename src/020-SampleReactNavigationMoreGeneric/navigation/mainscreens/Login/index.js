import React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
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
