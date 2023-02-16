import {useState} from 'react';
import { Image,TouchableOpacity,Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'


export default function Quiz01({navigation}) {
  const [checked, setChecked] = useState(false);


  const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('resp', value)
    } catch (e) {
        // saving error
    }
}

  return (
    
    <View style={styles.container}>
 <Text style={styles.title}>Você conhece esse gato?</Text>
  <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/736x/a7/45/d4/a745d490ae6782b87ede7ceed74835eb.jpg',
        }}
      />
  
  <View style={styles.p}>
  <RadioButton  
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        /><Text style={styles.op}>Não</Text>
  </View>
     
     <View style={styles.p}>
      <RadioButton 
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={styles.op}>Sim</Text>
    </View>
      

      <TouchableOpacity style={styles.botao} onPress={() =>{
        let ponto = 0;
        if(checked === 'first') ponto = 1;

        storeData(checked);
        navigation.navigate("Pergunta 2", {"score":ponto})}}>
                <Text style={styles.car}>Próxima Pergunta</Text>
            </TouchableOpacity>
    </View>
  
  );
};


