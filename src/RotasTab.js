import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Artista from './RotasButton';
import Home from './pages/Home';
import Musica from './pages/Musica';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Artista" 
      component={Artista}
      options={{
        tabBarLabel:"Artistas",
        tabBarIcon:({color, size})=><MaterialCommunityIcons name="guitar-pick-outline" color={color} size={size}/>}}
      />
      <Tab.Screen name="Home" 
      component={Home}
      options={{
        tabBarLabel:"Home",
        tabBarIcon:({color, size})=><MaterialCommunityIcons name="home" color={color} size={size}/>}}
      />
      <Tab.Screen name="Musica" 
      component={Musica}
      options={{
        tabBarLabel:"Songs",
        tabBarIcon:({color, size})=><MaterialCommunityIcons name="music-box" color={color} size={size}/>}}
      />
    </Tab.Navigator>
  );
}
