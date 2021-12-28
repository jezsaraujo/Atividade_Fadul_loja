import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView,KeyboardAvoidingView, StatusBar, 
  TouchableOpacity, Modal, TextInput, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const [link, setLink] = useState('');
  const [descript, setDescript] = useState('');
  const [door, setDoor] = useState(false);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(false);
 
  


  function verify(){
    if (input === '') {alert('Campo em branco!'); return;};

    setDoor(true);
  }
  function brinco1(){
    setImage(true);
    setLink(require('./src/images/brinco1.jpg'));
    setDescript('R$ 15.00 === Brinco de pirulito Pop');
  }
  function brinco2(){
    setImage(true);
    setLink(require('./src/images/brincocopin.jpg'));
    setDescript('R$ 10.99 === Brinco de bubble tea');
  }
  function brinco3(){
    setImage(true);
    setLink(require('./src/images/brincoestranho.jpg'));
    setDescript('R$ 15.99 == brinco de partes do corpo ');
  }
  function brinco4(){
    setImage(true);
    setLink(require('./src/images/brincolampada.jpg'));
    setDescript('R$ 20.00 === Brinco de lampada');
  }
  function brinco5(){
    setImage(true);
    setLink(require('./src/images/brincopop2.jpg'));
    setDescript('R$ 15.00 === Brinco de Pop');
  }
  function brinco6(){
    setImage(true);
    setLink(require('./src/images/brincoursinho.jpg'));
    setDescript('R$ 10.00 === Brinco de ursinho');
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
     
      <Animatable.View animation="fadeInUp" useNativeDriver>
      <KeyboardAvoidingView style = {styles.background}>
        <View style = {styles.containerLogo}>
        <Image source={require('./src/images/brincoursinho.jpg')} />
        </View >
        
        <TextInput 
        style = {styles.input}
        placeholder='Digite seu nome!'
        placeholderTextColor='#747474'
        value={input}
        onChangeText={ (texto) => setInput(texto) }
        />

          <TouchableOpacity onPress={verify} style={styles.head}>
            
            <Text style= {styles.SubmitText}>Entrar na loja</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </Animatable.View>

     <Modal animationtype='bounceInUp' transparent={false} visible={door} >
       <KeyboardAvoidingView style={styles.container}>
        
           <Text style={styles.title}>Loja da Jess</Text>
           <Text style={styles.subtitle}> Bem vindo(a): {input} </Text>
         
         <View style={styles.images}>
         <TouchableOpacity onPress={brinco1}><Image  source={require('./src/images/brinco1.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={brinco2}><Image  source={require('./src/images/brincocopin.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={brinco3}><Image  source={require('./src/images/brincoestranho.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={brinco4}><Image  source={require('./src/images/brincolampada.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={brinco5}><Image  source={require('./src/images/brincopop2.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={brinco6}><Image  source={require('./src/images/brincoursinho.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
          </View>
            
       </KeyboardAvoidingView>
     </Modal>

     <Modal animationtype='bounceInUp' transparent={false} visible={image} style={{backgroundColor: '#000'}}>
       
       <TouchableOpacity onPress={ () => setImage(false) }>
         <Ionicons style={{marginLeft: 5, marginRight: 5}}name="md-arrow-back" size={40} color="#DDD" />
       </TouchableOpacity>
       <Image source={link} style={styles.into} />
       <Text style={{textAlign:'center'}}>{descript}</Text>
       
      
     </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  images:{
    height: 460,
    width: 320,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
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
  into:{
    height: 460,
    width: 320,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
    textAlign: 'center',

  },
  
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE7E7',
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#000'
  },
  subtitle:{
    marginTop:10,
    paddingBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  enter:{
    color: '#FFF',
    fontSize: 20,
    marginLeft: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  head:{
    backgroundColor: '#35aaff',
    width: '90%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
  },
  SubmitText:{
    color:'#000',
    fontSize: 18,
  },
  
})

