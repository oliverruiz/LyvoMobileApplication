import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js'
import Footer from './Footer.js'

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render(){

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header/>
        </View>
        <View style={styles.body}>

        </View>
        <View style={styles.footer}>
          <Footer/>
        </View>
      </View>
    );

  };



};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '20%',
  },
  body: {
    backgroundColor: 'blue',
    width: '100%',
    height: '60%',
  },
  footer: {
    width: '100%',
    height: '20%',
  },
});
