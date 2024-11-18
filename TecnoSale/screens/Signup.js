import { StyleSheet, ImageBackground } from "react-native";

import { Content, Header, Wrapper, Title } from "../components/layout";
import Button from "../components/controls/Button";
import FormItem from "../components/controls/Form_item";
import Colors from "../constants/Colors";

export default function Signup({ navigation }) {
  const goToHome = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <Wrapper backgroundColor={Colors.purple}>
      <Header showBack={true} showCart={false} />
      <ImageBackground
        style={styles.background}
        source={require("../assets/icon.png")}
      ></ImageBackground>
      <Content>
        <Title title="Registrarme." />
        <FormItem label="Nombre de usuario"></FormItem>
        <FormItem label="Contraseña"></FormItem>
        <Button label="ACCEDER" onPress={goToHome} />
      </Content>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  background: {
    marginBottom: 20,
    marginTop: 50,
    width: "100%",
  },
});