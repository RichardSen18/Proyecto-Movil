import { StyleSheet, Image, View, Text } from "react-native";

import {
  Content_login,
  Header,
  Wrapper,
  Title,
  Logo,
} from "../components/layout";
import Button from "../components/controls/Button";
import FormItem from "../components/controls/Form_item";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default function Login({ navigation }) {
  const goToHome = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Header showBack={true} showCart={false} />
      <View style={styles.container_logo}>
        <Logo type="black" />
      </View>

      <Content_login>
        <Title title="Iniciar Sesión" />
        <FormItem label="Nombre de usuario" style= {styles.texto}></FormItem>
        <FormItem label="Contraseña"></FormItem>
        <Button label="ACCEDER" onPress={goToHome} />
      </Content_login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purple
  },
  imagen: {
    marginBottom: 20,
    marginTop: 50,
    width: "20%",
  },
  container_logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "40%",
  },
  logo: {
    flex: 1,
    paddingBottom: 100,
    with: "10%",
    height: "10%",
  },
  texto: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.family.regular,
  }
});
