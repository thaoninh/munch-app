import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class App extends React.Component {

  constructor(){
    super()
    this.state={d:200,};
  }

  render() {

  componentDidMount =  function() {
    this.setTimeout(() => {
      console.log('I do not leak!');
    }, 500);
  }

    logoStyle = function(d){
      if(d!=50){
        d=d-0.2;
      }
    return{
      height:d,
      width:d,
      }
    }

    return (
      <View style={styles.container}>
          <Image style={logoStyle(this.state.d)} source={require('./res/munch.png')} />
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
