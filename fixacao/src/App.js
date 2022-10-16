import Garagem from "./Componentes/Garagem";
import "./styles.css";
import { GlobalStyled } from "./GlobalStyled";

export default function App() {
  const nome = "Amma";
  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyled />
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}
