import React,  {Component} from 'react';
import { Text, View } from 'react-native';

class YourComponent extends Component {
  constructor(props)
  {
    super()
    this.state = {count : 0}
  }

  incrementCounter()
  {
    //...
    const {count} = this.state
    this.setState({count: count + 1})
  }

  clearCounter()
  {
    //...
    const {count} = this.state
    this.setState({count: 0})
  }

  render()
  {
    const {count} = this.state
    const {message, order} = this.props

    return (
      <View>
      <Text onPress= {() => this.clearCounter()}>
        {order}.{message.toUpperCase()}
      </Text>
        <Text onPress= {() => this.incrementCounter()}>
          {message}:{count}
        </Text>
      </View>
    )
  }
}

export {YourComponent}
