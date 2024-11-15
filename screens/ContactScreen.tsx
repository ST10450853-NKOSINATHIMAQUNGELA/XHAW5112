import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Alert, ImageComponent, Linking, ScrollView, StyleSheet, Text, TextComponent, TextInput, View } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { RootStackParamList } from '../types';
import React from 'react';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


type ContactScreenProps = NativeStackScreenProps<RootStackParamList, 'ContactScreen'>;
export default function ContactScreen({navigation}: ContactScreenProps){

    const [VenueOne] = useState({
        latitude: -26.111085635203022,  
        longitude: 28.0522888239995,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      const [VenueTwo] = useState({
        latitude: -26.144393816895096,
        longitude:  28.049861668181283,  
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      const [venueThree] = useState({
        latitude: -26.237787508982215,   
        longitude: 27.907001900726097,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleInputChange = (key: string, value: string) => {
        setFormData({ ...formData, [key]: value });
      };
    
      const sendEmail = () => {
        const { name, email, phone, message } = formData;
    
        if (!name || !email || !phone || !message) {
          Alert.alert('Error', 'Please fill out all fields.');
          return;
        }
    
        const subject = `Message from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
        const mailtoURL = `mailto:your-email@example.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
    
        Linking.openURL(mailtoURL).catch(() =>
          Alert.alert('Error', 'Could not open email client.')
        );
      };
 
 
 

    return(
        <ScrollView style={styles.scrollView}>
        <View>
            <Text style={styles.HeadingTwo}>
                Venue 1 : Sandton
            </Text>

            <Text style={styles.HeadingThree}>Address: 1 Sandton drive, Sandton, Johannnesburg</Text>
        </View>

        <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={VenueOne}
        >
          <Marker coordinate={VenueOne} title="Our Location" description="Visit us here!" />
        </MapView>
      </View>

      <View>
            <Text style={styles.HeadingTwo}>
                Venue 2 : Rosebank
            </Text>

            <Text style={styles.HeadingThree}>Address: 55 Rose St, Rosebank, Johannesburg</Text>
        </View>

        <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={VenueTwo}
        >
          <Marker coordinate={VenueTwo} title="Our Location" description="Visit us here!" />
        </MapView>
      </View>

      <View>
            <Text style={styles.HeadingTwo}>
                Venue 3: Soweto
            </Text>

            <Text style={styles.HeadingThree}>123 Vilakazi Street, Soweto, Johannnesburg</Text>
        </View>

        <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={venueThree}
        >
          <Marker coordinate={venueThree} title="Our Location" description="Visit us here!" />
        </MapView>
      </View>

        
        <View style={styles.input}>
        <TextInput placeholder='Full Name'
        value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
          />
        </View>

        <View style={styles.input}>
        <TextInput placeholder='Email Address'
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
        />
        </View>

        <View style={styles.input}>
            <TextInput placeholder='Phone Number'
            value={formData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            />
        </View>

        <View style={styles.input}>
            <TextInput placeholder='Enter your message'
               value={formData.message}
               onChangeText={(text) => handleInputChange('message', text)}
            />
        </View>

        <View style={styles.backButton}>
            <Button title='Send message' onPress={sendEmail}/>
        </View>

        <View style={styles.backButton}>
            <Button title='Back' onPress={() => navigation.navigate("InformationScreen")}/>
            </View>
        </ScrollView>
    )
};


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

      scrollView: {
        backgroundColor: 'white',
    },

    label: {
        fontSize: 20,
        marginVertical: 9,
    },

    input: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        marginBottom: 14,
        fontSize: 30,
    },
    
    backButton: {
        padding: 20,
        justifyContent: "center"
    },

    mapContainer: {
        height: 200,
        marginVertical: 20,
        justifyContent: "center",
        padding: 15
      },
    
      map: {
        flex: 1,
        height: '100%',
      },
    
  

})