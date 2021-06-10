import React from "react";

import { Container } from "./styles";

const Betatext: React.FC = () => {
  return (
    <Container>
      <h1>
        {" "}
        PARABÉNS, você acaba de
        <br /> receber um convite especial!
      </h1>
      <h1 className="experimente-titulo">
        Experimente agora o<br />
        <span>Inova Juris Beta!</span>
      </h1>
      <p>
        Preencha o formulário e baixe agora mesmo a versão beta <br />
        do app Inova Juris.
      </p>
      <p>
        Controle seu escritório atrvés do seu smartphone e ao
        <br />
        final da jornada{" "}
        <strong className="oferta">
          receba uma oferta <span>exclusiva!</span>
        </strong>
      </p>
      <em>Inova Juris, o seu escritório jurídico na palma de sua mão.</em>
    </Container>
  );
};

export default Betatext;
