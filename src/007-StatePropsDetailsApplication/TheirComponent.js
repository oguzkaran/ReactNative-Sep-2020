import React,  {Component} from 'react';
import { Text, View } from 'react-native';

class TheirComponent extends Component {
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
      <>
        <Text onPress= {() => this.clearCounter()}>
          {order}.{message.toUpperCase()}
        </Text>
        <CounterComponent text={message} incrementCounter={() => this.incrementCounter()}
          count={count}/>
      </>
    )
  }
}


class CounterComponent extends Component {
  render()
  {
    const {count, incrementCounter, text} = this.props

    return (
      <View>
        <Text onPress={incrementCounter}>
          {text + ":"}{count}
        </Text>
      </View>
    )
  }
}

export {TheirComponent}
