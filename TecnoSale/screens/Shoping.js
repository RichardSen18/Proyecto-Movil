import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "../components/controls/Button";
import { Header } from "../components/layout/";

export default function Carrito() {
  // Datos de ejemplo estáticos
  const cartItems = [
    {
      id: "1",
      name: "Producto A",
      price: "$50",
      image: "https://via.placeholder.com/100",
    },
    {
      id: "2",
      name: "Producto B",
      price: "$30",
      image: "https://via.placeholder.com/100",
    },
    {
      id: "3",
      name: "Producto C",
      price: "$20",
      image: "https://via.placeholder.com/100",
    },
  ];

  // Renderiza cada producto de manera visual
  const renderCartItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.removeButton}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Carrito" showBack={true} showCart={false} />
      <View style={styles.container2}>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: $100</Text>
          <Button label="Pagar" />
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
  },
  removeButton: {
    fontSize: 14,
    color: "red",
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  checkoutButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
