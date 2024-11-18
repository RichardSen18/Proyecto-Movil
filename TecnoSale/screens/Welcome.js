import { ImageBackground, StyleSheet } from "react-native";

import { Content, Wrapper, Title, Logo } from "../components/layout";
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
    <Wrapper backgroundColor={Colors.purple}>
      <Content>
        <ImageBackground
          style={styles.background}
          source={require("../assets/images/Fondo.jpeg")}
        >
          <Logo type="black" />
        </ImageBackground>

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
      </Content>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  background: {
    marginBottom: 50,
    borderRadius: 20,
    marginTop: 40,
    width: "100%",
  },
});
