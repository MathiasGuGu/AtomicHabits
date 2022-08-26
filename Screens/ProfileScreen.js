import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const ProfileScreen = () => {
  return (
    <ScrollView>

      <View  style={styles.container}>
      <Text style={styles.text}>Profile of individual person</Text>
      <View style={styles.image}></View>
      <View style={styles.skeletonText}></View>
      <View style={styles.skeletonText}></View>
      <View style={styles.skeletonText}></View>
      <View style={styles.skeletonText}></View>
      <View style={styles.skeletonText}></View>

      <ScrollView>
        
      </ScrollView>
      </View >
    </ScrollView> 

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    marginTop: 30,
    width: "90%",
    height: 200, 
    backgroundColor: "rgb(225,225,225)",
    borderRadius: "15px"
  },
  skeletonText: {
    marginTop: 30,
    width: "90%",
    height: 50, 
    backgroundColor: "rgb(225,225,225)",
    borderRadius: "15px"
  },
  text: {
    fontSize: "20rem"
  }
})

export default ProfileScreen;