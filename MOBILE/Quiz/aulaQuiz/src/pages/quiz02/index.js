import * as React from 'react';
import { Image, Button,TouchableOpacity,Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'

export default function Quiz02({navigation, route}) {
  const [checked, setChecked] = React.useState('none');
  
  const storeData = async (value) => {
    try {
        const data = await AsyncStorage.getItem('resp');
        
        await AsyncStorage.setItem('resp', data + ";" + value);
    } catch (e) {
        console.log(e);
      // saving error
    }
}


  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Se este gato pedisse para entrar,</Text>
      <Text style={styles.title}>você deixaria?</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/originals/65/3d/15/653d154cc6af793f43e68de83972f693.jpg',
        }}
      />

    <View style={styles.p}>
      <RadioButton 
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text style={styles.op}>Definitivamente não</Text>
    </View>

    <View style={styles.p}> 
      <RadioButton 
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={styles.op}>Não</Text>
    </View>

    <View style={styles.p}>
      <RadioButton 
        value="three"
        status={ checked === 'three' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('three')}
      /><Text style={styles.op}>Sim</Text>
    </View>

    <View style={styles.p}>
      <RadioButton 
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
      /><Text style={styles.op}>Definitivamente Sim</Text>
    </View>
      
     
      <TouchableOpacity style={styles.botao} onPress={() =>{
        let ponto = route.params.score;
                
        if(checked === 'three') ponto++;

        storeData(checked);
        
        navigation.navigate("Pergunta 3", {"score":ponto})}}>
                <Text style={styles.car}>Próxima Pergunta</Text>
            </TouchableOpacity>
    </View>
  
  );
};
