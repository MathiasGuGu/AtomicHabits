import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, Button, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
          <Pressable
          style={styles.button}
      onPress={() =>
        navigation.navigate('Habits')
      }
    >
      <Text style={styles.text}>Go to habits tracker</Text>
    </Pressable>
       <Pressable
          style={styles.button}

        onPress={() =>
        navigation.navigate('Profile')
      }
    ><Text style={styles.text}>Go to profile-page</Text></Pressable>
      <Pressable
          style={styles.button}

      onPress={() =>
        navigation.navigate('Settings')
      }
    ><Text style={styles.text}>Go to settings</Text></Pressable>
    </View> 

  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: "center",
      width: '100%',
      height: "100%",
      marginHorizontal: "auto"
    },
    button: {
      marginTop: -300,
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      height: 100,
      borderColor: "black",
      borderWidth: "2px",
      borderRadius: "15px",
      backgroundColor: "black",
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 6},
      shadowOpacity: 0.5,
      shadowRadius: 8,
    },
    text: {
      color: "white",
      fontSize: "20rem"
    }
})

export default HomeScreen;