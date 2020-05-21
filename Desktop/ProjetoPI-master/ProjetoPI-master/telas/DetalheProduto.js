import React from 'react';
import {Text,View, Image, StyleSheet, TextInput, Button, Alert, ScrollView,TouchableOpacity} from 'react-native';




const DetalheProduto= (props)=>{
    return (
    <View style={styles.container}>{DetalheProduto}</View>
    );
}

DetalheProduto.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam("nomeDoProduto")
    }
  }
const styles = StyleSheet.create({
    container:{
        height: 100,
        borderWidth: 1,
        borderColor: "#191919",
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    imagem:{
        height: 80,
        width: 100,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    descricao:{
        flex: 2,
        padding: 10
    },

    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    tituloNome:{
        color: 'gray'
    }
})

export default DetalheProduto;
