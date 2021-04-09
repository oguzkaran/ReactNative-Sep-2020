import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/Main'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {changeCountAction} from './actions/counts'

function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
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
export default connect(mapStateProps, mapDispatchProps)(App)
