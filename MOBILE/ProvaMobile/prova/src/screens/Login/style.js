import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#505050'
        
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: '5px',
        marginTop:25,
        marginLeft:8,
        marginBottom:20,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
    height: 10,
    },
    shadowOpacity: 0.52,
    shadowRadius: 10.00,
    elevation: 22,
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
        color: '#00000077',
        borderRadius: '5px'
    },
   
    p:{
        flexDirection:'row',
        alignItems: 'center',
    }
})