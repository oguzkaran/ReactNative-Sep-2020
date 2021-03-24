import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

const toTimeStr = date => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

class MainScreen extends Component {
    constructor()
    {
        super()
        this.state = {counter: 10, clock: toTimeStr(new Date())}
    }

    componentDidMount()
    {
        this.counterInterval = setInterval(() => this.setState(prevState => ({counter: prevState.counter - 1})), 1000)
        this.clockInterval = setInterval(() => this.setState({clock: toTimeStr(new Date())}), 1000)
    }

    componentDidUpdate()
    {
        const {counter} = this.state

        if (counter == 0)
            clearInterval(this.counterInterval)
    }

    componentWillUnmount()
    {
        clearInterval(this.counterInterval)
        clearInterval(this.clockInterval)
    }

    render()
    {
        const {counter, clock} = this.state

        return (
            <>
                <Text>{clock}</Text>
                <Text>{counter}</Text>
            </>
        )
    }
}

export default MainScreen
