import * as React from 'react';
import {View, ImageBackground,Text, StyleSheet} from 'react-native';

export default function Home(){
  return(
    <View style={estilo.container}>
        <ImageBackground style={estilo.back} source={require('../../assets/guitar.jpeg') } resizeMode="cover">  
        <Text style={estilo.titulo}> Musical App </Text>  
        </ImageBackground>

    </View>

  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1

  },
  back:{
    flex:1,
    justifyContent:'center'

  },
   titulo:{
    fontSize:50,
    color: '#FFFFFF',
    marginTop:35,
    fontWeight:'1000',
    alignItems:'center',
    textAlign:'center',
    marginVertical:20,
    height:600,
    shadowColor: 'white'
  }

})