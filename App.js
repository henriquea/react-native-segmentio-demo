/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Analytics from 'react-native-analytics-segment-io';

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    Analytics.screen('screen_home', { screenType: 'Test App Home Screen' })
  }

  onPressButton = () => {
    console.log('Sending track');
    Analytics.track('test_track', { name: 'test track from button' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressButton}>
          <View style={styles.button}>
            <Text style={styles.label}>Send Track Signal</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f5',
  },
  button: {
    borderRadius: 4,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#033fff'
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  }
});
