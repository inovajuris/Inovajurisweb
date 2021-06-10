import React from "react";
import { Container } from "./styles";

const Planotexto: React.FC = () => {
  return (
    <Container>
      <h1> experimente pro 30 dias o</h1>
      <h1 className="app-inova-h1"> app inova juris!</h1>

      <p>
        Preencha o formulário e baixe agora mesmo o Trial do app
        <br /> Utilize gratuitamente todas as funcionalidades e descubra como
        transformar o relacionamento com o seu cliente!
      </p>
      <p>
        <p className="controle">
          <span>Controle seu escritório</span> através do seu smartphone.
        </p>
      </p>
      <em>Inova Juris, o seu escritório jurídico na palma de sua mão.</em>
    </Container>
  );
};

export default Planotexto;
