import Estudante from "./Estudante";
import styled from "styled-components";

const ButtonApresenta = styled.button`
  background-color: orangered;
  border: 1px solid white;
  margin: 10px;
  padding: 12px;
`

const TurmaContainer = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Turma(props) {
  return (
    <div>
      <TurmaContainer>
      <h1>Turma {props.turma}</h1>
      <h4>Responsável:{props.responsavel}</h4>
      <ButtonApresenta onClick={props.apresentar}>Apresentar</ButtonApresenta>

      <Estudante
        nome={"Clarinha"}
        idade={40}
        corDaRoupa={"preta"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Marcelo"}
        idade={25}
        corDaRoupa={"azul"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Luiz"}
        idade={18}
        corDaRoupa={"verde"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Muri"}
        idade={39}
        corDaRoupa={"amarelo"}
        criadoPor={props.responsavel}
      />
      </TurmaContainer>
    </div>
  );
}

export default Turma;
