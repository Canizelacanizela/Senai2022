import {StyleSheet} from 'react-native';

export default StyleSheet.create({
   
    title: {
        fontSize: '1.05rem',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
   
    Tex: {
        paddingTop:6,
     paddingBottom:6,
        backgroundColor: "#FFF",
        borderRadius: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#7242F5",
        marginTop: 8,
        marginBottom: 8,
        marginLeft:35,
        width: 310,
        alignContent: "center",
    },

    logo: {
        width: 200,
        height: 200,
        marginTop:250,
        marginLeft:84,
        marginBottom:22
    },
    
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#F7F7F7'
    },
    containers : {
        width: '63%',
        height: '15%',
        justifyContent: 'center',
        marginLeft: 11,
        gap: '20px',
        marginLeft: 11, 
        marginTop: 11, 
        marginBottom: 11, 
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
    },
    head:{
        width: '100%',
        height: '25%',
        marginBottom: 2 ,
        justifyContent: 'center',
        gap: '10px',
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.38,
        shadowRadius: 20.00,
        elevation: 16,
    },
    excluirIm: {
        width: '27px',
        height: '27px',
        shadowColor: "#000"
    },
    input: {
        width: '75%',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        backgroundColor: '#EFEFEF',
        outlineStyle: 'none',
        border: 'none',
        borderRadius: '5px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
    },
    button: {
        width: '75%',
        backgroundColor: '#33ACF5',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
    },
    textButton: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#EFEFEF',
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 1,
        width: 450
      },
})