import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import SplashScreen from './screens/SplashScreen';
import InformationScreen from './screens/InformationScreen';
import SixMonthScreen from './screens/SixMonthsScreen';
import SixWeekScreen from './screens/SixWeekScreen';
import EnrollmentScreen from './screens/EnrollmentScreen';
import CalculateScreen from './screens/CalculateFees';
import ContactScreen from './screens/ContactScreen';
import SewingScreen from './screens/Sewing';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="InformationScreen" component={InformationScreen}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SixMonthsScreen" component={SixMonthScreen}/>
        <Stack.Screen name="SixWeekScreen" component={SixWeekScreen}/>
        <Stack.Screen name="EnrollmentScreen" component={EnrollmentScreen}/>
        <Stack.Screen name="CalculateScreen" component={CalculateScreen}/>
        <Stack.Screen name="ContactScreen" component={ContactScreen}/>
        <Stack.Screen name="SewingScreen" component={SewingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


