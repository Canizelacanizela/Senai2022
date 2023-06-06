import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

function CustomDrawer({...props}){
    return(
        <View style={styles.container}>
            <View style={styles.LoginArea}>
                <Image source={require('../../../assets/c2.png')} 
                style={styles.logo} />
                <Text style={styles.nome}>Seu Trouxa!</Text>
            </View>

            <DrawerNavigatorItems {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    LoginArea: {
        marginBottom: 10,
        marginTop: 15,
        marginLeft: 10,
    },
    logo: {
        width: 55,
        height: 55
    },
    nome:{
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default CustomDrawer;