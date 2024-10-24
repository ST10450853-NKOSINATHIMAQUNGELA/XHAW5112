import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import informationScreen from './screens/informationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="InformationScreen" component={informationScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    
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
