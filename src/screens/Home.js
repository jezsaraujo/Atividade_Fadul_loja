import React, { useState, useContext, useEffect } from 'react';
import { Text, SafeAreaView, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export function Home({ navigation }) {
  const [input, setInput] = useState('');

  function verify() {
    if (input === '') {
      alert('Insira um nome válido!')
    } else {
      return navigation.navigate("Products", { input: input })
    };

  }

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container2}>
          <View style={styles.home}>
            <TextInput
              style={styles.cliNome}
              placeholder='Usuário'
              value={input}
              autoCorrect={false}
              onChangeText={(texto) => setInput(texto)}
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={verify}>
                <Text style={styles.head}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cliNome: {
    padding: 8,
    borderRadius: 10,
    borderColor: '#007361',
    borderWidth: 3,
    fontSize: 16
  },
  head: {
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: '#007361',
    color: '#fff',
    borderRadius: 10,
    fontSize: 18,
    width: 150
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,

  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  home: {
    marginTop: '20%',
    width: '80%',

  },
  title: {
    marginTop: 10,
    paddingBottom: 0,
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    color: '#000',
  },
})