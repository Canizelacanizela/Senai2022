import { useState } from 'react';
import { Image,View, Text, TextInput, Button } from 'react-native';

import styles from './style'

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const data = [
    {
       
        "email":"fulano@gmail.com",
        "senha":"umdoistresquatro",
    },
    {
        
        "email":"beltrano@ig.com.br",
        "senha":"s3nh4",
    }
];

return(
    <View style={styles.container}>

<Image
        style={styles.logo}
        source={{
            uri: 'https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula09/data/assets/dog.png'
        }}
      />

        <TextInput style={styles.car} placeholder="Informe o Email" onChangeText={(value) => {setEmail(value)}} />
        <TextInput style={styles.car} placeholder="Informe a Senha" onChangeText={(value) => {setPassword(value)}}/>
        
        <Button title="Login" onPress={() => {
            data.forEach(user => {
                if(user.email === email && user.senha === password) navigation.navigate("Home");
             })
        }}/>
    </View>
)
}