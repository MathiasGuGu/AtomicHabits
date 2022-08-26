import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import HabitsScreen from './Screens/HabitsScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Habit tracker', headerRight: ({ navigation, route }) => (
            <Button
              title="Profile"
              color="#000"
            />
          ), }}
        />
        <Stack.Screen name="Habits" component={HabitsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;