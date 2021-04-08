import React, {Component} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            results: []
        };

        this.onGetUserButtonPressed = this.onGetUserButtonPressed.bind(this)
    }

    onGetUserButtonPressed()
    {
        const {results} = this.state

        fetch(`https://randomuser.me/api`)
            .then(response => response.json())
            .then(json => this.setState({results: json.results}))
            .catch(err => alert(err))
    }

    render()
    {
        const {results} = this.state
        const user = results.length == 0 ? {name: {title: "", first: "", last: ""}, picture: {large: " " }} : results[0]

        return (
            <>
                <Text>
                    {user.name.title} {user.name.first} {user.name.last}
                </Text>
                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 40}}
                    onPress={this.onGetUserButtonPressed}
                >
                    <Text>Get User</Text>
                </TouchableOpacity>

                <Image style={{width: 200, height: 200}} source={{uri:user.picture.large}}></Image>
            </>
        )
    }
}


export default MainScreen
