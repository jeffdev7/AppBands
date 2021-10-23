import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function Jesus() {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> Jesus of Suburbia</Text>
  <View>
   <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/AmericanIdiot.jpg')} />
  <Text style={estilo.rotulo}>American Idiot</Text>
</View>
   <View style={estilo.resumo}>
     <Text style={estilo.txtResumo}>
This song encompasses so much about life and friendship and family, and it’s flamboyant and big and bombastic. It’s just one of those songs.
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
    marginTop: 35,
    marginHorizontal:15,
    borderRadius: 7,
  },
  txtResumo:{
    fontSize: 15
  }
});