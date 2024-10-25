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

            <View>
                <Text style={styles.HeadingOne}>
                    First Aid
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R1500
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

                <Button title='Enroll' onPress={() => navigation.navigate("EnrollmentScreen")} />
            </View>

            <View>
            <Text style={styles.HeadingOne}>
                    Sewing
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R1500
                </Text>

                <Text style={styles.HeadingThree}>
                   <Text style={styles.HeadingTwo}>Purpose:</Text> To provide alterations and new garment tailoring services
                </Text>

                <Text style={styles.HeadingTwo}>
                    Content:
                </Text>
                
                <Text style={styles.bulletPoint}>• Types of stitches</Text>
                <Text style={styles.bulletPoint}>• Threading a sewing machine</Text>
                <Text style={styles.bulletPoint}>• Sewing buttons, zips, hems, and seams</Text>
                <Text style={styles.bulletPoint}>• Alterations</Text>
                <Text style={styles.bulletPoint}>• Designing and sewing new garments</Text>

                <Button title='Enroll' onPress={() => navigation.navigate("EnrollmentScreen")} />
            </View>

            <View>
            <Text style={styles.HeadingOne}>
                    Landscaping
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R1500
                </Text>

                <Text style={styles.HeadingThree}>
                   <Text style={styles.HeadingTwo}>Purpose:</Text> To provide landscaping services for new and established gardens
                </Text>

                <Text style={styles.HeadingTwo}>
                    Content:
                </Text>
                
                <Text style={styles.bulletPoint}>• Indigenous and exotic plants and trees</Text>
                <Text style={styles.bulletPoint}>• Fixed structures (fountains, statues, benches, etc.)</Text>
                <Text style={styles.bulletPoint}>• Balancing of plants and trees in a garden</Text>
                <Text style={styles.bulletPoint}>• Aesthetics of plant shapes and colors</Text>
                <Text style={styles.bulletPoint}>• Garden layout </Text>

                <Button title='Enroll' onPress={() => navigation.navigate("EnrollmentScreen")} />
            </View>

            <View>
            <Text style={styles.HeadingOne}>
                    Life Skills
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R1500
                </Text>

                <Text style={styles.HeadingThree}>
                   <Text style={styles.HeadingTwo}>Purpose:</Text>  To provide skills to navigate basic life necessities
                </Text>

                <Text style={styles.HeadingTwo}>
                    Content:
                </Text>
                
                <Text style={styles.bulletPoint}>• Opening a bank account</Text>
                <Text style={styles.bulletPoint}>• Basic labor law (know your rights)</Text>
                <Text style={styles.bulletPoint}>• Basic reading and writing literacy</Text>
                <Text style={styles.bulletPoint}>• Basic numeric literacy</Text>
              

                <Button title='Enroll' onPress={() => navigation.navigate("EnrollmentScreen")} />
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
    }
  
  });