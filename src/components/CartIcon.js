
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../CartContext';

export function CartIcon({navigation}) {
  const {getItemsCount} = useContext(CartContext);
  return (
    
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');// Vai aparecer o nome "carrinho" e quantidade ao lado
        }}
      ><Ionicons style={{marginLeft: 10, marginRight: 5}} name='md-cart' size={25} color={'#fff'}/> ({getItemsCount()})</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#007361',
    height: 32,
    padding: 20,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20,
  },
});
