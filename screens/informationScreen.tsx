import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';


type InformationScreenProps =  NativeStackScreenProps<RootStackParamList, "InformationScreen">;
export default function InformationScreen({navigation}: InformationScreenProps) {
    return(
        <View style={styles.container}>
          <Image style={styles.image} source={require('../Img_/Empowering_The_Nation.jpg')}/>
          <Text style={styles.MainText}> 
            Skills training for domestic Workers and Gardeners
          </Text>

          <Text style={styles.SecondaryText}> Empowering the Nation was established in 2018 and offers courses in Johannesburg.
            Hundreds of domestic Workers and Gardeners have been trained on both the six-month long learnerships
            and six-week short skills training programs to empower themselves and help provide more marketable skills. 
             </Text>

          <Button title='6-week couses'></Button>
          <Button title='6-month courses'></Button>
        </View>
        

    );



}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 350
    },

    image: {
      width: 250,
      height: 300,

    },
  
    MainText: {
      fontSize: 26,
      textAlign: 'center',
      fontWeight: 'bold'
    },

    SecondaryText: {
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 30,

    },

    sixWeekButton: {
      alignItems: 'center',
      fontSize: 19,
    }
  
  });