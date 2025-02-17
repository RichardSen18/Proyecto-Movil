import { StyleSheet, ImageBackground, View, Text } from "react-native";

import { Content_signup, Header, Title } from "../components/layout";
import Button from "../components/controls/Button";
import FormItem from "../components/controls/Form_item";
import Colors from "../constants/Colors";

// Importamos la función de autenticación de Firebase
import { registerEmailPass } from "../services/firebase";
import { useState } from "react";

export default function Signup({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const registerUser = async () => {
    setLoading(true);
    const result = await registerEmailPass(user);
    if (result) {
      setUser({
        email: "",
        full_name: "",
        password: "",
      });
      setLoading(false);
      navigation.navigate("Login");
    } else {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header showBack={true} showCart={false} />
      <Content_signup>
        <Title title="Registrarme." />
        <FormItem
          value={user.name}
          label="Nombre de usuario"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, name: value }))
          }
        ></FormItem>
        <FormItem
          value={user.email}
          label="Correo electrónico"
          keyboardType="email-address"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, email: value.trim() }))
          }
        ></FormItem>
        <FormItem
          secure={true}
          label="Contraseña"
          value={user.password}
          onChange={(value) =>
            setUser((prev) => ({ ...prev, password: value.trim() }))
          }
        ></FormItem>
        <Button onPress={registerUser} label={"ACCEDER"} isLoading={loading} />
      </Content_signup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purple,
  },
});
