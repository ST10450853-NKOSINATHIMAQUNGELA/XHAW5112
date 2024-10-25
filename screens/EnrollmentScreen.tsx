import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextComponent, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';

type EnrollmentScreenProps =  NativeStackScreenProps<RootStackParamList, "EnrollmentScreen">;
export default function EnrollmentScreen({navigation}: EnrollmentScreenProps) {
    return(
        <ScrollView style={styles.scrollView}>
            <Image style={styles.image} source={require('../Img_/Empowering_The_Nation.jpg')}/>
            <View>
                <Text style={styles.MainHeading}>
                    Select Your Course and Enroll
                </Text>
             </View>

            <View>
                <Text style={styles.HeadingOne}>
                    Enrollment Form
                </Text>
            </View>



        </ScrollView>

    )
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
       alignSelf: 'center' 
      },

      MainHeading: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold'
      },

      HeadingOne: {
        fontSize: 28,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        paddingTop: 60,
      },

      scrollView: {
        backgroundColor: 'white',
    },

})