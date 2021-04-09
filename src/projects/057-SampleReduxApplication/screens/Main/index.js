import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {changeCountAction} from '../../actions/counts'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class MainScreen extends Component {
    decrement()
    {
        let {count, actions} = this.props

        --count

        actions.changeCountAction(count)
    }

    increment()
    {
        let {count, actions} = this.props

        --count

        actions.changeCountAction(count)
    }

    render()
    {
        const {count, actions} = this.props
        console.log("count", count)

        return (
            <View styles={styles.container}>
                <Text>testr</Text>
                <Button title="Artır" onPress={() => this.increment()} />
                <Button title="Azalt" onPress={() => this.decrement()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
});


const mapStateProps = state => ({count: state.count})
const ActionCreators = Object.assign({}, changeCountAction)
const mapDispatchProps = dispatch => ({actions: bindActionCreators(ActionCreators, dispatch)})
export default connect(mapStateProps, mapDispatchProps)(MainScreen)
