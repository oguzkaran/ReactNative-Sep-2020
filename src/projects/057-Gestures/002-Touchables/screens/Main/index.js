import React from 'react';
import MyPushButton from '../MyPushButton'

export default MainScreen = () => {
    return (
        <>
            <MyPushButton onPress={() => alert("Opacity Button Pressed")} label="Opacity Button" touchable="opacity"/>
            <MyPushButton onPress={() => alert("Highlight Button Pressed")} label="Highlight Button" touchable="highlight"/>
            <MyPushButton onPress={() => alert("Highlight Button Pressed")} label="Opacity Default Button"/>
        </>
    )
}
