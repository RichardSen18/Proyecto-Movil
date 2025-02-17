import { View, Text, TextInput, StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

export default function FormItem({
  label,
  onChange,
  keyboardType = "default",
  secure = false,
  value = "",
}) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "100%",
  },
  label: {
    color: Colors.black,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.family.regular,
    textAlign: "left",
  },
  input: {
    borderColor: Colors.purple,
    borderWidth: 1,
    borderRadius: 10,
    color: Colors.black,
    fontSize: Fonts.size.normal,
    paddingBottom: 5,
    paddingTop: 10,
  },
});
