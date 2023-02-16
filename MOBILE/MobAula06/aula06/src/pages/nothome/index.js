import { ScrollView, Text, TouchableOpacity} from 'react-native';

import styles from './style'

export default function Options({navigation}) {
    const chamados = [
        {
            "user_id": 1,
            "chamados": [
                {
                    "titulo":"Manutenção de Roteador",
                    "descricao":"Cliente reclamou que está sem internet, possível troca"
                },
                {
                    "titulo":"Mudança de Endereço",
                    "descricao":"Fazer a instalação na nova instalação"
                },
                {
                    "titulo":"Recolher equipamento",
                    "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
                }
            ]
        },
        {
            "user_id": 2,
            "chamados": [
                {
                    "titulo":"Recolher equipamento",
                    "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
                },
                {
                    "titulo":"Mudança de Endereço",
                    "descricao":"Fazer a instalação na nova instalação"
                },
                {
                    "titulo":"Manutenção de Roteador",
                    "descricao":"Cliente reclamou que está sem internet, possível troca"
                }
            ]
        }
    ]

    return(
        <ScrollView>
            {
                data.map((item,index) =>{
                    return(
                        <TouchableOpacity style={styles.item} key={index} onPress={() =>{navigation.navigate("Descricao", {"data":item.id}) }} >
                        <Text style={styles.title}>{item.nome}</Text>
                        <Text>Horario: {item.horario}</Text>
                    </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}