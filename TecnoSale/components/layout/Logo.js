import { View, Image, Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;

export function Logo({
  type = 'black',
  width,
}) {
  const image = type === 'black' ? require('../../assets/icon.jpg') : require('../../assets/icon-white.jpg');
  const size = width || windowWidth * 0.6;

  return (
    <View style={styles.container}>
      <Image
        style={{
          height: size,
          width: size,
        }}
        source={image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});