import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function PinkFloyd() {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> Pink Floyd</Text>
  <View>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/cover.jpg')} />
  <Text style={estilo.rotulo}>The Dark side of the moon</Text>
  </View>

  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/pf2.jpg')} />
  <Text style={estilo.rotulo}></Text>

  </View>
  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/pf3.jpg')} />
  <Text style={estilo.rotulo}></Text>
  </View>

  </ScrollView>  
</View>
   <View style={estilo.resumo}>
     <Text style={estilo.txtResumo}>
Pink Floyd were an English rock band formed in London in 1964. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. 
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