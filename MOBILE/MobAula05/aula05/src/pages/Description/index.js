import { ScrollView, Text, TouchableOpacity} from 'react-native';
import Button from '../../components/button';

import Date from  '../options/index';

import styles from './style'

export default function Options({descricao}) {
    

    const funcao = () => {
        console.log("teste")
    }

    return(
        <ScrollView style={styles.container}> 
            {
                data.map((item,index) =>{
                    return(
                        <TouchableOpacity style={styles.item} key={index}>
                            <Text style={styles.title}>{item.descricao}</Text>
                            <Text>{item.observacoes}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <Button value="Finalizar Compromisso" onPress={funcao}/>
        </ScrollView>
    )
}