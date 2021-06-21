import styled, { css } from "styled-components";
import { DrawCadastro } from "../../styles/icons";
import { Go } from "../../styles/icons";
import { Lock } from "../../styles/icons";
import { GoogleLogin as CustomGoogleLogin } from "react-google-login";
import { face } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  max-width: 1350px;
  margin: 5% auto;
  width: 100%;
  z-index: 999;
  /* background-color: #000; */
  @media (max-width: 601px) {
    display: flex;
    justify-content: center;
    height: 100%;
    /* align-content: center; */
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    z-index: 999;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  line-height: 37px;
  padding: 5px 5px;
  /* margin-right: 150px; */
  justify-content: flex-start;
  margin-top: 12%;
  width: 500px;
  height: 100%;
  margin-left: 10%;
  /* font-family: "Raleway", sans-serif; */
  /* background-color: #000; */
  flex-direction: column;
  h1 {
    line-height: 41px;
  }
  #titulo {
    font-weight: bold;
    margin-bottom: 30px;
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin-bottom: 10%;
    line-height: 37px;
    padding: 5px 5px;
    margin-right: 0;
    justify-content: flex-start;

    width: 100%;
    height: 100%;

    flex-direction: column;
    h1 {
      line-height: 41px;
      font-family: "Raleway", sans-serif !important;
    }
    p {
      font-size: 25px;
      font-family: "Raleway", sans-serif !important;
    }
    #titulo {
      font-weight: bold;
      margin-bottom: 30px;
    }
    h4 {
      font-size: 22px;
      font-family: "Raleway", sans-serif !important;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    line-height: 28px;
    padding: 8px 5px;
    margin: 20% auto;
    justify-content: flex-start;
    flex-wrap: wrap;

    height: 100%;
    font-family: "Raleway", sans-serif !important;
    flex-direction: column;

    h1 {
      line-height: 30px;
      font-size: 25px;
      font-family: "Raleway", sans-serif !important;
    }
    p {
      font-size: 20px;
      margin-top: -9px !important;
      line-height: 30px;
      font-family: "Raleway", sans-serif !important;
    }
    #titulo {
      font-weight: bold;
      margin-top: -20px !important;
    }
    h4 {
      font-size: 18px;
      margin-top: -10px !important;
      font-family: "Raleway", sans-serif !important;
    }
  }
`;

export const Blue = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #fff;

  border-radius: 5px 10px 10px 5px;

  width: 70%;
  height: 400px;
  /* background-color: #232326; */
  margin-top: 100px;

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
    font-size: 29px;
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
    width: 350px;
    padding: 2%;
    /* background-color: #232326; */
    .input1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      svg {
        margin-left: -3px;
      }
      .tituloInput {
        display: flex;
        width: 100%;
        /* background-color: #e03f8e; */
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .inputNameTele {
        display: flex;
        width: 100%;

        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .inputTelefone {
          display: flex;
          width: 47%;
          /* background-color: #854; */
          .inputSenha {
            display: flex;
            width: 100%;
            /* background-color: #854; */
          }
        }
        .inputName {
          width: 50%;
          /* background-color: #9748; */
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
    .policticablue {
      font-size: 14px;
      margin-top: 1%;
      cursor: pointer;
      color: #007aff;
      font-weight: 400;
      outline: 0;
      border: none;
      text-decoration: none;
    }
    .politica {
      display: flex;
      flex-direction: row;
      outline: none;
      font-size: 13px;
      margin-top: 3px;
      align-items: center;
      justify-content: center;
      width: 145%;
      outline: 0;
      border: none;
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
          color: #941af9;
        }
      }
    }
    .possuilogin {
      width: 100%;
      a {
        font-weight: 400;
        font-size: 20px;
        color: #232326;
        text-decoration: none;
        &:hover {
          color: #941af9;
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

    width: 50%;
    height: 600px;

    margin-top: 10px;

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
            color: #941af9;
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
            color: #941af9;
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
      margin-top: -5%;
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
      .possuilogin {
        a {
          font-weight: 600;
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
            color: #941af9;
          }
        }
      }
      .politica {
        display: flex;
        flex-direction: column;
        outline: none;

        align-items: center;
        justify-content: center;
        width: 85%;
        outline: 0;
        border: none;
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
            color: #941af9;
          }
        }
      }
    }
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
      color: #941af9;
    }
  }
`;
export const Prefix = styled.div`
  display: flex;
  justify-content: center;

  margin-left: 250px;
  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    &:hover {
      color: #941af9;
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
export const Draw = styled(DrawCadastro)``;
export const Facebokcion = styled(face)``;
export const Lockicon1 = styled(Lock)``;
export const Googleicon = styled(Go)``;
