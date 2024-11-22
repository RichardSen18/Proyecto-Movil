import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Product_container from "../components/layout/Product_container";
import { Product_item } from "../components/layout/Product_item";
import { Header } from "../components/layout/";

import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default function Home({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    console.log("Filter selected:", value);
  };

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <Product_container style={styles.productContainer}>
        <Product_item
          label={"Componente"}
          price={"$00.00"}
          navigation={navigation}
        />
        <Product_item
          label={"Componente"}
          price={"$00.00"}
          navigation={navigation}
        />
        <Product_item
          label={"Componente"}
          price={"$00.00"}
          navigation={navigation}
        />
        <Product_item
          label={"Componente"}
          price={"$00.00"}
          navigation={navigation}
        />
        <Product_item
          label={"Componente"}
          price={"$00.00"}
          navigation={navigation}
        />
      </Product_container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 5,
  },
  productContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 100,
    paddingBottom: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    marginRight: 210,
    flexDirection: "row",
    width: "40%",
    marginTop: -5,
    gap: 5,
    paddingBottom: 20,
  },
});
