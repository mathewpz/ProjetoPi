import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import{Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import estoqueReducer from './Store/estoque-reducer';
import EstoqueNavigator from './Navegacao/EstoqueNavigator';
import{init} from './helpers/db';
import ENV from './env';

import * as firebase from 'firebase/app';
import 'firebase/auth';

if(!firebase.apps.length)
  firebase.initializeApp(ENV)


init().then(()=>{
	console.log("Criação da base ocorreu com sucesso")
}).catch((err)=>{
	console.log('Criação da base falhou');
	console.log(err);
})

const rootReducer = combineReducers({
	produtos:estoqueReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App(){
	return (
		<Provider store={store}>
			<EstoqueNavigator/>
		</Provider>
	);
}