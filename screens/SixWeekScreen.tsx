import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';
import CookingScreen from './CookingScreen';

type SixWeekScreenProps = NativeStackScreenProps <RootStackParamList, "SixWeekScreen">;
export default function SixWeekScreen({navigation}: SixWeekScreenProps){




    return(

        <ScrollView style={styles.scrollView}>
            <Image style={styles.image} source={require('../Img_/Empowering_The_Nation.jpg')}/>

            <Text style={styles.MainHeading}>
                Six-Week Courses
            </Text>

            
            <View style={styles.fixToText}>
            <Text style={styles.HeadingThree}>
                    Garden Maintenance
            </Text>
            <Button title='View course' onPress={() => navigation.navigate("GardenMaintenanceScreen")}/>
            </View>

            <View style={styles.fixToText}>
            <Text style={styles.HeadingThree}>
                Cooking
            </Text>
            <Button title='View course' onPress={() => navigation.navigate("CookingScreen")}/>
            </View>

            <View style={styles.fixToText}>
            <Text style={styles.HeadingThree}>
                Child Minding
            </Text>
            <Button title='View course' onPress={() => navigation.navigate("ChildMindingScreen")}/>
            </View>

            <View style={styles.backButton}>
            <Button title='Back' onPress={() => navigation.navigate("InformationScreen")}/>
            </View>
        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },

    scrollView: {
        backgroundColor: 'white',
    },

    image: {
      width: 200,
      height: 150,
     alignSelf: 'center' 
    },
    
    MainHeading: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold'
      },
  
  
    HeadingOne: {
      fontSize: 28,
      textAlign: 'left',
      color: 'blue',
      fontWeight: 'bold',
      paddingTop: 60,
    },

    HeadingTwo: {
      fontSize: 20,
      textAlign: 'left',
      paddingTop: 15,
      fontWeight: 'bold',

    },

    HeadingThree: {
        fontSize: 19,
        paddingTop: 15,
    },

    bulletPoint: {
        fontSize: 19,
        paddingBottom: 10,
    },

    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    },
    
    backButton: {
        padding: 20,
        justifyContent: "center"
    }
  
  
  });