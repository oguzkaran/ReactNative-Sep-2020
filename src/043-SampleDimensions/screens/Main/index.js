import React, {Component} from 'react';
import {Dimensions, Text} from 'react-native';

const {width, height} = Dimensions.get('window')

class MainScreen extends Component {
    constructor()
    {
        super()
    }

    render()
    {
        return (
            <>
                <Text style={{fontSize: 30}}>{width} x {height}</Text>
            </>
        )
    }
}

export default MainScreen
