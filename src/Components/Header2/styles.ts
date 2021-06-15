import styled from "styled-components";
import wave from "../../assets/testeImagem.svg";
import wave2 from "../../assets/ipadtesteImagem.svg";
import wave3 from "../../assets/mobileTesteImagem.svg";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 30%;

  max-width: 100%;
  /* background-image: linear-gradient(
    to right,
    #ee3e90 2%,
    #e0408b 10%,
    #884a96,
    #442c61
  ); */
  background: url(${wave}) no-repeat;
  background-size: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* box-shadow: 0px 0px 5px; */
  position: absolute;
  /* position: fixed; */
  top: 0;
  padding-top: 10px;
  z-index: 9999;

  .btnimg {
    outline: 0;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    height: 20%;

    background: url(${wave2}) no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    /* position: absolute; */

    top: 0;
    z-index: 9999;

    .btnimg {
      outline: 0;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 600px) {
    height: 30%;

    background: url(${wave3}) no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    /* position: relative; */

    top: 0;
    z-index: 9999;

    .btnimg {
      outline: 0;
      cursor: pointer;
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  margin-top: 1%;
  margin-left: 2%;
  max-width: 1440px;
  /* background-color: #000; */
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    gap: 200px;
    max-width: 700px;
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    padding: 13px 20px;
    gap: 30px;
    max-width: 450px;

    height: 100%;
  }
`;

export const NavLink = styled.a`
  color: #f7f7f7;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  padding-left: 50px;
  text-decoration: none;
  cursor: pointer;
  font-family: "Muli";
  &.active {
    color: #fff;
  }
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const Bars = styled(FaBars)`
  color: #fff;
  @media (max-width: 600px) {
    margin-top: 5px;
  }
  @media (max-width: 600px) {
    margin-top: 5px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: -3%;
    margin-top: 3px;
  }
  h1 {
    font-weight: 400;
  }
  @media (max-width: 600px) {
    margin-top: -5px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-left: 1%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px 0px;
  margin-right: 16px;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  svg {
    color: #000;
  }
  &:hover {
    svg {
      color: #007aff;
    }
  }
`;

export const Dropdown = styled.div`
  display: inline-block;
  @media (min-width: 901px) {
    display: none;
  }
`;

export const DropdownToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  width: 100%;
  max-width: 320px;
  z-index: 9999;
  background: #fff;
  border: 0;
  outline: 0;
  font: 500 16px Roboto;
  color: #f1f1f1;
  padding: 8px;
  display: flex;
  align-items: center;
  animation: drop 0.5s ease;
  @keyframes drop {
    0% {
      transform: translateX(160px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 600px) {
    top: 70px;
  }
`;

export const DropdownMenu = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const DropdownItem = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 32px;
  background: transparent;
  border: 0;
  outline: 0;
  color: #ffffff;
  &:hover {
    margin-left: 0%;
    background: #f9f9f9;
    cursor: pointer;
  }
  hr {
    width: 100%;
    height: 1px;
    background-color: #941af9;
  }
  a {
    color: #941af9;
    font-weight: 500;
    text-decoration: none;
    font-size: 20px;
    line-height: 35px;
    margin-left: 15px;
  }
`;
