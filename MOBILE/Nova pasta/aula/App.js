import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button, Image } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => {return res.json()})
    .then(data => {
      setPosts(data.results);
    })
  });

  return(
    <View style={styles.container}>
      
      {
        posts.map((poke, index) => {
          return(
            <View key={index}>
              <Text>{poke.name}</Text>
             
              {/* <Image style={styles.dog} source={{uri : photo.url}}/> */} 
              </View>
          )
        })
      }
   </View>
  );
}

const styles = StyleSheet.create({
  container : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
  },
  dog: {
      width: '200px',
      height: '200px',
     
  },

});