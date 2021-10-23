import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function GreenDay() {
    return (
<View style={estilo.container}>   
  <Text style={estilo.Banda}> Green Day</Text>
  <View>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/gd1.jpg')} />
  <Text style={estilo.rotulo}>Green Day</Text>
  </View>

  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/gd2.jpg')} />
  <Text style={estilo.rotulo}></Text>

  </View>
  <View>
  <Image resizeMode={'stretch'} style={estilo.img} 
  source={require('../../assets/gd3.jpg')} />
  <Text style={estilo.rotulo}>American Idiot</Text>
  </View>

  </ScrollView>  
</View>
   <View style={estilo.resumo}>
     <Text style={estilo.txtResumo}>
Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong and bassist and backing vocalist Mike Dirnt.
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