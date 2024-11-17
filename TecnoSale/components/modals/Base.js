import {
  Modal,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";

const { height, width } = Dimensions.get("window");

export default function Base({ id, title, visible, children, onClose }) {
  return (
    <Modal
      key={id}
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <View style={styles.centeredView}>
        
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={24} color={Colors.black} />
          </TouchableOpacity>

          {title && (
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
          )}
          
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    margin: 20,
    paddingBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 15,
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height,
    left: 0,
    position: "absolute",
    top: 0,
    width,
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1,
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
