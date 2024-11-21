import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export function Content({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export function Content_welcome({ children }) {
  return <View style={styles.welcome}>{children}</View>;
}

export function Content_login({ children }) {
  return <View style={styles.login}>{children}</View>;
}

export function Content_signup({ children }) {
  return <View style={styles.signup}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 20,
  },
  welcome: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 100,
    margin: 20,
    gap: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  login: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100,
    paddingHorizontal: 50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    gap: 10,
    width: "100%",
  },
  signup: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100,
    paddingHorizontal: 50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    gap: 10,
    width: "100%",
  },
});
