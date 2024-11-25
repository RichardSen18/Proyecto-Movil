import FormItem from "../components/controls/Form_item";
import { Content, Header, Wrapper } from "../components/layout/";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Button from '../components/controls/Button';
import Colors from "../constants/Colors";

export default function Profile() {
  return (
    <Wrapper backgroundColor={Colors.purple}>
      {/* Encabezado */}
      <Header title="Perfil" showBack={true} />

      <Content>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/e9/b9/44/e9b944514038b9a625512f7bfc52e283.jpg" }} // URL de ejemplo
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar Foto</Text>
          </TouchableOpacity>
        </View>

        <FormItem label="Correo electrónico" />
        <FormItem label="Nombre Completo" />
        <FormItem label="Teléfono" />
        <FormItem label="Fecha de Nacimiento" />
        <FormItem label="Dirección" />

        <View style={styles.actionsContainer}>
          <Button label="Guardar Cambios" onPress={() => alert("Cambios guardados")} />
          <Button label="Cerrar Sesión" onPress={() => alert("Sesión cerrada")} />
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
