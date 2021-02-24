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
            <NavLink to="#" className="cool-link1">
              Olamundo
            </NavLink>
            <NavLink to="/meuplano" className="cool-link">
              Planos
            </NavLink>
            <NavLink to="#" className="cool-link2">
              Perguntas Frequentes
            </NavLink>
            <NavLink to="#" className="cool-link3">
              Casos de Sucesso
            </NavLink>
            {/* <div>{children}</div> */}
            {/* <NavLink to="/about" className="cool-link4">
              Entrar
            </NavLink> */}
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
                <Bars />
              </DropdownToggle>
              {isShow && (
                <DropdownContainer>
                  <DropdownMenu>
                    <DropdownItem>
                      <a
                        href="/about"
                        className="cool-DropdownItDropdownItemnk1"
                      >
                        Planos
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
              )}
            </Dropdown>
          </NavItems>
        )}
      </Nav>
    </HeaderContainer>

      <Container>
        <Blue>
          <h1>Ola empresa</h1>
        </Blue>
      </Container>
    </div>
  );
};

export default Empresa;
