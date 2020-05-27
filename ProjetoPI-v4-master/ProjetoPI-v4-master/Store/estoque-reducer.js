import { ADD_PRODUTO, LISTA_PRODUTOS } from "./estoque-actions";
import Produto from '../modelo/Produto'

const estadoInicial={
    produtos:[]
};
export default(estado = estadoInicial,action)=>{
    switch(action.type){
        case LISTA_PRODUTOS:
            return{
                produtos:action.produtos.map(p=>new Produto(p.id.toString(), p.nomeProduto, p.precoProduto,
                p.unidadeProduto, p.codigoProduto, p.imagem))
            }
        case ADD_PRODUTO:
            const p = new Produto(action.dadosProduto.id.toString(), action.dadosProduto.nomeProduto,
            action.dadosProduto.precoProduto,action.dadosProduto.unidadeProduto, action.dadosProduto.codigoProduto, 
            action.dadosProduto.imagem);
            console.log(JSON.stringify(p))
            return{
                produtos:estado.produtos.concat(p)
            };
        default:
            console.log('aqui'+JSON.stringify(action))
            return estado;
    }
}