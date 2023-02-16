import * as React from 'react';
import { Image, Button,TouchableOpacity,Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'

export default function Quiz03({navigation, route}) {
  const [checked, setChecked] = React.useState('none');
  
  const storeData = async (value) => {
    try {
        const data = await AsyncStorage.getItem('resp');
        
        await AsyncStorage.setItem('resp', data + ";" + value);
    } catch (e) {
      // saving error
    }
}

  return (
    
    <View style={styles.container}>
     <Text style={styles.title}>Qual o nome deste Pássaro?</Text>
     
     <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/736x/76/79/d4/7679d4f94bb8ac16d321f69ca1cb6ab6.jpg',
        }}
      />

    <View style={styles.p}>
      <RadioButton 
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text style={styles.op}>Pardal-das-Neves</Text>
    </View>
    <View style={styles.p}>
      <RadioButton 
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={styles.op}>Shima Enaga</Text>
    </View>
    <View style={styles.p}>
      <RadioButton 
        value="three"
        status={ checked === 'three' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('three')}
      /><Text style={styles.op}>Quiuí</Text>
    </View>
    <View style={styles.p}>
      <RadioButton 
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
      /> <Text style={styles.op}>Pinguim</Text>
    </View>
      
      <TouchableOpacity style={styles.botao} onPress={() =>{
         let ponto = route.params.score;
                
         if(checked === 'second') ponto++;

         storeData(checked);
        
        navigation.navigate("Pergunta 4", {"score":ponto})}}>
                <Text style={styles.car}>Proxima Pergunta</Text>
            </TouchableOpacity>
    </View>
  
  );
};
