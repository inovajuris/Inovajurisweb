import styled from "styled-components";
import { DrawCadastro } from "../../styles/icons";
import { Lock } from "../../styles/icons";
import { Go } from "../../styles/icons";
import { face } from "../../styles/icons";
import { GoogleLogin as CustomGoogleLogin } from "react-google-login";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  max-width: 1350px;
  margin: 0 auto;
  width: 100%;
  z-index: 999;
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    height: 100%;

    margin: 0 auto;
    width: 100%;
    z-index: 999;
  }
`;
export const Blue = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #fff;

  border-radius: 5px 10px 10px 5px;

  width: 70%;
  height: 480px;

  margin-top:100px;

  .formBox {
    display: flex;
    padding: 17px;

    justify-content: center;
    flex-direction: column;
    width: 39%;
    background-color: #ffffff;
    border-radius: 0px 5px 5px 0px;

    .redessociais {
      position: relative;
      display: flex;
      align-items: center;

      .btngoogle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60.5px;
        margin-top: 8px;

        cursor: pointer;
      }
      .facebook {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;
        width: 64.5px;

        cursor: pointer;
      }
    }
  }
  
  h2 {
    color: #141414;
    width: 100%;
    height: 20.7px;
    font-weight: 400;
    font-size: 17px;
    margin-top: 13px;
  }
  h3 {
    margin-top: 16px;
    font-size: 30px;
    text-align: center;
    font-weight: 400;
  }
  h4 {
    margin-top: 8px;
    font-weight: 400;
  }
  form {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    .input1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & + div {
        margin-top: 4%;
        border: 1px solid #c4c4c4;
      }
    }
    button {
      width: fit-content;
      padding: 0 16px;
      width: 65%;
      height: 40px;
      text-align: center;
    }
    .btnazul {
      text-align: center;
      margin-top: 11%;
    
    }

    .cadastre {
      width: 100%;
      margin-top: 0px;
      a {
        font-weight: 400;
        font-size: 20px;
        color: #101010;
        text-decoration: none;
        &:hover {
          color:#941AF9;
        }
      }
    }
 
    .esqueci {
      width: 100%;
      margin-top: 0px;
      a {
        font-weight: 400;
        font-size: 20px;
        color: #232326;
        text-decoration: none;
        &:hover {
          color: #941AF9;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    position: relative;

    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #fff;

    border-radius: 5px 10px 10px 5px;

    width: 60%;
    height: 480px;

    margin-top: 100px;

    .formBox {
      display: flex;

      justify-content: center;
      flex-direction: column;
      width: 100%;
      background-color: #ffffff;

      border-radius: 0px 5px 5px 0px;

      .redessociais {
        position: relative;
        display: flex;
        align-items: center;

        .btngoogle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60.5px;
          margin-top: 8px;

          cursor: pointer;
        }
        .facebook {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
          width: 64.5px;

          cursor: pointer;
        }
      }
    }
    h2 {
      color: #141414;
      width: 100%;
      height: 20.7px;
      font-weight: 400;
      font-size: 17px;
      margin-top: 13px;
    }
    h3 {
      margin-top: 16px;
      font-size: 28px;
      text-align: center;
      font-weight: 400;
    }
    h4 {
      margin-top: 8px;
      font-weight: 400;
    }
    form {
      margin-top: 5%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;

      button {
        width: fit-content;
        padding: 0 16px;
        width: 65%;
        height: 40px;
        text-align: center;
      }
      .input1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & + div {
          margin-top: 4%;
          border: 1px solid #c4c4c4;
        }
      }
      input .cadastre {
        width: 100%;
        margin-top: 16px;
        a {
          font-weight: 450;
          font-size: 20px;
          color: #101010;
          text-decoration: none;
          &:hover {
            color: #941AF9;
          }
        }
      }
      .esqueci {
        width: 100%;
        margin-top: 0px;
        a {
          font-weight: 450;
          font-size: 20px;
          color: #232326;
          text-decoration: none;
          &:hover {
            color:  #941AF9;
          }
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    position: relative;

    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #fff;

    border-radius: 5px 10px 10px 5px;

    width: 100%;
    height: 560px;

    margin-top: 90px;

    .formBox {
      display: flex;

      justify-content: center;
      flex-direction: column;
      width: 100%;

      background-color: #ffffff;

      border-radius: 0px 5px 5px 0px;

      .redessociais {
        position: relative;
        display: flex;
        align-items: center;

        .btngoogle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60.5px;
          margin-top: 8px;

          cursor: pointer;
        }
        .facebook {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
          width: 64.5px;

          cursor: pointer;
        }
      }
    }
    h2 {
      color: #141414;
      width: 100%;
      height: 20.7px;
      font-weight: 400;
      font-size: 17px;
      margin-top: 13px;
    }
    h3 {
      margin-top: 16px;
      font-size: 28px;
      text-align: center;
      font-weight: 400;
    }
    h4 {
      margin-top: 8px;
      font-weight: 400;
    }

    form {
      margin-top: -10%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100%;

      button {
        width: fit-content;
        padding: 0 16px;
        width: 100%;
        height: 45px;
        text-align: center;
      }
      input {
        width: fit-content;

        width: 100%;
        height: 45px;
      }

      .input1 {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & + div {
          margin-top: 4%;
          border: 1px solid #c4c4c4;
        }
      }

      .cadastre {
        width: 100%;
        margin-top: 16px;

        a {
          font-weight: 500;

          font-size: 20px;
          color: #101010;
          text-decoration: none;
          &:hover {
            color:  #941AF9;
          }
        }
      }
      .esqueci {
        width: 100%;
        margin-top: 0px;
        a {
          font-weight: 500;
          font-size: 20px;
          color: #232326;
          text-decoration: none;
          &:hover {
            color:  #941AF9;
          }
        }
      }
    }
  }
`;

export const GoogleLogin = styled(CustomGoogleLogin)`
  background-color: red;
  margin-left: 200px;
  > button {
    background-color: red;
  }
`;
export const Draw = styled(DrawCadastro)`
  svg {
    width: 70px;
    height: 70px;
  }
`;
export const Entra = styled.div`
display:flex;
justify-content:center;


a{
  text-decoration:none;
  color:#000;
  font-size:20px;
}
`;

export const Lockicon1 = styled(Lock)``;
export const Googleicon = styled(Go)``;
export const Facebokcion = styled(face)``;

export const AnimationContainer = styled.div``;


import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px;
  position: relative;
  position: fixed;
  top: 0;
  z-index: 9999;

  .btnimg{
    outline:0;
    cursor:pointer;
  
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  color: #a4a4a4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 16px;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  cursor: pointer;
  font-family:"Muli";
  &.active {
    color: #74469A;
  }

  &:hover {
    color: #941AF9;
    text-decoration: underline;
  }
`;

export const Bars = styled(FaBars)`
  color: #000000;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
button{

  margin-left:-3%;
  margin-top:3px;
}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
margin-left:1%;
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
  top: 76px;
  width: 100%;
  max-width: 320px;

  z-index: 9999;
  background: #74469A;
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
    margin-left:0%;
    background: #941AF9;
    cursor: pointer;
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: #fff;
  }

  a {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    font-size: 20px;
    line-height: 35px;
        margin-left: 15px;
  }
`;
