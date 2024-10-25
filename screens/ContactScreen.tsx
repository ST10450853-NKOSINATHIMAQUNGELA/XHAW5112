import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextComponent, TextInput, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';
import { useState } from 'react';

type ContactScreenProps = NativeStackScreenProps<RootStackParamList, 'ContactScreen'>;
export default function ContactScreen({navigation}: ContactScreenProps){
    return(
        <ScrollView>
        <View style={styles.input}>
        <TextInput placeholder='Full Name'/>
        </View>

        <View style={styles.input}>
        <TextInput placeholder='Email Address'/>
        </View>

        <View style={styles.input}>
            <TextInput placeholder='Phone Number'/>
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