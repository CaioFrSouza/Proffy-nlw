import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f7'
    },
    teacherList:{
        marginTop:-40,
    },

    TeacherForm:{
        marginBottom:14,
    },
    
    label:{
        color:'#d4c2ff',
        fontFamily:"Poppins_400Regular",
    },

    input:{
        backgroundColor:'#fff',
        height:54,
        borderRadius:8,
        justifyContent:'center',
        paddingHorizontal:16,
        marginTop:4,
        marginBottom:16
    },

    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    inputBlock:{
        width:'48%'
    },
    
    submitButton:{
        height:56,
        backgroundColor:"#04d362",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },

    submitButtonText:{
        color:'#fff',
        fontFamily:"Archivo_700Bold",
        fontSize:16,
    }
})

export default styles