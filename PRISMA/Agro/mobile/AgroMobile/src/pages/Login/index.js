import {useState} from "react"
import { View, Image,StyleSheet, TouchableOpacity, TextInput, Text} from 'react-native';
import Button from '../../components/index.js';

import styles from './style';

export default function SignIn({navigation}) {
    const [email, setEmail] = useState("bana@gmail.com");
    const [senha, setSenha] = useState("123");

  const login = () => {
    fetch("http://10.87.207.28:3000/login", {
      "method": "POST",
      "headers":{
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        "email": email,
        "senha": senha
      })
    })
    .then(res => {return res.json()})
    .then(data => {
      if(data.id !== undefined){
        navigation.navigate("Frota");
      }
    })
  }

    return(
        <View style={styles.container}>
          
<Image
        style={styles.im}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/9087/9087016.png',
        }}
      />

        <TextInput style={styles.input}
        placeholder=" E-mail"
        value={email}
        onChangeText={(e)=>{setEmail(e)}}
      />
        <TextInput style={styles.input}
        placeholder=" Senha"
        value={senha}
        onChangeText={(e)=>{setSenha(e)}}
        secureTextEntry
        />

<View style={styles.hairline} />

          <TouchableOpacity style={styles.button} onPress={() => {
                login()
            }}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
          
        </View>
    )
}

