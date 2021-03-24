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

        this.blueObjectInterval = null
        this.blueObjectIntervalCallback = this.blueObjectIntervalCallback.bind(this)
        this.onStartPressed = this.onStartPressed.bind(this)
        this.scale = 10
    }

    componentWillUnmount()
    {
        if (this.blueObjectInterval != null)
            clearInterval(this.blueObjectInterval)
    }

    blueObjectIntervalCallback()
    {
        const {pos, bgcolor} = this.state

        if (pos.x + 50 >= width)
            this.scale = -10
        if (pos.x == 0)
            this.scale = 10

        pos.y = pos.y + Math.random() * (20 + 20) - 20

        this.setState({pos : {x: pos.x + this.scale, y: pos.y}})
    }

    onStartPressed()
    {
        //setInterval kullanımı bu örnek için az sorun oluştursa da çoğu zaman yetersizdir. Bunu ileride çözeceğiz
        if (this.blueObjectInterval == null)
            this.blueObjectInterval = setInterval(this.blueObjectIntervalCallback, 10)
    }

    render()
    {
        const {pos, bgcolor} = this.state

        return (
            <>
            <Text style={styles.posShow}>
                    x: {pos.x} y: {pos.y}
                </Text>
                <TouchableOpacity style={[styles.button, {marginTop: 70}]} onPress={this.onStartPressed}>
                    <Text style={{backgroundColor: 'gray'}}>Start</Text>
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
        position: 'absolute',
        width: 200,
        height: 50
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
