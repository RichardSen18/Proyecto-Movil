import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from "../components/layout/";
import Button from "../components/controls/Button";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default function ProductScreen() {
  // Datos simulados del producto
  const product = {
    id: "1",
    name: "Componente",
    price: "$50",
    description: "Descripcion del producto",
    image: "https://i.pinimg.com/736x/e3/de/d6/e3ded6b09a25c557fe2277a63bbc123f.jpg",
  };

  return (
    <View style={styles.container}>
      <Header title="Producto" showBack={true} showCart={true} />
      <View style={styles.container2}>
        {/* Nombre del producto */}
        <Text style={styles.productName}>{product.name}</Text>

        {/* Imagen del producto */}
        <Image source={{ uri: product.image }} style={styles.productImage} />

        {/* Precio del producto */}
        <Text style={styles.productPrice}>{product.price}</Text>

        {/* Descripción */}
        <Text style={styles.productDescription}>{product.description}</Text>

        {/* Botón para añadir al carrito */}
        <View style={styles.addButton}>
          <Button label="Añadir al carrito" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    alignItems: "center",
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: Fonts.size.large,
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: 25,
    textAlign: "center",
  },
  productPrice: {
    fontSize: Fonts.size.large,
    fontWeight: "bold",
    color: Colors.purple,
    marginBottom: 20,
    textAlign: "center",
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  addButton: {
    flex: 1,
    width: "70%",
  },
});
