import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function BonJovi() {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> Bon Jovi</Text>
  <View>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/bj1.jpg')} />
  <Text style={estilo.rotulo}>Bon Jovi</Text>
  </View>

  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/bj2.jpg')} />
  <Text style={estilo.rotulo}>This house is not for sale</Text>

  </View>
  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/bj3.jpg')} />
  <Text style={estilo.rotulo}>Jon Bon Jovi</Text>
  </View>

  </ScrollView>  
</View>
   <View style={estilo.resumo}>
     <Text style={estilo.txtResumo}>
Bon Jovi is an American rock band formed in 1983 in Sayreville, New Jersey. It consists of singer Jon Bon Jovi, keyboardist David Bryan, drummer Tico Torres, guitarist Phil X, and bassist Hugh McDonald.
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
    fontWeight: '900'
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
    marginTop: 50,
    marginHorizontal:15,
    borderRadius: 7,
  },
  txtResumo:{
    fontSize: 15
  }
});