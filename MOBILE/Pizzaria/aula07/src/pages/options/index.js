import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './style'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Options({navigation}) {
    const data = [
        {
            "id":1,
            "tipo":2,
            "img":"https://www.pizzatec.com.br/assets/uploads/images/2018/08/curiosidades-pizza-portuguesa.jpeg",
            "nome":"Pizza Portuguesa",
            "descricao":"Preparada com a deliciosa combinação de ingredientes como ervilha, azeitona, molho de tomate, cebola, ovos, queijo, linguiça calabresa e orégano."
        },
        {
            "id":2,
            "tipo":1,
            "img":"https://as1.ftcdn.net/v2/jpg/02/50/02/20/1000_F_250022076_Xv6bkBCouCQZSycTfquhU5IApHjZPDin.jpg",
            "nome":"Pizza Romeu e Julieta",
            "descricao":"Pizza com queijo e goiabada."
        },
        {
            "id":3,
            "tipo":3,
            "img":"https://static.clubedaanamariabraga.com.br/wp-content/uploads/2020/08/pizza-margherita.jpg?x41527",
            "nome":"Pizza Marguerita",
            "descricao":" Uma pizza com tomate, queijo e manjericão. Em homenagem a rainha a pizza ganhou o nome de Magherita."
        },
        {
            "id":4,
            "tipo":4,
            "img":"https://www.sabordasreceitas.com.br/wp-content/uploads/2021/09/Receita-de-pizza-de-calabresa-facil.jpg",
            "nome":"Pizza de Calabresa",
            "descricao":"Preparada com recheio generoso de linguiça calabresa de primeira qualidade, queijo muçarela e orégano."
        }
    
    ]

  
    const salvar = async () => {
        try {
          await AsyncStorage.setItem("pata",data);
         data;
        }catch(err) {
          console.log(err);
        }
      }

    return(
        <ScrollView>
            {
                data.map((item,index) =>{
                    return(
                        <TouchableOpacity style={styles.item}key={index} onPress={() => { salvar() }}>
                            <img style={styles.image} src={item.img} width='120' />
                            <Text style={styles.title}>{item.nome}</Text>
                            <Text>Descrição: {item.descricao}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TouchableOpacity style={styles.botao}  onPress={() =>{navigation.navigate("Carrinho")}}>
                <Text style={styles.car}>CARRINHO</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}