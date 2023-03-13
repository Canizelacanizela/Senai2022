import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
export default function App({navigation}) {
  
  return (

    <View style={styles.container}>
    <View style={styles.p}>
      <TouchableOpacity  onPress={() =>{ navigation.navigate("Operacoes")}}>
        <Image style={styles.l} source={{
         uri: 'https://cdn-icons-png.flaticon.com/512/4532/4532451.png'
         }}/>
          <Text style={styles.title}>Página de Operações</Text>
      </TouchableOpacity>
    </View>
    {/* <View style={styles.p}>
    <TouchableOpacity onPress={() =>{ navigation.navigate("Registro")}}>
    <Image style={styles.l} source={{
      uri: 'https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula09/data/assets/vacinacao.png'
  }}/>
 <Text style={styles.title}>Registrar Vacina</Text>
    </TouchableOpacity>
    
    </View> */}
  </View>

);
};