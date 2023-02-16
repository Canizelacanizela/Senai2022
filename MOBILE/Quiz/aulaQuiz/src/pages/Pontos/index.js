import * as React from 'react';
import {Image, Button,TouchableOpacity,Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './style'

export default function Pontos() {
  
  
  return (
    
    <View style={styles.container}>
      <Text  style={styles.title}>Sua Pontuação</Text>

      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/736x/da/bb/48/dabb48b6d81e9f7fda007d5413094167.jpg',
        }}
      />

  
    </View>
  
  );
};

// function handleClick()
//           {         
//         var amountCorrect = 0;          
//         for(var i = 1; i <= 45; i++) {
//           var radios = document.getElementsByName('group'+i);
//           for(var j = 0; j < radios.length; j++) {
//             var radio = radios[j];
//             if(radio.value == "correct" && radio.checked) {
//               amountCorrect++;
//             }
//           }
//          }                   
//             alert("Correct Responses: " + amountCorrect);
//           }