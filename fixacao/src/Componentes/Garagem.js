import Carro from "./Carro";
import { ButtonGaragem } from "./GaragemStyled";
import { ContainerGaragem} from "./GaragemStyled"

function Garagem(props) {
  return (
    <div>
      <ContainerGaragem>
      <h1>Garagem da {props.nome}</h1>
      <ButtonGaragem onClick={props.mensagemAprentacao}>Mensagem</ButtonGaragem>
      <Carro
        adicionadoPor={props.nome}
        cor={"Vermelho"}
        ano={2022}
        flex={"true"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Verde"}
        ano={2020}
        flex={"false"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Amarelo"}
        ano={2009}
        flex={"false"}
      />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </ContainerGaragem>
    </div>
  );
}

export default Garagem;
