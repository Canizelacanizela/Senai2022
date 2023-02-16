import { ScrollView, Text, TouchableOpacity} from 'react-native';
import Button from '../../components/button';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'

export default function Options({descricao}) {
    

    const funcao = () => {
        console.log("teste")
    }

     const ler = async () => {
        try {
          let pata = await AsyncStorage.getItem("pata");
        }catch(err) {
          console.log(err);
        }
      }

    return(

        
        <ScrollView style={styles.container}> 
            {
                <View>
                ler()
                </View>
              
        }
            <TouchableOpacity>
                <Text onPress={funcao}>Finalizar Pedido</Text></TouchableOpacity>
        </ScrollView>
    )
}