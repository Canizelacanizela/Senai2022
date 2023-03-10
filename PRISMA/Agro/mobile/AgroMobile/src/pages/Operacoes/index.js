import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
export default function App() {
  const [operacao, setOpera] = useState([]);

  // const deletar = (id) => {


  //   fetch("http://10.87.207.28:3000/motordel/", + id, {
  //      "method": "DELETE",
  //      "headers":{
  //        "Content-Type": "application/json"
  //      }
  //    })
  //    .then(res => {return res.json()})
  //    .then(data => {
  //      setOpera(data);
  //    })
  //    }



  useEffect(() => {
    fetch("http://10.87.207.28:3000/opera")
    .then(res => {return res.json()})
    .then(data => {
      setOpera(data);
    })
  });


  return (
    
        <View  style={styles.container}>
        <ScrollView>
            {
 operacao.map((opera, index) => {
    return (
        <View style={styles.containers} key={index} >
            
            {/* ${opera.data_post.split("T")[0]} */}
           <View style={styles.body}>
            <Text>ID motorista: {`${opera.id_motorista}`}</Text>
            <Text>ID veiculo: {`${opera.id_veiculo}`}</Text>
            <Text>Data de saida: {`${opera.data_saida}`}</Text>
          
             <Text>Descrição: {`${opera.descricao_servico}`}</Text>
              {/* <TouchableOpacity onPress={() => {
                deletar()
                 }}>
                <Image style={styles.excluirIm} source={{uri: "https://cdn-icons-png.flaticon.com/512/491/491722.png"}}></Image>
              </TouchableOpacity> */}
           </View>
           <TouchableOpacity onPress={() => {
                deletar()
                 }}>
                <Image style={styles.excluirIm} source={{uri: "https://cdn-icons-png.flaticon.com/512/491/491722.png"}}></Image>
              </TouchableOpacity>
        </View>
    )
})
            }
        </ScrollView>
        </View>
  );
}