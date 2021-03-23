import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';


class CounterComponent extends Component {
  constructor(props)
  {
    super()
    this.state = {count: 0, lastCounter: 0, now: new Date()}
  }

  addWithValue(value)
  {
    const {count} = this.state

    this.setState({count: count + value, now: new Date()})
  }

  incrementCounter()
  {
      this.addWithValue(1)
  }

  decrementCounter()
  {
    this.addWithValue(-1)
  }

  clearCounter()
  {
    const {count} = this.state
    this.setState({count: 0, lastCounter: count})
  }

  loadCounter()
  {
    const {_, lastCounter} = this.state
    this.setState({count: lastCounter})
  }

  render()
  {
      const {text} = this.props
      const {count} = this.state

      return (
        <>
          <CounterDisplayComponent text={text} count={count}/>
          <Button title="Artır" onPress={() => this.incrementCounter()}/>
          <Button title="Azalt" onPress={() => this.decrementCounter()}/>
          <Button title="Sıfırla" onPress={() => this.clearCounter()}/>
          <Button title="Geri yükle" onPress={() => this.loadCounter()}/>
        </>
      )
  }
}

class CounterDisplayComponent extends Component {
  render()
  {
    const {count, text} = this.props

    return (
        <View>
          <Text>
            {text + ":"}{count}
          </Text>
        </View>
    )
  }
}



export {CounterComponent}
