import React from "react";
import Topo from "./componentes/topo/topo";
import Conteudo from "./componentes/Conteudo/conteudo";
import RodaPe from "./componentes/Conteudo/RodaPe/RodaPe";
import './App.css';

function Pagina() {
  return (
    <div>
      <Topo />
      <Conteudo />
      <RodaPe />
    </div>
  )
};

export default Pagina;