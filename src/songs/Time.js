import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function Time() {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> Time</Text>
  <View>
   <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/darkSideTime.jpg')} />
  <Text style={estilo.rotulo}>Dark side of the moon</Text>
</View>
   <View style={estilo.resumo}>
     <Text style={estilo.txtResumo}>
The lyrics deal with the passage of time – time can slip by, but many people do not realise it until it is too late. Waters got the idea when he realised he was no longer preparing for anything in life, but was right in the middle of it. He has described this realisation taking place at ages 28 and 29 in various interviews. It is noted for its long introductory passage of clocks chiming and alarms ringing, recorded as a quadrophonic test by Alan Parsons, not specifically for the album.
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
    width: 300,
    height: 250,
    marginHorizontal: 35,
    borderRadius: 10,

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