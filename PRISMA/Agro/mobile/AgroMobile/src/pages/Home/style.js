import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#413A50'
        
        
    },
    title: {
        fontSize: '1.00rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        marginLeft:13,
        color: '#FFF',
    },
    item: {
        display: '',
    },
    l: {
        width: 90,
        height: 90,
        borderRadius: '5px',
       alignSelf: 'center',
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
    op:{
        fontSize: '1.17rem',
        fontWeight: 'bold',
    },
    p:{
        marginLeft: 6,
        marginTop: 6,
        display: 'flex', 
        flexDirection:'row',
        backgroundColor: "#50496B",
        alignItems: 'center',
        width: '180px',
        borderRadius:'10px',
        marginBottom: '8px',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
    height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,
elevation: 24,
    }
})