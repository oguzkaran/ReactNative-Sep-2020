import React, {useState} from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Pressable } from 'react-native';

export default function App() {
    const [animating, setAnimating] = useState(false)

    const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout))
    const onTryPressableLongPress = () => setAnimating(true)
    const onTryPressablePressOut = () => setAnimating(false)
    const onOKPressablePress = async () => {
        setAnimating(true)
        await wait(2000)
        setAnimating(false)
    }
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={animating} size="large" color="#FF0000"/>
            <ActivityIndicator animating={animating} size="small" color="#00FF00"/>
            <ActivityIndicator animating={animating} size="large" color="#0000FF"/>
            <Pressable
                    onLongPress={onTryPressableLongPress}
                    onPressOut={onTryPressablePressOut}
            >
                <Text>Try</Text>
            </Pressable>

            <Pressable onPress={onOKPressablePress}>
                <Text>OK</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
