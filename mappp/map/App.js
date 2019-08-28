import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';

export default function App() {
  return (
    <MapView
      style={{flex:1}}
    />
  );
}

/*
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'init'
    };
  }

  componentDidMount() {
    axios.get('https://elixir-http-coient.herokuapp.com/hello')
         .then(res => {
           this.setState({ text: res.data.text });
         });
  }

  render() {
    return (
      <View style={{styles}}>
        <Text>{this.state.text}</Text>
      </View>
    )
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
