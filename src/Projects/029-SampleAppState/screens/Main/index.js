import React, {Component} from 'react';
import { StyleSheet, Text, Switch, AppState} from 'react-native';

class MainScreen extends Component {
    componentDidMount()
    {
        AppState.addEventListener('change', this.onAppStateChange)
        console.log("componentDidMount")
    }

    onAppStateChange(currentState) //active, inactive, background
    {
        console.log("currentState", currentState)
    }

    render()
    {
        return (
            <>
                <Text>C ve Sistem Programcıları Derneği</Text>
            </>
        )
    }

}

export default MainScreen
