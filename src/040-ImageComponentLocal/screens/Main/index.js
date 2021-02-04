import React, {Component} from 'react';
import { StyleSheet, View, Image} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize:20,
    }
})

class MainScreen extends Component {
    constructor()
    {
      super()
    }

    render()
    {
        return (
            <>
                <Image source={require('../../images/csd.gif')} style={{width: 100, height: 100}}/>
                <Image source={require('../../images/csd.jpg')} style={{width: 100, height: 100}}/>
            </>
        )
    }
}

export default MainScreen
