import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextComponent, TextInput, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';
import { useState } from 'react';
import RadioButton from 'react-native-paper/lib/typescript/components/RadioButton/RadioButton';
import CheckBox from '@react-native-community/checkbox';
const courses = [
    { id: '1', name: 'First Aid', price: 1500 },
    { id: '2', name: 'Sewing', price: 1500 },
    { id: '3', name: 'Landscaping', price: 1500 },
    { id: '4', name: 'Life Skills', price: 1500 },
    { id: '5', name: 'Garden Maintenance', price: 750 },
    { id: '6', name: 'Cooking', price: 750 },
    { id: '7', name: 'Child Minding', price: 750 },
];
const calculateDiscount = (count: number) => {
    if (count > 3) return 0.2;
    if (count === 3) return 0.1;  
    if (count === 2) return 0.05; 
    return 0;
};

type CalculateScreenProps = NativeStackScreenProps<RootStackParamList, "CalculateScreen">;
export default function CalculateScreen ({navigation}: CalculateScreenProps) {
 const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

    const toggleCourseSelection = (courseId: string, isSelected: boolean) => {
        setSelectedCourses((prevSelected) =>
            isSelected ? [...prevSelected, courseId] : prevSelected.filter((id) => id !== courseId)
        );
    };

    const calculateTotalPrice = () => {
        const selectedCourseData = courses.filter((course) => selectedCourses.includes(course.id));
        const totalPrice = selectedCourseData.reduce((sum, course) => sum + course.price, 0);
        const discount = calculateDiscount(selectedCourses.length);
        const discountedPrice = totalPrice * (1- discount);
        return discountedPrice.toFixed(2);
    };
    
    
    return(
       <ScrollView style={styles.scrollView}>
             <Image style={styles.image} source={require('../Img_/Empowering_The_Nation.jpg')}/>

            <View>
                <Text style={styles.HeadingOne}>
                    Calculate your course fees
                </Text>

                <Text style={styles.HeadingTwo}>
                Selected courses
                </Text>
            </View>
            

    
            <View>
            <Text style={styles.HeadingThree}>{selectedCourses.length}</Text>

            <Text style={styles.HeadingThree}>Total Price: R{calculateTotalPrice()}</Text>
            </View>

       </ScrollView>
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
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      paddingTop: 60,
    },

    HeadingTwo: {
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 15,
      

    },

    HeadingThree: {
        fontSize: 19,
        paddingTop: 15,
        textAlign:'center',
        color: 'blue'
    },

    bulletPoint: {
        fontSize: 19,
        paddingBottom: 10,
        paddingTop: 20,
        textAlign: 'center'
    },

    fixToText: {
    padding: 30,
    },

    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
      },

      courseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
      },

      courseText: {
        fontSize: 18,
        marginLeft: 10,
      },
  
  });