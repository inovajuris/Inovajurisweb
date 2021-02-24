//2846445278933444
import React, { useState, useCallback, useRef } from "react";

import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import getValidationErrors from "../../utils/getValidationErros";
import FacebookLogin from "react-facebook-login";
import { useToast } from "../../hooks/toast";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
import * as Yup from "yup";

import { FiEyeOff } from "react-icons/fi";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import { FormHandles } from "@unform/core";
import Input from "../../Components/Input";
import { Link, useHistory } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import Logo from "../../assets/principal.png";
import Inovaback from '../../assets/Juris.png';
import {
  Container,
  Blue,
  HeaderContainer,
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  Dropdown,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavItems,
} from "./styles";


const Empresa: React.FC = ({ children }) => {

    const [isShow, setIsShow] = useState(false);
 




  return (
      
    <div>
       <HeaderContainer>
      <Nav>
        <NavItems>
          <button className="btnimg">
            <a href="/home">
              <img src={Logo} height={85} className="logo" />
            </a>
          </button>

          <NavMenu>
            <NavLink to="/" className="cool-link1">
              Produto Inova Juris
            </NavLink>
          
        
          </NavMenu>
        </NavItems>

        {children ? (
          children
        ) : (
          <NavItems>
            <NavBtnLink to="/singin">
              <a href="/novocadastro">{/* <FiShoppingCart size={24} /> */}</a>
            </NavBtnLink>
            <Dropdown>
              <DropdownToggle onClick={() => setIsShow(!isShow)}>
                {/* <Bars /> */}
              </DropdownToggle>
              {/* {isShow && (
                <DropdownContainer>
                  <DropdownMenu>
                    <DropdownItem>
                      <a
                        href="/about"
                        className="cool-DropdownItDropdownItemnk1"
                      >
                       P
                      </a>
                      <hr className="linha" />
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/about" className="cool-link1">
                        Casos de Sucesso
                      </a>
                      <hr className="linha" />
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/about" className="cool-link1">
                        Perguntas Frequentes
                      </a>
                      <hr className="linha" />
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/about" className="cool-link3">
                        Site da Empresa/Produto
                      </a>
                    </DropdownItem>
                  </DropdownMenu>
                </DropdownContainer>
              )} */}
            </Dropdown>
          </NavItems>
        )}
      </Nav>
    </HeaderContainer>

      <Container>
        <Blue>
          <div className="curva">
            <img src={Inovaback} className="fotoinova"></img>
     <h1>A Inova Juris é uma empresa focada em tecnologia para a área jurídica.
Criamos ferramentas e processos para auxiliar escritórios de advocacia em sua jornada de cresimento
Ajudamos nas tarefas do dia-a-dia e na sua relação com seus clientes.
Nossa missão é prover siluções eficientes que visam ajudar a vida dos advogados e seus clientes.</h1>
<p>Conheça nosso produto Inova Juris:</p>
          <section className="textos">
<h1>

<strong>-Aumento dos Honorários</strong>:
<br/>
<p>Através do App Inova Juris, seu escritório estará disponível para seus clientes 24horas por dia, facilitando 
a contratação de serviços jurídicos.
</p>
<br/>
<strong>-Visibilidade do seu escritório:</strong>
<br/>
<p>Quando o ícone do App Inova Juris aparece na tela do smartphone, seu cliente lembrará de voçê e dos seus serviços
jurídicos.</p>
<br/>
<strong>-Fidelização de clientes:</strong>
<br/>
<p>
Quem baixar o App Inova Juris, lembrará dos seus serviços jurídicos e, sempre que precisar de algo 
relacionado aos seus serviços, estará muito inclinado a procurá-lo nos momentos de dúvidas, de resolução
de problemas ou para economizar tempo.
</p>
<br/>
<strong>-Facilidade de obter informações:</strong>
<br/>
<p>Se as pessoas precisam ter acesso fácil a determinadas informações sobre a seu escritório, o app ajuda muito nisso tembém.Voçê
pode oferecer todas as funcionalidades ao seu cliente.</p>
<br/>

<strong>-Canal de atendimento direto:</strong>
<p>A grane sacada de um bom aplictivo é ser útil para o usuário. Encurtar caminhos, como facilidade para 
obter respostas sem precisar telefonar, criar um canal para tirar dúvidas, enfim.Tudo isso pode ser visto
com bons olhos pelo cliente.</p>
<br/>
<strong>-Oferecer uma experiência única:</strong>
<br/>
<p>Se o seu objetivo também é ofercer algo único para seus clientes, aposte no App Inova Juris em sua estratégia de marketing digital.
Um dos motivos para a sua dúvida do porque ter um aplicativo para o seu escritório é ofercer aos usuários um experiência nova, inovadora e diferenciada
enquanto eles navegam em seus tablets ou smartphones.
Isso porque os aplicativos permitem facilidade em uma série de aspectos: a interação e engajamento são maiores,
o tempo para carregamento é mais curto e a própria experiência é mais proveitosa. Além disso, cirar um app é uma forma de mostrar ao seu clinente que você
quer ter um contato mais intimista,porém,sem deixar de respeitar seu tempo.</p>
<br/>
</h1>
          </section>
          
          </div>
        </Blue>
      </Container>
    </div>
  );
};

export default Empresa;
