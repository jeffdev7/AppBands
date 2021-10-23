import * as React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function Musica(props) {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> The greatest Hits</Text>  

    <FlatList 
    data={musicas}
    keyExtractor={(item) =>{item.uid.toString()}}
    renderItem ={({item}) =>
      <View style={estilo.box}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate(item.button)}}>
            <Text style={estilo.nomeSongs}> {item.nome}</Text>
      </TouchableOpacity>  
    </View>
  }
    />
</View>
  );
}

const musicas = [
  {
    uid: 1,
    nome: 'These days',
    button: 'BonJoviSong'
  },
  {
    uid: 2,
    nome: 'Jesus of suburbia',
    button: 'GreenDaySong'
  },
  {
    uid: 3,
    nome: 'Some might say',
    button: 'OasisSong'
  },
  {
    uid: 4,
    nome: 'Time',
    button: 'PinkFloydSong'
  },
];

const estilo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 8,
  },
  Banda: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 700,
    color: 'black',
    height: 40,
    marginVertical:30
  },
  nomeSongs: {
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bolder',
    marginVertical:15,
  },
  box:{
    justifyContent:'center',
    margin:15,
    padding:5,
    alignContent:'center',
    textAlign:'center',
    marginVertical:15,
    backgroundColor:"#85C1E9",
  },
});