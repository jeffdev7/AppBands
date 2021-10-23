import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BonJovi from './artistas/BonJovi';
import GreenDay from './artistas/GreenDay';
import Oasis from './artistas/Oasis';
import PinkFloyd from './artistas/PinkFloyd';
import Artista from './pages/Artista';
import Musica from './pages/Musica';
import BonJoviSong from './songs/Days';
import GreenDaySong from './songs/Jesus';
import OasisSong from './songs/Some';
import PinkFloydSong from './songs/Time';

const Stack = createStackNavigator();

export default function RotasButton(){
  return(
    <Stack.Navigator>
       <Stack.Screen name='Artista' component={Artista} options = {{headerShown:false}}/> 
       <Stack.Screen name='BonJovi' component={BonJovi} options = {{title:"Bon Jovi"}} />
       <Stack.Screen name='GreenDay' component={GreenDay} options = {{title:"Green Day"}}/>
       <Stack.Screen name='Oasis' component={Oasis} options = {{title:"Oasis"}}/>
       <Stack.Screen name='PinkFloyd' component={PinkFloyd} options = {{title:"Pink Floyd"}}/>

       <Stack.Screen name='Musica' component={Musica} options = {{headerShown:false}}/> 
       <Stack.Screen name='BonJoviSong' component={BonJoviSong} options = {{title:"These Days"}} />
       <Stack.Screen name='GreenDaySong' component={GreenDaySong} options = {{title:"Jesus of Suburbia"}} />
       <Stack.Screen name='OasisSong' component={OasisSong} options = {{title:"Some might say"}} />
       <Stack.Screen name='PinkFloydSong' component={PinkFloydSong} options = {{title:"Time"}} />
    </Stack.Navigator>
  );
}