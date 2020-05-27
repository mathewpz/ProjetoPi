export const ADD_PRODUTO = 'ADD_PRODUTO';
export const LISTA_PRODUTOS = 'LISTA_PRODUTOS'
import * as FileSystem from 'expo-file-system';
import { inserirProduto, buscarProdutos} from '../helpers/db';

export const listarProdutos =()=>{
    return async dispatch=>{
        try{
            const resultadoBD = await buscarProdutos();
            dispatch({type: LISTA_PRODUTOS, produtos: resultadoBD.rows._array});
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
};

export const addProduto = (nomeProduto, precoProduto, unidadeProduto, codigoProduto, imagem)=>{
    return async dispatch=>{
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try{
            await FileSystem.moveAsync({
                from:imagem,
                to: novoPath
            })
            const resultadoBD = await inserirProduto(
                nomeProduto,
                precoProduto,
                unidadeProduto,
                codigoProduto,
                novoPath
            );
            console.log(JSON.stringify(resultadoBD));
            dispatch({type:ADD_PRODUTO, dadosProduto:{id: resultadoBD.insertId, nomeProduto:nomeProduto, precoProduto:precoProduto, 
                unidadeProduto:unidadeProduto, codigoProduto: codigoProduto, imagem:novoPath}})
        }
        catch(err){
            console.log(err);
            throw err;
        }
    };
}