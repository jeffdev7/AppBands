import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function Oasis() {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> Oasis</Text>
  <View>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/o1.webp')} />
  <Text style={estilo.rotulo}></Text>
  </View>

  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/Oasis2.jpg')} />
  <Text style={estilo.rotulo}></Text>

  </View>
  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/oasis3.jpg')} />
  <Text style={estilo.rotulo}>Knebworth</Text>
  </View>

  </ScrollView>  
</View>
   <View style={estilo.resumo}>
     <Text style={estilo.txtResumo}>
Oasis were an English rock band formed in Manchester in 1991. Originally known as the Rain, the group which evolved into Oasis, the band consisted of Liam Gallagher, Paul Arthurs, Paul McGuigan, and Tony McCarroll.
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
    marginTop: 40,
    marginHorizontal:15,
    borderRadius: 7,
  },
  txtResumo:{
    fontSize: 15
  }
});