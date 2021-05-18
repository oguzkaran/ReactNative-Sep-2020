import React, {Component} from 'react';

import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <WebView style={styles.container} source={{uri: 'https://www.csystem.org/'}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
