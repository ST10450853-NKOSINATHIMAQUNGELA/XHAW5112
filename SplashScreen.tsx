import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./Img_/Empowering_The_Nation.jpg')} />
      <Text style={styles.WelcomeText}>Welcome to Empowering The Nation</Text>
      <Button title='Enter App'/>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  WelcomeText: {
    fontSize: 20,
  },

});
