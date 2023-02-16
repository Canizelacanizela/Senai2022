import {useState} from 'react';
import { TextInput,TouchableOpacity,Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'

export default function Registro({navigation}) {
    const [nomePet, setNomeP] = useState("");
    const [nomeMed, setNomeM] = useState("");
    const [vacina, setNomeV] = useState("");
    const [dataA, setData] = useState("");

    var cadastro = new Array();

    const storeData = async (val) => {
        try {
          await AsyncStorage.setItem('registra', JSON.stringify(val));
        } catch (e) {
          // saving error
        }
    }


    return (
    
      <View style={styles.container}>
      
     <View>
        <TextInput style={styles.car} placeholder="Nome do Pet" onChangeText={(value) => {setNomeP(value)}} />
        <TextInput style={styles.car} placeholder="Nome do Médico veterinário" onChangeText={(value) => {setNomeM(value)}}/>
        <TextInput style={styles.car} placeholder="Nome da vacina" onChangeText={(value) => {setNomeV(value)}} />
        <TextInput style={styles.car} placeholder="Data da aplicação" onChangeText={(value) => {setData(value)}}/>
     </View>
      <TouchableOpacity style={styles.botao} onPress={() =>{
        cadastro.push({nomePet,nomeMed,vacina,dataA});
        
        storeData(cadastro);
      }}>
         <Text style={styles.text}>Registrar</Text>
      </TouchableOpacity>
    </View>
      
      );
    };
    
    