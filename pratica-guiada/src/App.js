import Turma from "./Componentes/Turma";
import styled from "styled-components";
import { GlobalStyled } from "./GlobalStyled";




const TextoVermelhor = styled.h1`
  color: red;
  background-color: black;
`;

function App() {
  const responsavel = "João";
  const nomeDaTurma = "Ammal";

  function apresentarTurma() {
    alert(`Bom dia turma! ${nomeDaTurma}`);
  }

  return (
    <div className="App">
      <GlobalStyled />
      <TextoVermelhor>BOM DIA!</TextoVermelhor>
      <Turma
        turma={nomeDaTurma}
        responsavel={responsavel}
        apresentar={apresentarTurma}
      />
    </div>
  );
}

export default App;
