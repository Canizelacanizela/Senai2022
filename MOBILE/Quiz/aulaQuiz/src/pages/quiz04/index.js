import * as React from 'react';
import { Image,Button,TouchableOpacity,Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'

export default function Quiz04({navigation, route}) {
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
      <Text style={styles.title}>Qual o nome dessa Personagem do jogo Genshin Impact?</Text>

      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/originals/9a/04/dc/9a04dc1953e9242bbb884e35d720ffd1.jpg',
        }}
      />
     
<View style={styles.p}>
      <RadioButton 
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text style={styles.op}>Eula</Text>
</View>

<View style={styles.p}> 
      <RadioButton 
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={styles.op}>Nilou</Text> 
</View>

<View style={styles.p}>
      <RadioButton 
        value="three"
        status={ checked === 'three' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('three')}
      /><Text style={styles.op}>Anna</Text>
</View>

<View style={styles.p}>
      <RadioButton 
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
      /><Text style={styles.op}>Ganyu</Text>
</View>


      <TouchableOpacity style={styles.botao} onPress={() =>{
        let ponto = route.params.score;
                
        if(checked === 'second') ponto++;

        storeData(checked);
        
        navigation.navigate("Pergunta 5", {"score":ponto})}}>
                <Text style={styles.car}>Próxima Pergunta</Text>
            </TouchableOpacity>
    </View>
  
  );
};
