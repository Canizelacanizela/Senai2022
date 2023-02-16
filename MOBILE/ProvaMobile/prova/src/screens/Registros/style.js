import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#505050'
        
    },
    title: {
        fontSize: '1.00rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        marginLeft:13,
        color: '#8A66FA',
    },
    item: {
        display: '',
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
        marginTop: '13px',
        margin: '15px',
        alignItems: 'center',
        height: '43px',
        width: '199px',
        justifyContent: 'center',
        borderRadius: '5px',
        backgroundColor: '#8A66FA',
    },
    car:{
        fontSize: '1.00rem',
        fontFamily: 'times New Roman',
        padding : '11px',
        marginTop: '8px',
        marginBottom: '6px',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        justifyContent: 'center',
        color: 'gray',
        borderRadius: '5px'
    },
    text:{
        fontSize: '1.00rem',
        color: '#EFEFEF',
        fontWeight: 'bold',
    }
})