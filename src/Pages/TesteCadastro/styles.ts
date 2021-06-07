import styled, { css } from "styled-components";
import { DrawCadastro } from "../../styles/icons";
import { Go } from "../../styles/icons";
import { Lock } from "../../styles/icons";
import { GoogleLogin as CustomGoogleLogin } from "react-google-login";
import { face } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  max-width: 1350px;
  margin-left: 50%;
  margin-top: 10%;
  width: 2000px;
  z-index: 999;
  /* background-color: #000; */
  @media (max-width: 1400px) {
    /* margin-top: 20%; */
    height: 100%;
    margin-top: 15%;
    min-height: 100%;
    width: 100%;
    position: absolute;
    z-index: 999;
    margin-left: 25%;
    /* background-color: #000; */
  }

  @media (max-width: 600px) {
    display: flex;
    /* background-color: #4343; */
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 50px;
    margin: 0%;
    margin-top: 450px;
    margin-left: 0%;
    width: 100%;
    z-index: 999;
  }
  position: absolute;
  /* background-color: #000; */
`;

export const Fundo = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivPrincipal = styled.div`
  height: 100%;
  min-height: 100%;
  justify-content: center;
  width: 1000px;
  /* background-color: #000; */
  position: absolute;

  @media (max-width: 1400px) {
    height: 100%;
    /* min-height: 100%; */
    width: 100%;
    position: absolute;
    overflow: auto;
    /* background-color: #000; */
    /* overflow: auto; */
  }
  @media (max-width: 600px) {
    height: 100%;
    /* min-height: 100%; */
    width: 90%;
    position: absolute;
    overflow: auto;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;

  /* border-radius: 5px; */
  padding: 10px;
  justify-content: center;
  background-color: #fff;
  width: 30%;
  position: absolute;
  /* border-radius: 2px; */

  /* border-color: #e03f8e;
  -webkit-box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);
  box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36); */
  margin-right: 80%;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  #titulo {
    font-weight: bold;
  }
  @media (max-width: 600px) {
    display: flex;

    height: 70%;
    margin-top: auto;
    margin-bottom: 500px;
    position: relative;
    margin: 0 auto;
    padding-top: 35%;
    padding-bottom: 35%;
    width: 100%;
  }
`;

export const Cabe = styled.div`
  #wave {
    position: relative;
    height: 200px;
    width: 100%;
    background: #e0efe3;
  }

  #wave:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 900px;
    height: 400px;
    background-color: #fff;
    right: 200px;
    top: 150px;
  }

  #wave:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 965px;
    height: 300px;
    background-color: #e0efe3;
    left: 0;
    top: 0px;
  }
`;

export const Blue = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #854;
  border-radius: 6px;
  position: absolute;
  border: solid;
  border-color: #f0f0eb;
  -webkit-box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);
  box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);

  width: 30%;
  height: 600px;

  /* margin-top: 85px; */
  margin-left: 1%;
  .radiobtn {
    color: #e03f8e;
    svg {
      color: #e03f8e;
    }
  }
  .div4 {
    margin-top: -0%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
  select {
    background-color: #fff;
    padding-left: 5px;
    position: relative;

    margin-top: 5px;
    width: 100%;
    height: 40px;
    border-radius: 5px;

    outline: 0;
    display: flex;
    align-items: center;
    border: 1px solid #c4c4c4;
  }
  .qtd {
    /* background-color:red; */
    width: 100%;
    margin-left: 6%;
  }
  .radio {
    display: flex;
    justify-content: center;

    margin-right: 2%;
  }
  .radiocor {
    color: #e03f8e;
    svg {
      color: #e03f8e;
    }
  }
  .inputsel1 {
    width: 99%;
    margin-right: 90px;
    display: flex;

    justify-content: center;
    align-items: center;
  }
  .policticablue {
    font-size: 17px;
    color: #e03f8e;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
  }
  .politica {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .inputsel2 {
    width: 95%;
    margin-left: 10px;
    display: flex;

    justify-content: center;
    align-items: center;
  }

  .div5 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
  .formBox {
    display: flex;
    padding: 17px;

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
    margin-top: 6px;
    font-size: 29px;
    text-align: center;
    font-weight: 400;
  }
  h4 {
    margin-top: 0px;
    font-weight: 400;
  }
  form {
    margin-top: 4%;
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
      margin-top: 24px;
      background-color: #e03f8e;
    }

    .cadastre {
      width: 100%;
      margin-top: 16px;
      a {
        font-weight: 400;
        font-size: 20px;
        color: #101010;
        text-decoration: none;
        &:hover {
          color: #e03f8e;
        }
      }
    }
    .possuilogin {
      width: 100%;
      margin-top: 8px;
      a {
        font-weight: 400;
        font-size: 20px;
        color: #232326;
        text-decoration: none;
        &:hover {
          color: #e03f8e;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    position: relative;
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: row;
    /* background-color: #fff; */

    border-radius: 5px 10px 10px 5px;

    width: 50%;
    height: 600px;

    margin-top: 50px;
    .div4 {
      margin-top: -0%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }
    .radio {
      display: flex;
      justify-content: center;
      width: 100%;

      margin-right: 0%;

      margin-top: 40%;
      .pessoafisica {
        font-size: 22px;
      }
      .pessoajuridica {
        font-size: 22px;
      }
    }
    select {
      background-color: #fff;
      padding-left: 5px;
      position: relative;

      margin-top: 5px;
      width: 100%;
      height: 40px;
      border-radius: 5px;

      outline: 0;
      display: flex;
      align-items: center;
      border: 1px solid #c4c4c4;
    }
    .inputsel1 {
      width: 100%;
      margin-right: 112px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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
      margin-top: 1px;
      font-size: 32px;
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
            color: #e03f8e;
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
            color: #e03f8e;
          }
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    position: relative;
    /* margin-top: 10px; */

    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #fff;

    border-radius: 5px 10px 10px 5px;

    width: 100%;
    height: 700px;

    margin-top: 0px;
    .inputsel1 {
      width: 100%;
      padding-top: 7px;
      margin-right: 112px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .formBox {
      display: flex;

      justify-content: center;
      flex-direction: column;
      width: 100%;

      background-color: #ffffff;

      border-radius: 0px 5px 5px 0px;
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
      margin-top: 160px;
      font-size: 28px;
      text-align: center;
      font-weight: 400;
    }
    .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 120%;

      margin-top: 40%;
      .pessoafisica {
        font-size: 18px;
      }
      .pessoajuridica {
        font-size: 18px;
      }
    }
    .policticablue {
      font-size: 17px;
      color: #e03f8e;
      font-weight: 400;
      cursor: pointer;
      text-decoration: none;
    }
    .politica {
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;
      width: 100%;
    }
    h4 {
      margin-top: 8px;
      font-weight: 400;
    }

    form {
      margin-top: -7%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100%;

      .input1 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
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
            color: #e03f8e;
          }
        }
      }
      .possuilogin {
        width: 100%;
        margin-top: 0px;
        a {
          font-weight: 500;
          font-size: 20px;
          color: #232326;
          text-decoration: none;
          &:hover {
            color: #e03f8e;
          }
        }
      }
    }
  }
`;

export const GoogleLogin = styled(CustomGoogleLogin)`
  background-color: red;
  margin-left: 200px;
  margin-top: -20%;
  position: fixed;
  > button {
    background-color: red;
    margin-top: -30%;
  }
`;
export const Entra = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -0.5%;
  margin-left: 250px;
  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    &:hover {
      color: #e03f8e;
    }
  }
`;

export const Draw = styled(DrawCadastro)``;
export const Facebokcion = styled(face)``;
export const Lockicon1 = styled(Lock)``;
export const Googleicon = styled(Go)``;
