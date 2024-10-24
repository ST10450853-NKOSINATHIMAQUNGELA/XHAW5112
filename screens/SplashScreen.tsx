import { View } from "react-native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { Button, StyleSheet, } from "react-native";
import React from "react";

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "SplashScreen">;
export default function SplashScreen({navigation, route}: SplashScreenProps) {
    return (
<View>
    
</View>



    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    WelcomeText: {
      fontSize: 20,
    },
  
  });