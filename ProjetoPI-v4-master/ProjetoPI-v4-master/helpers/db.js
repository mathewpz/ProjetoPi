import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("produto.db" );

export const init = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_produto (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, preco TEXT NOT NULL, unidade TEXT NOT NULL, codigo TEXT NOT NULL, imageUri TEXT NOT NULL);',
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const inserirProduto = (nome, preco, unidade, codigo, imageUri) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_produto (nome, preco, unidade, codigo, imageUri) VALUES (?, ?, ?, ?, ?);',
                [nome, preco, unidade, codigo, imageUri],
                (_,resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const buscarProdutos = () =>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM tb_produto',
                [],
                (_,resultado)=>{resolve(resultado)},
                (_,err)=>{reject(err)}
            );
        });
    });
    return promise;
};