import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList.js';
import EventForm from './EventForm.js';
import {createStackNavigator} from 'react-navigation';

export default createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions : () => ({
      title: "Shree Timer App: List",
    })
  },
  form: {
    screen: EventForm,
    navigationOptions : () => ({ 
      title: "Shree Timer App: Form",
    })
  }
})


