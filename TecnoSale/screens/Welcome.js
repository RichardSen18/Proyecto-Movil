import { ImageBackground, StyleSheet, View } from "react-native";

import { Content_welcome, Wrapper, Title, Logo } from "../components/layout";
import Button from "../components/controls/Button";
import Colors from "../constants/Colors";

export default function Welcome({ navigation }) {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/fondo-welcome.jpg")}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Content_welcome>
          <Logo type="black" />

          <Title color={Colors.purple} title="Bienvenido a TecnoSale" />

          <Button
            style={styles.boton}
            onPress={goToLogin}
            label={"Iniciar Sesión"}
            type="white"
          />
          <Button
            style={styles.boton}
            onPress={goToSignup}
            label={"Registrarme"}
            type="white"
          />
        </Content_welcome>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "90%",
    height: "80%",
  },
});
