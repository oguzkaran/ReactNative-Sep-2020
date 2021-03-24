import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';

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
      this.state = {
          scaleWidth: 100,
          scaleHeight: 100
      }
      this.onIncrementButtonPressed = this.onIncrementButtonPressed.bind(this)
      this.onDecrementButtonPressed = this.onDecrementButtonPressed.bind(this)
    }

    onIncrementButtonPressed()
    {
        const {scaleWidth, scaleHeight} = this.state
        this.setState({scaleWidth: scaleWidth + 10, scaleHeight: scaleHeight + 10})
    }

    onDecrementButtonPressed()
    {
        const {scaleWidth, scaleHeight} = this.state
        this.setState({scaleWidth: scaleWidth - 10, scaleHeight: scaleHeight - 10})
    }

    render()
    {
        const {scaleWidth, scaleHeight} = this.state
        return (
            <>
                <Image
                    source={{uri: 'https://i.ytimg.com/vi/YzrAHP0TovY/maxresdefault.jpg'}}
                    style={{width: scaleWidth, height: scaleHeight}}
                    onLoad={() => {}}
                    onLoadEnd={() => {}}
                />
                <TouchableOpacity onPress={this.onIncrementButtonPressed}>
                    <Text style={{fontSize: 20, width: 200, backgroundColor: 'blue'}}>Artır</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onDecrementButtonPressed}>
                    <Text style={{fontSize: 20, width: 200, backgroundColor: 'red'}}>Azalt</Text>
                </TouchableOpacity>
            </>
        )
    }
}

export default MainScreen
