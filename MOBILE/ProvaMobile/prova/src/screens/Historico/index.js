import {useState} from 'react';
import {TextInput,TouchableOpacity,Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'

export default function History({navigation}) {
  const [registra, setInfo] = useState([]);

  const getData = async () => {
    try {
      const val = await AsyncStorage.getItem('registra')
      
      setInfo(JSON.parse(val));
    } catch(e) {
      // error reading value
    }
}

if(registra.length == 0) getData();

    return (
    

      
      <View style={styles.container}>

            {
                registra.map((pets, indice) => {
                    return (
                        <View style={styles.text} key={indice}>
            
                            <View style={{width: '80%'}}>
                                <Text style={styles.p}>PET : {pets.nomePet}</Text>
                                <Text style={styles.p}>Veterinário : {pets.nomeMed}</Text>
                                <Text style={styles.p}>Vacina : {pets.vacina}</Text>
                                <Text style={styles.p}>Data : {pets.dataA}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
      );
    };
    
    