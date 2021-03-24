import React from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';

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
            <Text>Start Screen</Text>
            <Button
                title="Home Screen"
                onPress={() => navigation.navigate('Home')}>
            </Button>
        </View>
    )
}

export default StartScreen
