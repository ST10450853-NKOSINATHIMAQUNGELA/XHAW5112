import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';


type InformationScreenProps =  NativeStackScreenProps<RootStackParamList, "InformationScreen">;
export default function InformationScreen({navigation}: InformationScreenProps) {
    return(
      <View style={styles.container}>
        <View >
          <Image style={styles.image} source={require('../Img_/Empowering_The_Nation.jpg')}/>
          <Text style={styles.MainText}> 
            Skills training for domestic Workers and Gardeners
          </Text>

          <Text style={styles.SecondaryText}> Empowering the Nation was established in 2018 and offers courses in Johannesburg.
            Hundreds of domestic Workers and Gardeners have been trained on both the six-month long learnerships
            and six-week short skills training programs to empower themselves and help provide more marketable skills. 
          </Text>

          <Text style={styles.SecondaryText}>
          We offer a range of courses with 2 different time periods, six week courses and six month courses. Press the buttons below for more information.
          </Text>
          
        <View style={styles.fixToText}>
          <Button title='6-Month couses' onPress={() => navigation.navigate("SixMonthsScreen")}/>

          <Button title='6-Week courses' onPress={() => navigation.navigate("SixWeekScreen")}/>
        </View>

        <View style={styles.fixToText}>
          <Button title='Contact details' onPress={() => navigation.navigate("ContactScreen")}/>

          <Button title='Calculate Fees' onPress={() => navigation.navigate("CalculateScreen")}/>
        </View>

        </View>

       

    
        
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
      width: 400,
      height: 300,
     alignSelf: 'center' 
    },
  
    MainText: {
      fontSize: 26,
      textAlign: 'center',
      fontWeight: 'bold'
    },

    SecondaryText: {
      fontSize: 20,
      fontStyle: 'italic',
      textAlign: 'center',
      paddingTop: 30,

    },

    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    }
  
  });