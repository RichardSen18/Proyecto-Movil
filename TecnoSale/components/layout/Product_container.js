import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Wrapper2 } from "./Wrapper";

const { width } = Dimensions.get("window");

export default function Product_container({ children }) {
  return (
    <Wrapper2>
      <View style={styles.container}>{children}</View>
    </Wrapper2>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
    rowGap: 20,
  },
});
