import * as React from 'react';
import {Image, Button,TouchableOpacity,Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './style'

export default function Quiz05({navigation, route}) {
  const [checked, setChecked] = React.useState('none');
  
  const storeData = async (value, ponto) => {
    try {
        const data = await AsyncStorage.getItem('resp');

        await AsyncStorage.setItem('resp', data + ";" + value);

        navigation.navigate("final", {"score":ponto});
    } catch (e) {
      // saving error
    }
}

  return (
    
    <View style={styles.container}>
      <Text  style={styles.title}>O que a palavra legend significa em português?</Text>

      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/736x/01/e7/47/01e7475fbd172a32787fe653b7b7ff65.jpg',
        }}
      />

      <RadioButton 
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text style={styles.op}>Legenda</Text>

      <RadioButton 
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={styles.op}>Conto</Text>

      <RadioButton 
        value="three"
        status={ checked === 'three' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('three')}
      /><Text style={styles.op}>Lenda</Text>

       <RadioButton 
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
      /><Text style={styles.op}>Hístoria</Text>

<RadioButton 
        value="five"
        status={ checked === 'five' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('five')}
      /><Text style={styles.op}>Legendário</Text>

      <TouchableOpacity style={styles.botao} onPress={() =>{
        let ponto = route.params.score;
                
        if(checked === 'three') ponto++;

        storeData(checked, ponto);
        
        navigation.navigate("Pontuação")}}>
                <Text style={styles.car}>Resultado</Text>
            </TouchableOpacity>
    </View>
  
  );
};
