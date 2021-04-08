import React from 'react';
import PropTypes from 'prop-types';
import {Text, ScrollView, TouchableOpacity, StyleSheet, View} from 'react-native';

const SwipeableButton = ({onSwipe, name, onPress}) => {
    const onScroll = e => e.nativeEvent.contentOffset.x == 200 && onSwipe()

    const scrollProps = {
        horizontal: true,
        pagingEnabled: true,
        showHorizontalScrollIndicator: false,
        scrollEventThrottle: 10,
        onScroll
    }

    return (
        <View style={styles.swipe}>
            <ScrollView {...scrollProps}>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.swipeItem}>
                        <Text style={styles.swipeText}>{name}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.swipeEmpty}/>
            </ScrollView>
        </View>
    )
}

SwipeableButton.propTypes = {
    onSwipe: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    swipe: {
        flex: 1,
        flexDirection: 'row',
        width: 200,
        height: 25,
        marginTop: 45
    },

    swipeItem: {
        width: 200,
        height: 25,
        backgroundColor: 'azure',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'slategrey'
    },

    swipeText: {
        textAlign: 'center',
        color: 'slategrey'
    },

    swipeEmpty: {
        width: 200,
        height: 25,
    },
});


export default SwipeableButton
