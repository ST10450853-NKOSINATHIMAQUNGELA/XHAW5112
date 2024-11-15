import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';



type FirstAidScreenProps = NativeStackScreenProps <RootStackParamList, "FirstAidScreen">;
export default function FirstAidScreen({navigation}: FirstAidScreenProps){
  
  
  let FirstAidfee: number = 1500;
  return(
    <View style={styles.scrollView}>
       <Text style={styles.HeadingOne}>
                    First Aid
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R{FirstAidfee}
                </Text>

                <Text style={styles.HeadingThree}>
                   <Text style={styles.HeadingTwo}>Purpose:</Text> To provide first aid awareness and basic life support
                </Text>

                <Text style={styles.HeadingTwo}>
                    Content:
                </Text>
                
                <Text style={styles.bulletPoint}>• Wounds and Bleading</Text>
                <Text style={styles.bulletPoint}>• Burns and Fractures</Text>
                <Text style={styles.bulletPoint}>• Emergency scene management</Text>
                <Text style={styles.bulletPoint}>• Cardio-Pulmonary Resuscitation (CPR)</Text>
                <Text style={styles.bulletPoint}>• Respitory distress (e.g., choking, blocked airway)</Text>

                <View style={styles.backButton}>
                <Button title='Enroll' onPress={() => navigation.navigate("EnrollmentScreen")} />
                </View>

                <View style={styles.backButton}>
                <Button title='Back' onPress={() => navigation.navigate("SixMonthsScreen")}/>
                </View>
    </View>

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
    padding: 20,
    },

    backButton: {
      padding: 20,
      justifyContent: "center"
  }

  
  });