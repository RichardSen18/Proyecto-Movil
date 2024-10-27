import { StyleSheet, ImageBackground } from 'react-native';

import { Content, Header, Wrapper, Title } from '../components/layout';
import Button from '../components/controls/Button';
import FormItem from '../components/controls/Form_item';
import Colors from '../constants/Colors';

export default function Login({ navigation }) {
  const goToHome = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <Wrapper>
      <Header showBack={true} showCart={false} />
      <ImageBackground
          style={styles.background}
          source={require('../assets/Icon_purple.png')}
        ></ImageBackground>
      <Content>
        <Title title="Estoy listo para comprar." />
        <FormItem label="Nombre de usuario"></FormItem>
        <FormItem label="Contraseña"></FormItem>
        <Button label="ACCEDER" onPress={goToHome} />
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

})
