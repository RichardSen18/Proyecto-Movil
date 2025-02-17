import { Content, Header, Wrapper } from "../components/layout/";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../components/controls/Button";
import Colors from "../constants/Colors";
import FormItemDos from "../components/controls/Form_item";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { logoutAuth } from "../services/firebase";

export default function Profile({ navigation }) {
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (response) => {
      if (!response) {
        navigation.navigate("Login");
      }
    });
    return subscriber;
  }, [auth]);

  const logout = async () => {
    await logoutAuth();
  };

  return (
    <Wrapper backgroundColor={Colors.purple}>
      {/* Encabezado */}
      <Header title="Perfil" showBack={true} />

      <Content>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg",
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar Foto</Text>
          </TouchableOpacity>
        </View>

        <FormItemDos label="Correo electrónico" />
        <FormItemDos label="Nombre Completo" />
        <FormItemDos label="Teléfono" />
        <FormItemDos label="Fecha de Nacimiento" />
        <FormItemDos label="Dirección" />

        <View style={styles.actionsContainer}>
          <Button
            label="Guardar Cambios"
            onPress={() => alert("Cambios guardados")}
          />
          <Button label="Cerrar Sesión" onPress={logout} />
        </View>
      </Content>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#6200EA",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  actionsContainer: {
    width: "100%",
    marginTop: 20,
    gap: 10, // Espaciado entre botones
  },
});
