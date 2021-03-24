import React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';

const RegisterScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
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

export default RegisterScreen
