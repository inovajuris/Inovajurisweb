import React, { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";

import {
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
// @ts-ignore
import Logo from "../../assets/principal.png";
const Header: React.FC = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <HeaderContainer>
      <Nav>
        <NavItems>
          <button className="btnimg">
            <a href="/home">
              <img src={Logo} height={85} className="logo" />
            </a>
          </button>

          <NavMenu>
            <NavLink
              href="https://www.inovajuris.com.br/"
              className="cool-link1"
            >
              Site da Empresa/Produto
            </NavLink>
            <NavLink
              href="https://www.inovajuris.com.br/#planos"
              className="cool-link"
            >
              Planos
            </NavLink>
            <NavLink
              href="https://www.inovajuris.com.br/funcionalidades/#faq"
              className="cool-link2"
            >
              Perguntas Frequentes
            </NavLink>
            {/* <NavLink to="#" className="cool-link3">
              Casos de Sucesso
            </NavLink> */}
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
                        href="https://www.inovajuris.com.br/#planos"
                        className="cool-DropdownItDropdownItemnk1"
                      >
                        Planos
                      </a>
                      <hr className="linha" />
                    </DropdownItem>

                    <DropdownItem>
                      <a
                        href="https://www.inovajuris.com.br/funcionalidades/#faq"
                        className="cool-link1"
                      >
                        Perguntas Frequentes
                      </a>
                      <hr className="linha" />
                    </DropdownItem>
                    <DropdownItem>
                      <a
                        href="https://www.inovajuris.com.br/"
                        className="cool-link3"
                      >
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
  );
};

export default Header;
