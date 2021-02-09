import React, {Component} from 'react';
import {StyleSheet, Dimensions, PanResponder, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window')

class MainScreen extends Component {
    constructor()
    {
        super()
        this.state = {
            orgPos: {
                x: (width / 2) - 50,
                y: (height / 2) - 50
            },
            pos: {
                x: (width / 2) - 50,
                y: (height / 2) - 50
            },
            bgcolor: 'blue'
        }
        this.onPanResponderMove = this.onPanResponderMove.bind(this)
        this.onPanResponderRelease = this.onPanResponderRelease.bind(this)
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: this.onPanResponderMove,
            onPanResponderRelease: this.onPanResponderRelease
        })
    }

    onPanResponderMove(evt, gestureState)
    {
        const dx = gestureState.x0 - gestureState.moveX
        const dy = gestureState.y0 - gestureState.moveY

        this.setState({
            pos: {
                x: this.state.orgPos.x - dx,
                y: this.state.orgPos.y - dy,
            },
            bgcolor: 'gray'
        })
    }

    onPanResponderRelease()
    {
        this.setState({
            orgPos: this.state.pos,
            bgcolor: 'blue'
        })
    }

    render()
    {
        const {orgPos, pos, bgcolor} = this.state

        return (
            <>
                <Text style={styles.posShow}>
                    x: {pos.x} y: {pos.y}
                </Text>
                <View
                    {...this._panResponder.panHandlers}
                    style={[styles.square, {marginLeft: pos.x, marginTop: pos.y, backgroundColor: bgcolor}]}
                >
                    <Text>DRAG ME</Text>
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
    square: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MainScreen
