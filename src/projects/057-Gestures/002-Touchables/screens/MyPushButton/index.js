import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight, TouchableOpacity, StyleSheet} from 'react-native';

const touchables = new Map([
    ["opacity", TouchableOpacity],
    ["highlight", TouchableHighlight],
    [undefined, TouchableOpacity]
])

const MyPushButton = ({label, onPress, touchable}) => {
    const Touchable = touchables.get(touchable)
    const touchableProps = {
        style: styles.myButton,
        underlayColor: "rgba(200, 128, 144, 0.3)",
        onPress
    };

    return (
        <Touchable {...touchableProps}>
            <Text style={styles.myButtonText}>{label}</Text>
        </Touchable>
    )
}

MyPushButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    touchable: PropTypes.oneOf(["opacity", "highlight"])
}

const styles = StyleSheet.create({
    myButton: {
        padding: 25,
        margin: 5,
        backgroundColor: 'azure',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'slategrey'
    },

    myButtonText: {
        color: 'slategrey'
    },
});


export default MyPushButton
