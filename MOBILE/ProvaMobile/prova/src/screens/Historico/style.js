import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#505050'
        
    },
    title: {
        fontSize: '1.00rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        marginLeft:13,
        color: '#8A66FA',
    },
    l: {
        width: 90,
        height: 90,
        borderRadius: '5px',
       
        marginTop:25,
        marginLeft:10,
        marginBottom:20,
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
        fontSize: '1.02rem',
        fontFamily: 'times New Roman',
        padding : '11px',
        marginTop: '8px',
        marginBottom: '6px',
        fontWeight: 'bold',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        justifyContent: 'center',
        color: 'gray',
        borderRadius: '5px'
    },
    text:{
        borderRadius: '5px',
        width: '90vw',
        backgroundColor: "gray",
         flexDirection: 'row',
         alignItems: 'center',
          marginTop: '10px',
          shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    p:{
       marginLeft: '5px',
        color: '#EFEFEF',
    }
})