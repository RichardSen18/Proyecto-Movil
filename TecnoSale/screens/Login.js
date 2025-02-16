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

// Importamos la función de autenticación de Firebase
import { auth } from "../firebase-config";
import { loginWithEmailPass } from "../services/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Nos suscribimos al evento que detecta cuando el usuario ya inicio sesión
    const subscriber = onAuthStateChanged(auth, (response) => {
      if (response) {
        navigation.navigate("Dashboard");
      }
    });
    return subscriber;
  }, [auth]);

  const login = async () => {
    if (user && pass) {
      setLoading(true);
      await loginWithEmailPass(user, pass);
      setUser("");
      setPass("");
      setLoading(false);
    }
  };

  const onChangeUser = (value) => {
    setUser(value);
  };

  const onChangePass = (value) => {
    setPass(value);
  };

  return (
    <View style={styles.container}>
      <Header showBack={true} showCart={false} />
      <View style={styles.container_logo}>
        <Logo type="black" />
      </View>

      <Content_login>
        <Title title="Iniciar Sesión" />
        <FormItem
          label="Nombre de usuario"
          keyboardType="email-address"
          onChange={onChangeUser}
          style={styles.texto}
        ></FormItem>
        <FormItem
          label="Contraseña"
          value={pass}
          secure={true}
          onChange={onChangePass}
        ></FormItem>
        <Button label="ACCEDER" onPress={login} isLoading={loading} />
      </Content_login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purple,
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
  },
});
