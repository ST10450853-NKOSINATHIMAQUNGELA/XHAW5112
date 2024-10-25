import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextComponent, TextInput, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const courses = ['First Aid - R1500', 'Sewing - R1500', 'Landscaping - R1500', 'Life Skills - R1500', 'Child Minding - R750',
                'Cooking - R750', 'Garden maintenance - R750'];

type EnrollmentScreenProps =  NativeStackScreenProps<RootStackParamList, "EnrollmentScreen">;
export default function EnrollmentScreen({navigation}: EnrollmentScreenProps) {

const [course, setCourse] = useState(courses[0]);
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

            <View style={styles.input}>
            <TextInput placeholder='Full Name'/>
            </View>

            <View style={styles.input}>
            <TextInput placeholder='Email Address'/>
            </View>

            <View style={styles.input}>
                <TextInput placeholder='Phone Number'/>
            </View>

            <View style={styles.label}>
                <Picker selectedValue={course} onValueChange={setCourse}>
                    {courses.map((course) =>(
                        <Picker.Item key={course} label={course} value={course}/>
                    ))}
                </Picker>
            </View>

            <View>
                <Button title='Enroll & Pay'/>
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

    label: {
        fontSize: 20,
        marginVertical: 9,
    },

    input: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 29,
    }

})