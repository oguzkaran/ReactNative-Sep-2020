import React, {Component} from 'react';
import {StyleSheet, Dimensions, PanResponder, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window')

class MainScreen extends Component {
    constructor()
    {
        super()
        this.state = {
            orgPos: {
                x: (width / 2) - 100,
                y: (height / 2) - 100
            },
            pos: {
                x: (width / 2) - 100,
                y: (height / 2) - 100
            }
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
            }
        })
    }

    onPanResponderRelease()
    {
        this.setState({
            orgPos: this.state.pos
        })
    }

    render()
    {
        const {orgPos, pos} = this.state

        return (
            <>
                <Text style={styles.posShow}>
                    x: {pos.x} y: {pos.y}
                </Text>
                <View
                    {...this._panResponder.panHandlers}
                    style={[styles.square, {marginLeft: pos.x, marginTop: pos.y}]}
                />
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
        width: 200,
        height: 200,
        backgroundColor: 'blue'
    }
});

export default MainScreen
