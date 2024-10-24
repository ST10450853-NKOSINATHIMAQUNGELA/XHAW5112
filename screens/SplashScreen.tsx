import { View, Text } from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { Button, StyleSheet, Image } from "react-native";
import React from "react";


type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "SplashScreen">;
export default function SplashScreen({navigation, route}: SplashScreenProps) {
    return (
<View style={styles.container}>
   <Image source={require("../Img_/Empowering_The_Nation.jpg")}/>
   <Text style={styles.WelcomeText}> Welcome to Empowering The Nation</Text>

   <Button title="View details" onPress={() => navigation.navigate("InformationScreen")} />
    
</View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.87,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    WelcomeText: {
      fontSize: 20,
    },
  
  });