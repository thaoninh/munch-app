import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style={{width: 200, height: 200}} source={require('./res/munch.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
