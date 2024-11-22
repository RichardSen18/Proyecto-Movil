import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Signup from "../screens/Signup";
import Shoping from "../screens/Shoping";
import Producto from "../screens/Producto"

const Stack = createNativeStackNavigator();

export default function External() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Producto"
        component={Producto}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
