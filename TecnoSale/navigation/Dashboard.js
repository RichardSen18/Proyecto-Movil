import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.profileImage}
      />
      <Text style={styles.title}>Usuario</Text>
      {/* Botones para las opciones */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Dashboard() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 240, // Ancho del drawer
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e0e0e0",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  button: {
    backgroundColor: Colors.purple,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
