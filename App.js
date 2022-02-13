import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from './src/Screens/Preload'
import Home from './src/Screens/Home'


const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Preload'>
            <Stack.Screen name='Preload' 
            component={Preload} 
            options={{
             headerShown: false
            }}
           
            />
            <Stack.Screen 
            name='Home' 
            component={Home} 
            options={{
              headerShown: false
             }}
            />
        </Stack.Navigator>
      </NavigationContainer>   
   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0,
    
  },
});
