import styled from "styled-components";
import { DrawCadastro } from "../../styles/icons";
import { Lock } from "../../styles/icons";
import { Go } from "../../styles/icons";
import { face } from "../../styles/icons";
import { GoogleLogin as CustomGoogleLogin } from "react-google-login";
import Inovaback from '../../assets/inova.Juris.png';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  /* max-width: 1370px; */
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
  flex-direction: column;
  background-color: #fff;

  border-radius: 5px 10px 10px 5px;

  width: 100%;
  height: 510px;

  margin-top:680px;
  background-image: url('../../assets/inova.Juris.png');
.curva{
  display:flex;
  position:relative;
justify-content:center;
align-items:center;
flex-direction:column;
/* overflow:hidden;
  background: -webkit-linear-gradient(bottom,  #e95a0c, #e13d8d,#694896, #2e1f43 );
background: -moz-linear-gradient(bottom, #e95a0c, #e13d8d,#694896, #2e1f43);
background: linear-gradient(130deg, #FF750C -30%, #e13d8d 55%,#694896,#2e1f43); */

width:100%;

height:500px;

h1{
  margin-top:20px;
  font-size:20px;
  max-width:1000px;
}
p{
  margin-top:20px;
  font-size:20px;
  max-width:1000px
}
.fotoinova{
  width:1000px;
  height:500px;
}


section{
  display:flex;
  position:relative;
justify-content:center;
align-items:center;

  margin-top:20px;
  max-width:1000px;
font-size:10px;
width:100%;
h1{
  
  font-size:20px;
  max-width:1000px;
  font-weight:400;
  line-height:35px;
  p{
    margin-top:-2px;
    line-height:30px;
  }
}
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

  
 
    
  @media screen and (max-width: 900px) {
    
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;

  border-radius: 5px 10px 10px 5px;

  width: 100%;
  height: 600px;

  margin-top:700px;
  background-image: url('../../assets/inova.Juris.png');
.curva{
  display:flex;
  position:relative;
justify-content:center;
align-items:center;
flex-direction:column;
/* overflow:hidden;
  background: -webkit-linear-gradient(bottom,  #e95a0c, #e13d8d,#694896, #2e1f43 );
background: -moz-linear-gradient(bottom, #e95a0c, #e13d8d,#694896, #2e1f43);
background: linear-gradient(130deg, #FF750C -30%, #e13d8d 55%,#694896,#2e1f43); */

width:100%;

height:500px;

h1{
  margin-top:20px;
  font-size:20px;
  max-width:1000px;
}
p{
  margin-top:20px;
  font-size:20px;
  max-width:1000px
}
.fotoinova{
  width:1000px;
  height:540px;
}


section{
  display:flex;
  position:relative;
justify-content:center;
align-items:center;

  margin-top:20px;
  max-width:1000px;
font-size:10px;
width:100%;
h1{
  
  font-size:20px;
  max-width:1000px;
  font-weight:400;
  line-height:35px;
  p{
    line-height:30px;
  }
}
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

  
 
    
  @media screen and (max-width: 576px) {
    
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;

  border-radius: 5px 10px 10px 5px;

  width: 100%;
  height: 600px;

  margin-top:700px;
  background-image: url('../../assets/inova.Juris.png');
.curva{
  display:flex;
  position:relative;
justify-content:center;
align-items:center;
flex-direction:column;
/* overflow:hidden;
  background: -webkit-linear-gradient(bottom,  #e95a0c, #e13d8d,#694896, #2e1f43 );
background: -moz-linear-gradient(bottom, #e95a0c, #e13d8d,#694896, #2e1f43);
background: linear-gradient(130deg, #FF750C -30%, #e13d8d 55%,#694896,#2e1f43); */

width:100%;

height:500px;

h1{
  margin-top:20px;
  font-size:20px;
  max-width:1000px;
}
p{
  margin-top:20px;
  font-size:20px;
  max-width:1000px
}
.fotoinova{
  width:1000px;
  height:540px;
}


section{
  display:flex;
  position:relative;
justify-content:center;
align-items:center;

  margin-top:20px;
  max-width:1000px;
font-size:10px;
width:100%;
h1{
  
  font-size:20px;
  max-width:1000px;
  font-weight:400;
  line-height:35px;
  p{
    line-height:30px;
  }
}
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

  
 
  }}
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
  background: #fff ;
/* background: -webkit-linear-gradient(bottom,  #e95a0c, #e13d8d,#694896, #2e1f43 );
background: -moz-linear-gradient(bottom, #e95a0c, #e13d8d,#694896, #2e1f43);
background: linear-gradient(130deg, #FF750C -30%, #e13d8d 74%,#694896); */



  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom: 0.2px solid #fff  ; */
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
  color: #8A44C4;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  cursor: pointer;
  font-family:"Muli";
  &.active {
    color: #8A44C4;
  }

  &:hover {
    color: #8A44C4;
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
