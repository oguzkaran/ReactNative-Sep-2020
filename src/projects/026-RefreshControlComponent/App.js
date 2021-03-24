import React, {useState} from 'react';
import { StyleSheet, Text, View, RefreshControl, ScrollView } from 'react-native';

export default function App() {
    const [refreshing, setRefresing] = useState(false)
    const [count, setCount] = useState(0)
    const wait = timeout => new Promise(resolve => {
        setTimeout(resolve, timeout)
    })

    const onRefresh = async () => {
        setRefresing(true)
        await wait(3000)
        setCount(count + 1)
        setRefresing(false)
    }
      return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                <Text>Tazelemek için aşağıya doğru çekiniz</Text>
                <Text>{count}</Text>
            </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
  }
});
