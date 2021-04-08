import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const toTimeStr = date => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

class MainScreen extends Component {
    constructor()
    {
        super()
        this.state = {counter: 10, clock: toTimeStr(new Date())}
        this.onStartCountDownTimer = this.onStartCountDownTimer.bind(this)
        this.counterInterval = null
    }

    componentDidMount()
    {
        this.clockInterval = setInterval(() => this.setState({clock: toTimeStr(new Date())}), 1000)
    }

    componentDidUpdate()
    {
        const {counter} = this.state

        if (counter == 0) {
            clearInterval(this.counterInterval)
            this.counterInterval = null
            this.setState({counter: 10})
        }
    }

    componentWillUnmount()
    {
        if (this.counterInterval != null)
            clearInterval(this.counterInterval)
        clearInterval(this.clockInterval)
    }

    onStartCountDownTimer()
    {
        if (this.counterInterval ==null)
            this.counterInterval = setInterval(() => this.setState(prevState => ({counter: prevState.counter - 1})), 1000)
    }

    render()
    {
        const {counter, clock} = this.state

        return (
            <>
                <Text>{clock}</Text>
                <Text>{counter}</Text>
                <TouchableOpacity onPress = {this.onStartCountDownTimer}>
                    <Text>Start CountDownTimer</Text>
                </TouchableOpacity>
            </>
        )
    }
}

export default MainScreen
