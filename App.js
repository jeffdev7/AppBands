import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Artista from './src/pages/Artista';
import RotasTab from './src/RotasTab';


export default function App() {
  return (
    <NavigationContainer>
    <RotasTab/>
    
    </NavigationContainer>

    
  );
}


