import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Title, SubTitle } from '../components/layout/Titles';
import Product_container from '../components/layout/Product_container';
import { Product_item_card } from '../components/layout/Product_item_card';

export default function Cart() {
  return (
    <View style={styles.container}>
      <Title label={"Your Cart"} />
      <SubTitle label={"Your Products:"} />

      {/* ScrollView permite que el contenido sea desplazable */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Product_container>
          <Product_item_card label={"cerveza"} price={"$55555"} />
          <Product_item_card label={"cerveza"} price={"$55555"} />
          <Product_item_card label={"cerveza"} price={"$55555"} />
          <Product_item_card label={"cerveza"} price={"$55555"} />
          <Product_item_card label={"cerveza"} price={"$55555"} />
          <Product_item_card label={"cerveza"} price={"$55555"} />
        </Product_container>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Hace que el contenedor principal ocupe toda la pantalla
    backgroundColor: '#fff', // Fondo blanco o el color que prefieras
  },
  scrollContent: {
    paddingBottom: 20, // Espacio al final para que el último producto no quede pegado
  },
});