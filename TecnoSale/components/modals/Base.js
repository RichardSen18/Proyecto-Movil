import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

export function Base({ id, title, visible, children, onCloser }) {
  return (
    <Modal
    key={id}
      animationType="fade"
      transparent={true}
      visible={Visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity />
      <View>
        <View>
          <Text></Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
