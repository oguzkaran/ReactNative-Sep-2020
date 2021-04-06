import React from 'react';
import {Text, ScrollView, ActivityIndicator, Switch, View, StyleSheet} from 'react-native';

export default MainScreen = () => {
    return (
        <>
            <ScrollView style={styles.scroll}>
                {
                    new Array(20).fill(null).map((v, i) => (
                        <View key={i}>
                            <Text>CSD</Text>
                            <ActivityIndicator size="large"/>
                            <Switch></Switch>
                        </View>
                    ))
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    scroll: {
        height: 1,
        alignSelf: 'stretch'
    },
});
