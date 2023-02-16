import {useState} from 'react';
import { Image,TouchableOpacity,Text, View } from 'react-native';

import styles from './style'

export default function Home({navigation}) {
    return (
    
        <View style={styles.container}>
          <View style={styles.p}>
            <TouchableOpacity  onPress={() =>{ navigation.navigate("Historico")}}>
              <Image style={styles.l} source={{
               uri: 'https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula09/data/assets/arquivo.png'
               }}/>
                <Text style={styles.title}>Histórico de Vacinas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.p}>
          <TouchableOpacity onPress={() =>{ navigation.navigate("Registro")}}>
          <Image style={styles.l} source={{
            uri: 'https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula09/data/assets/vacinacao.png'
        }}/>
       <Text style={styles.title}>Registrar Vacina</Text>
          </TouchableOpacity>
          
          </View>
        </View>
      
      );
    };
    