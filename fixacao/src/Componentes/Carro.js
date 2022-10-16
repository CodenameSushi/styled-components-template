import { ContainerCarro } from "./CarroStyled"

function Carro(props) {
  console.log(props);
  return (
    <div>
      <ContainerCarro>
      <h2>Volksvagem</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>adicionadoPor: {props.adicionadoPor}</li>
      </ul>
      </ContainerCarro>
    </div>
  );
}

export default Carro;
