import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';


type GardenMaintenanceScreenProps = NativeStackScreenProps <RootStackParamList, "GardenMaintenanceScreen">
export default function GardenMaintenanceScreen({navigation}: GardenMaintenanceScreenProps){
    let Gardenfee: number= 750;
    return(
        <View style={styles.scrollView}>
            <Text style={styles.HeadingOne}>
                    Garden Maintenance
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R{Gardenfee}
                </Text>

                <Text style={styles.HeadingThree}>
                   <Text style={styles.HeadingTwo}>Purpose:</Text> To provide basic knowledge of watering, pruning, and planting in a domestic garden.
                </Text>

                <Text style={styles.HeadingTwo}>
                    Content:
                </Text>
                
                <Text style={styles.bulletPoint}>• Water restrictions and watering requirements of indigenous and exotic plants</Text>
                <Text style={styles.bulletPoint}>• Pruning and propagation of plants</Text>
                <Text style={styles.bulletPoint}>• Planting techniques for different plant types</Text>

                <View style={styles.backButton}>
                <Button title='Enroll' onPress={() => navigation.navigate("EnrollmentScreen")} />
                </View>

                <View style={styles.backButton}>
                <Button title='Back' onPress={() => navigation.navigate("SixWeekScreen")}/>
                </View>
        </View>
    )
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