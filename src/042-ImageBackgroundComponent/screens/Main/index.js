import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ImageBackground, TextInput} from 'react-native';

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        backgroundColor: 'black',
        fontSize: 30,
        textAlign: 'center'
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
                <ImageBackground style={styles.image} source={require('../../images/csd.jpg')}>
                    <TextInput style={styles.text}></TextInput>
                    <Image
                        source={{uri: 'https://i.ytimg.com/vi/YzrAHP0TovY/maxresdefault.jpg'}}
                        style={{width: scaleWidth, height: scaleHeight}}
                        onLoad={() => {}}
                        onLoadEnd={() => {}}
                    />
                    <TouchableOpacity onPress={this.onIncrementButtonPressed}>
                        <Text style={{fontSize: 20, backgroundColor: 'blue'}}>Artır</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onDecrementButtonPressed}>
                        <Text style={{fontSize: 20, backgroundColor: 'red'}}>Azalt</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </>
        )
    }
}

export default MainScreen
