import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
export default function App() {
  const [postagem, setPostagem] = useState([]);

  const deletar = () => {


    fetch("http://10.87.207.28:5000/forum/post/", {
       "method": "DELETE",
       "headers":{
         "Content-Type": "application/json"
       }
     })
     .then(res => {return res.json()})
     .then(data => {
       setPostagem(data);
     })
     }



  useEffect(() => {
    fetch("http://10.87.207.28:5000/forum/posts")
    .then(res => {return res.json()})
    .then(data => {
      setPostagem(data);
    })
  });


  return (
    <View style={styles.container} >
        <View  style={styles.container}>
        <ScrollView>
            {
 postagem.map((posts, index) => {
    return (
        <View style={styles.containers} key={index} >
            <View style={styles.head} >
            <Text>{`${posts.nome}        ${posts.data_post.split("T")[0]}`}</Text>
            </View>
            <Text>{`${posts.titulo}`}</Text>
            <View style={styles.hairline} />
            <Text>{`${posts.conteudo}`}</Text>
            <TouchableOpacity onPress={() => {
                deletar()
            }}><Image style={styles.excluirIm} source={{uri: "https://cdn-icons-png.flaticon.com/512/491/491722.png"}}></Image></TouchableOpacity>
        </View>
    )
})
            }
        </ScrollView>
        </View>

    </View>
  );
}