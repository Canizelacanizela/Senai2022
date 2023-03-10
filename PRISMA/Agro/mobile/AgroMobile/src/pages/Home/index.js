import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
export default function App() {
  const [postagem, setPostagem] = useState([]);

  const deletar = (id) => {


    fetch("http://10.87.207.28:3000/motordel/", + id, {
      "method": "DELETE",
      "headers": {
        "Content-Type": "application/json"
      }
    })
      .then(res => { return res.json() })
      .then(data => {
        setPostagem(data);
      })
  }



  useEffect(() => {
    fetch("http://10.87.207.28:3000/frota")
      .then(res => { return res.json() })
      .then(data => {
        setPostagem(data);
      })
  });


  return (

    <View style={styles.container}>
      <ScrollView>
        {
          postagem.map((frota, index) => {
            return (
              <View style={styles.containers} key={index} >

                <Text>ID: {`${frota.id}`}</Text>
                {/* ${frota.data_post.split("T")[0]} */}
                <View style={styles.body}>
                  <Text>Placa: {`${frota.placa}`}</Text>

                  <Text>Modelo: {`${frota.modelo}`}</Text>

                  <Text>Marca: {`${frota.marca}`}</Text>
                  {/* <TouchableOpacity onPress={() => {
                deletar()
                 }}>
                <Image style={styles.excluirIm} source={{uri: "https://cdn-icons-png.flaticon.com/512/491/491722.png"}}></Image>
              </TouchableOpacity> */}
                </View>
                <TouchableOpacity onPress={() => {
                  deletar()
                }}>
                  <Image style={styles.excluirIm} source={{ uri: "https://cdn-icons-png.flaticon.com/512/491/491722.png" }}></Image>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
    </View>

  );
}