import React from 'react';
import {Text,View, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import{useSelector} from 'react-redux';
import ProdutoItem from '../Components/ProdutoItem';
import {Ionicons} from '@expo/vector-icons';

const Produtos = (props) =>{

    const produtos = useSelector(estado=>estado.produtos.produtos);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={produtos}
                keyExtractor={produto=>produto.id}
                renderItem={produto=>
                    <ProdutoItem
                        idProduto={produto.item.id}
                        nomeProduto={produto.item.nome}
                        precoProduto={produto.item.preco}
                        unidadeProduto={produto.item.unidade}
                        codigoProduto={produto.item.codigo}
                        onSelect={()=>
                        props.navigation.navigate('DetalheProduto', {nomeDoProduto:produto.item.nome, 
                            idDoProduto:produto.item.id})}
                        imagem={produto.item.imagemURI}
                    />
                }
            />
                <TouchableOpacity style={styles.icon} onPress = {() => {props.navigation.navigate('CadastrarProduto')}}>
                    <Ionicons name="ios-add" size={35} color="black"/> 
                </TouchableOpacity>
        </SafeAreaView>   
    )
}


const styles = StyleSheet.create({
    container:{
        height: 100,
        borderWidth: 1,
        borderColor: "#191919",
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1
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
    },icon:{
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#0094FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        right: 25,
        bottom: 25,
        elevation: 2,
        zIndex: 9,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        textShadowOffset:{
            width: 1,
            height: 3
        }        
    }
})

export default Produtos;
