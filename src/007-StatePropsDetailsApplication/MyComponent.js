import React,  {Component} from 'react';
import { Text, View } from 'react-native';

class MyComponent extends Component {
  constructor()
  {
    super()
    this.state = {count : 0, now: new Date()}
  }

  getTimeString()
  {
    const {_, now} = this.state

    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  }

  incrementCounter()
  {
    const {count} = this.state
    this.setState({count: count + 1, now: new Date()})
  }

  render()
  {
    const {count, now} = this.state
    return (
      <View>
        <Text>
          {this.getTimeString()}
        </Text>
        <Text onPress= {() => this.incrementCounter()}>
          Counter:{count}
        </Text>
      </View>
    )
  }
}




export {MyComponent}
