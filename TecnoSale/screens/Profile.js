import FormItem from "../components/controls/Form_item";
import { Content, Header, Wrapper } from "../components/layout/";

export default function Profile() {
  return (
    <Wrapper>
      <Header title="Perfil" showBack={true} />
      <Content>
        <FormItem label={"Correo electrónico"} />
        <FormItem label={"Nombre Completo"} />
        <FormItem label={"Teléfono"} />
      </Content>
    </Wrapper>
  );
}
