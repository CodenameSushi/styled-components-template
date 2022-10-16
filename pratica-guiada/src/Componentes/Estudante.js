import { EstudanteContainer } from "./EstudanteStyled"

function Estudante(props) {
  return (
    <div>
      <EstudanteContainer>
      <ul>
        <li>nome: {props.nome}</li>
        <li>idade: {props.idade}</li>
        <li>corDaRoupa:{props.corDaRoupa}</li>
        <li>criadoPor:{props.criadoPor}</li>
      </ul>
      </EstudanteContainer>
    </div>
  );
}

export default Estudante;
