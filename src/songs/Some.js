import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function Some() {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> Some might say</Text>
  <View>
   <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/someMightSay.jpg')} />
  <Text style={estilo.rotulo}>Talk tonight</Text>
</View>
   <View style={estilo.resumo}>
     <Text style={estilo.txtResumo}>
Some Might Say is a song by the English rock band Oasis. It was released as the first single on 24 April 1995 from their second studio album, (What's the Story) Morning Glory? (1995). The song was written by the band's lead guitarist Noel Gallagher. 
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
    marginTop: 30,
    marginHorizontal:15,
    borderRadius: 7,
  },
  txtResumo:{
    fontSize: 15
  }
});