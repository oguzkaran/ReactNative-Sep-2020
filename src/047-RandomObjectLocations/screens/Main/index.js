import React, {Component} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window')

class MainScreen extends Component {
    constructor()
    {
        super()
        this.state = {
            pos: {
                x: 0,
                y: (height / 2) - 25
            },
            bgcolor: 'blue'
        }

        //this.startEMDRInterval = null
        this.emdrIntervalCallback = this.emdrIntervalCallback.bind(this)
        this.onStartEMDRPressed = this.onStartEMDRPressed.bind(this)
        this.scale = 10
    }

    componentWillUnmount()
    {
        if (this.startEMDRInterval != null)
            clearInterval(this.startEMDRInterval)
    }

    emdrIntervalCallback()
    {
        const {pos, bgcolor} = this.state

        if (pos.x + 50 >= width)
            this.scale = -10
        if (pos.x == 0)
            this.scale = 10

        pos.y = pos.y + Math.random() * (20 + 20) - 20

        this.setState({pos : {x: pos.x + this.scale, y: pos.y}})
    }

    onStartEMDRPressed()
    {
        if (this.startEMDRInterval == undefined)
            this.startEMDRInterval = setInterval(this.emdrIntervalCallback, 10)
    }

    render()
    {
        const {pos, bgcolor} = this.state

        return (
            <>
                <Text style={styles.posShow}>
                    x: {pos.x} y: {pos.y}
                </Text>
                <TouchableOpacity style={styles.button} onPress={this.onStartEMDRPressed}>
                    <Text style={{backgroundColor: 'gray'}}>Start EMDR</Text>
                </TouchableOpacity>
                <View
                    style={[styles.square, {marginLeft: pos.x, marginTop: pos.y, backgroundColor: bgcolor}]}>
                </View>

            </>
        )
    }
}

const styles = StyleSheet.create({
    posShow: {
        textAlign: 'center',
        marginTop: 40,
        position: 'absolute',
    },
    button: {
        textAlign: 'center',
        marginTop: 70,
        position: 'absolute',
    },
    square: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MainScreen
