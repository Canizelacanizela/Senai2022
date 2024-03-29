import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
export default function App() {
  const [manutencao, setManu] = useState([]);


const formataData = (val) => {
   if(val == null) return "-";
    let data = new Date(val);
    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
    }).format(data).replace(",", "");
}

const finalizarManu = (id) => {
  fetch("http://10.87.207.28:3000/manufim/" + id, {
      "method":"PUT",
       headers: {
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        }
  })
  .then(resp => {
      if(resp.status === 202) {
          console.log("Manutenção Finalizada");
          //  window.location.reload();
      }else {
          console.log(resp.status);
      }
  })
}

  useEffect(() => {
    fetch("http://10.87.207.28:3000/manu")
    .then(res => {return res.json()})
    .then(data => {setManu(data);
    })
  });

  return (
    
        <View  style={styles.container}>
        <ScrollView>
            {
 manutencao.map((manu, index) => {
    return (
        <View style={styles.containers} key={index} >
            
            {/* ${manu.data_post.split("T")[0]} */}
           <View style={styles.body}>
            <Text style={styles.title}>ID veiculo: {`${manu.id_veiculo}`}</Text>
            <Text style={styles.title}>Data de Início: {`${formataData(manu.data_inicio)}`}</Text>
            <Text style={styles.title}>Data de Finalização: {`${formataData(manu.data_fim)}`}</Text>
            <Text style={styles.title}>Valor gasto: {`${manu.valor_gasto}`}</Text>
            <Text style={styles.title}>Descrição: {`${manu.descricao}`}</Text>
              <TouchableOpacity onPress={() => {
                finalizarManu(manu.id)
                 }}>
                <Image style={styles.excluirIm} source={{uri: "https://cdn-icons-png.flaticon.com/512/9160/9160755.png"}}></Image>
              </TouchableOpacity>
           </View>
           {/* <TouchableOpacity onPress={() => {
                alterar()
                 }}>
                <Image style={styles.excluirIm} source={{uri: "https://cdn-icons-png.flaticon.com/512/491/491722.png"}}></Image>
              </TouchableOpacity> */}
        </View>
    )
})
            }
        </ScrollView>
        </View>
  );
}