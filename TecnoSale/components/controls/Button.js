import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function Button({
  label,
  type = "black",
  onPress,
  isLoading = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        type === "white" && styles.containerWhite,
        isLoading && styles.disableButton,
      ]}
      disabled={isLoading}
    >
      {isLoading && (
        <ActivityIndicator size="small" color={Colors.white} />
      )}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

export function ButtonClassTree({ label, type = "black", onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container2, type === "white" && styles.containerWhite]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.purple,
    borderRadius: 25,
    paddingVertical: 10,
    width: "100%",
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.normal,
  },
  containerWhite: {
    borderColor: Colors.purple,
    borderRadius: 10,
    borderWidth: 2,
  },
  container2: {
    alignItems: "center",
    backgroundColor: Colors.purple,
    borderRadius: 10,
    width: "90%",
    marginTop: 50,
  },
});
