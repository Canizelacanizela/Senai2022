import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        marginLeft:13,
    },
    item: {
        display: '',
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: '5px',
        marginTop:25,
        marginLeft:8,
        marginBottom:20
    },
    botao: {
        marginTop: '16px',
        margin: '15px',
        alignItems: 'center',
        height: '70px',
        width: '190px',
        justifyContent: 'center',
        borderRadius: '18px',
        backgroundColor: '#86ADFC'
    },
    car:{
        fontSize: '1.32rem',
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center',
    },
    op:{
        fontSize: '1.17rem',
        fontWeight: 'bold',
    }
})