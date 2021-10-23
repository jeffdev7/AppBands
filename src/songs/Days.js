import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function Days() {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> These Days</Text>
  <View>
   <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/TheseDaysBonJovi.jpg')} />
  <Text style={estilo.rotulo}>Album These days</Text>
</View>
   <View style={estilo.resumo}>
     <Text style={estilo.txtResumo}>
These Days is the sixth studio album by American rock band Bon Jovi, released on June 27, 1995. And it is also a single, which it deals with homelessness, loss of innocence and the difficulty of keeping up a relationship in the modern age. It is about people out there trying to be understood, to live their dreams
    </Text>
   </View>
</View>
  );
}


const estilo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#A6C1BE',
    height: '100 %'
  },
  Banda: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 700,
    color: 'black',
    height: 40,
    marginVertical:30,
  },
  img:{
    width: 330,
    height: 300,
    marginHorizontal: 25,
    borderRadius: 10

  },
  rotulo: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  resumo:{
    marginTop: 40,
    marginHorizontal:15,
    borderRadius: 7,
  },
  txtResumo:{
    fontSize: 15
  }
});