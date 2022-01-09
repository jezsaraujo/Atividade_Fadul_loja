import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './src/screens/ProductsList.js';
import { ProductDetails } from './src/screens/ProductDetails.js';
import { Cart } from './src/screens/Cart.js';
import { CartIcon } from './src/components/CartIcon.js';
import { CartProvider } from './src/CartContext.js';
import { Home } from './src/screens/Home.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home}
            options={{
              title: "Loja da Jess",
              headerStyle: {
                backgroundColor: "#D0571A",
              },
              headerTintColor: "#F0F1F2",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name='Products' component={ProductsList}
            options={({ navigation }) => ({
              title: 'Produtos',
              headerStyle: {
                backgroundColor: "#D0571A",
              },
              headerTintColor: "#F0F1F2",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => <CartIcon navigation={navigation} />
            })} />
          <Stack.Screen name='ProductDetails' component={ProductDetails}
            options={({ navigation }) => ({
              title: 'Detalhes do Produto',
              headerStyle: {
                backgroundColor: "#D0571A",
              },
              headerTintColor: "#F0F1F2",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              
              headerRight: () => <CartIcon navigation={navigation} />,
            })} />
          <Stack.Screen name='Cart' component={Cart}
            options={({ navigation }) => ({
              title: 'Carrinho', headerStyle: {
                backgroundColor: "#D0571A",
              },
              headerTintColor: "#F0F1F2",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => <CartIcon navigation={navigation} />,
            })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}



export default App;