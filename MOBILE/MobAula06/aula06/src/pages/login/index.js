import {useState} from "react"
import { View, Image, TouchableOpacity, TextInput} from 'react-native';
import Button from '../../components/button/index';

import styles from './style';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const users = [
        {
            "id": 1,
            "email": "user01@empresa.com",
            "senha": "teste1234",
        },
        {
            "id": 2,
            "email": "user02@empresa.com",
            "senha": "1234teste",
        }
    ]
    const login = () => {
        console.log(email);
    }
    return(
        <View>

<Image
        style={styles.logo}
        source={{
          uri: 'https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula06/assets/logo.png',
        }}
      />

           <TextInput style={styles.Tex}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
        
      />
      <TextInput style={styles.Tex}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button value="Login" onPress={() => login()}/>
        </View>
    )
}