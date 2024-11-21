import { StyleSheet, ImageBackground, View, Text } from "react-native";

import { Content_signup, Header, Title } from "../components/layout";
import Button from "../components/controls/Button";
import FormItem from "../components/controls/Form_item";
import Colors from "../constants/Colors";

export default function Signup({ navigation }) {
  const goToHome = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Header showBack={true} showCart={false} />
      <Content_signup>
        <Title title="Registrarme." />
        <FormItem label="Nombre de usuario"></FormItem>
        <FormItem label="Correo electronico"></FormItem>
        <FormItem label="Contraseña"></FormItem>
        <FormItem label="Confirmar contraseña"></FormItem>
        <Button label="ACCEDER" onPress={goToHome} />
      </Content_signup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purple
  },
});