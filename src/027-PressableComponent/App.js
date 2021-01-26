import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
    const [pressText, setPressText] = useState("")
    const [count, setCount] = useState(0)

    const onPressablePressIn = () => setPressText("Press In")

    const onPressableLongPress = () => {
        setPressText("Long Press:")
        setCount(count + 1)
    }

    const onPressablePressOut = () => setPressText("Press Out")

    const onPressablePress = () => {
        setPressText("Press:")
        setCount(count + 1)
    }

      return (
        <View style={styles.container}>
            <Pressable
                    onPressIn={onPressablePressIn}
                    onLongPress={onPressableLongPress}
                    onPressOut={onPressablePressOut}
                    onPress={onPressablePress}
                    >
                <Text>{pressText}:{count}</Text>
            </Pressable>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
