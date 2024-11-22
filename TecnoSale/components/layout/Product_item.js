import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ButtonClassTree } from "../controls/Button";
import { Product_image } from "./Product_image";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export function Product_item({ label, price, navigation }) {
  const gotoProducto = () => {
    navigation.navigate("Producto"); // Asegúrate de que 'Producto' esté definido en el Navigator
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Product_image />
      </View>

      {label && <Text style={styles.title}>{label}</Text>}
      {price && <Text style={styles.price}>{price}</Text>}

      <View style={styles.buttonContainer}>
        <ButtonClassTree label={"Add to cart"} onPress={gotoProducto} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: 10,
    backgroundColor: Colors.white,
    height: 300,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "70%",
    overflow: "hidden",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    height: 85,
    marginTop: 210,

    position: "absolute",
  },
  title: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.small,
    color: Colors.wine,
    textAlign: "center",
  },
  price: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.small,
    color: Colors.wine,
    textAlign: "center",
  },
});
