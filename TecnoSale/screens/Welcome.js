import { ImageBackground, StyleSheet } from 'react-native';

import { Content, Wrapper, Title, Logo } from '../components/layout';
import Button from '../components/controls/Button';
import Colors from '../constants/Colors';

export default function Welcome({ navigation }) {
  const goToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <Wrapper backgroundColor={Colors.purple}>
      <Content>
        <ImageBackground
          style={styles.background}
          source={require('../assets/images/Fondo.jpeg')}
        >
          <Logo type="white" />
        </ImageBackground>
        <Title color={Colors.white} title="Bienvenid@ a TecnoSale" />
        <Button style={styles.boton} onPress={goToLogin} label={"Iniciar Sesion"} type="white" />

      </Content>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  background: {
    marginBottom: 20,
    marginTop: 50,
    width: '100%',
  },
  boton: {
    margin: 10,
  }
})