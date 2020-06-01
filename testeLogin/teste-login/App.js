import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import ENV from './env';

import * as firebase from 'firebase/app';
import 'firebase/auth';

if(!firebase.apps.length)
  firebase.initializeApp(ENV)

export default function App() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [isAuthenticated] = useState(false);

  const capturarEmail = (email) =>{
    setEmail(email);
  }

  const capturarPassword = (password) =>{
    setPassword(password);
  }

  const login = async() =>{
    try {
      const user = firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(true);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={capturarEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={password}
        onChangeText={capturarPassword}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      {isAuthenticated ? <Text>Logado com sucesso</Text>:null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  input:{
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom:10,
  },
  button:{
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight:'bold'
  }
});
