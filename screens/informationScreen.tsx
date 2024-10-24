import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';


type InformationScreenProps = NativeStackScreenProps<RootStackParamList, "InformationScreen">;
export default function informationScreen({navigation, route}: InformationScreenProps) {
    return(
        <View style={styles.container}>


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