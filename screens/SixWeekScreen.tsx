import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';

type SixWeekScreenProps = NativeStackScreenProps <RootStackParamList, "SixWeekScreen">;
export default function SixWeekScreen({navigation}: SixWeekScreenProps){
    return(
        <ScrollView style={styles.scrollView}>
            <Image style={styles.image} source={require('../Img_/Empowering_The_Nation.jpg')}/>

            <Text style={styles.MainHeading}>
                Six-Week Courses
            </Text>

            <View>
                <Text style={styles.HeadingOne}>
                    Garden Maintenance
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R750
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

                <Button title='Enroll'/>
            </View>

            <View>
            <Text style={styles.HeadingOne}>
                    Cooking
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R750
                </Text>

                <Text style={styles.HeadingThree}>
                   <Text style={styles.HeadingTwo}>Purpose:</Text> To prepare and cook nutritious family meals.
                </Text>

                <Text style={styles.HeadingTwo}>
                    Content:
                </Text>
                
                <Text style={styles.bulletPoint}>• Nutritional requirements for a healthy body</Text>
                <Text style={styles.bulletPoint}>• Types of protein, carbohydrates, and vegetables</Text>
                <Text style={styles.bulletPoint}>• Planning meals</Text>
                <Text style={styles.bulletPoint}>• Preparation and cooking of meals</Text>

                <Button title='Enroll'/>
            </View>

            <View>
            <Text style={styles.HeadingOne}>
                    Child Minding
                </Text>

                <Text style={styles.HeadingTwo}>
                    Fees: R750
                </Text>

                <Text style={styles.HeadingThree}>
                   <Text style={styles.HeadingTwo}>Purpose:</Text> To provide basic child and baby care.
                </Text>

                <Text style={styles.HeadingTwo}>
                    Content:
                </Text>
                
                <Text style={styles.bulletPoint}>• Birth to six-month-old baby needs</Text>
                <Text style={styles.bulletPoint}>• Seven-month to one-year-old needs</Text>
                <Text style={styles.bulletPoint}>• Toddler needs</Text>
                <Text style={styles.bulletPoint}>• Educational toys</Text>

                <Button title='Enroll'/>
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