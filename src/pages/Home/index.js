import React, {useState} from 'react';
import { KeyboardAvoidingView,Image, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
const [val, setVal] = useState('');


  return (
   
   <KeyboardAvoidingView style = {styles.background}>
     <View style = {styles.containerLogo}>
      <Image source={require('./src/assets/Logotipo.png')} />
     </View>

     <View style = {styles.container}>
       <TextInput
       style = {styles.input}
       value = {val}
       onChangeText={ (val) => setVal(val) }
       placeholder = "Digite seu nome!"
       autoCorrect = {false}
      // onChangeText = {() => {}}

       />
       <TouchableOpacity style= {styles.btnSubmit}>
       <Text style= {styles.SubmitText}>Entrar na loja</Text>
       </TouchableOpacity>

     </View>
   </KeyboardAvoidingView>
  
);
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE7E7',
  },

  containerLogo:{
    flex:1,
    justifyContent:'center',
  },

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
  },

  input:{
    backgroundColor:'#ffff',
    width:'90%',
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius:7,
    padding: 15,
  },

  btnSubmit:{
    backgroundColor: '#35aaff',
    width: '90%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  SubmitText:{
    color:'#fff',
    fontSize: 18,
  }
})
