import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';

type SixMonthScreenProps = NativeStackScreenProps <RootStackParamList, "SixMonthsScreen">;
export default function SixMonthScreen({navigation}: SixMonthScreenProps){

    return(
        <ScrollView style={styles.scrollView}>
            <Image style={styles.image} source={require('../Img_/Empowering_The_Nation.jpg')}/>

            <Text style={styles.MainHeading}>
                Six-Month Courses
            </Text>

            <View style={styles.fixToText}>
            <Text style={styles.HeadingThree}>
                    First Aid
            </Text>
            <Button title='View course' onPress={() => navigation.navigate("FirstAidScreen")}/>
                
            </View>


            <View style={styles.fixToText}>
            <Text style={styles.HeadingThree}>
                    Sewing
            </Text>
            <Button title='View course' onPress={() => navigation.navigate("SewingScreen")}/>
                
            </View>

            <View style={styles.fixToText}>
            <Text style={styles.HeadingThree}>
                    Landscaping
            </Text>
            <Button title='View course' onPress={() => navigation.navigate("LandscapingScreen")}/>
                
            </View>

            <View style={styles.fixToText}>
            <Text style={styles.HeadingThree}>
                    Life Skills
            </Text>
            <Button title='View course' onPress={() => navigation.navigate("LifeSkillsScreen")}/>
                
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
        fontSize: 25,
        paddingTop: 15,
    },

    bulletPoint: {
        fontSize: 19,
        paddingBottom: 10,
    },

    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    },

    backButton: {
        padding: 20,
        justifyContent: "center"
    }
  
  });