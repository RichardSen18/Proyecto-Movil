import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export function Header({ title, showBack = false, showCart = true }) {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  };

  const showDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="arrow-back-outline" size={50} color="black" />
      </TouchableOpacity>

      <View style={styles.container_logo}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Image
          style={styles.logo}
          sourse={require("../../assets/Icon_purple.png")}
        />
      </View>

      <TouchableOpacity>
        <EvilIcons name="cart" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    backgroundColor: Colors.white,
    borderColor: Colors.platinum,
    borderRadius: 20,
    borderWidth: 1,
    color: Colors.jet,
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.size.normal,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  container_logo: {
    alignItems: "center",
  },
  logo: {
    with: 50,
    height: 50,
  },

  textImput: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "purple",
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
  },
});
