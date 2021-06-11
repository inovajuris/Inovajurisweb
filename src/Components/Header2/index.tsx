import React, { useState } from "react";

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

import Logo from "../../assets/logoinovajuris.png";
const Header: React.FC = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <HeaderContainer>
      <Nav>
        <NavItems>
          <button className="btnimg">
            <a href="/home">
              <img src={Logo} height={50} className="logo" />
            </a>
          </button>

          <NavMenu>
            <NavLink
              href="https://www.inovajuris.com.br/"
              className="cool-link1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site da Empresa/Produto
            </NavLink>
            <NavLink
              href="https://www.inovajuris.com.br/#planos"
              className="cool-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Planos
            </NavLink>
            <NavLink
              href="https://www.inovajuris.com.br/funcionalidades/#faq"
              className="cool-link2"
              target="_blank"
              rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Planos
                      </a>
                      <hr className="linha" />
                    </DropdownItem>

                    <DropdownItem>
                      <a
                        href="https://www.inovajuris.com.br/funcionalidades/#faq"
                        className="cool-link1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Perguntas Frequentes
                      </a>
                      <hr className="linha" />
                    </DropdownItem>
                    <DropdownItem>
                      <a
                        href="https://www.inovajuris.com.br/"
                        className="cool-link3"
                        target="_blank"
                        rel="noopener noreferrer"
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
