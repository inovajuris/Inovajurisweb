import styled, { css } from "styled-components";
import { DrawCadastro } from "../../styles/icons";
import { Go } from "../../styles/icons";
import { Lock } from "../../styles/icons";
import { GoogleLogin as CustomGoogleLogin } from "react-google-login";
import { face } from "../../styles/icons";
export const DivPrincipal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;

  padding-bottom: 20px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  margin-top: 15%;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    margin-top: 20%;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    margin-top: 30%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 10%;
  line-height: 37px;
  padding: 5px 5px;
  margin-right: 150px;
  justify-content: flex-start;

  width: 500px;
  height: 100%;

  /* font-family: "Raleway", sans-serif; */
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

    width: 700px;
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
    margin-bottom: 10%;
    line-height: 28px;
    padding: 5px 5px;
    margin-right: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 700px;
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

export const Fundo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Blue = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #854;
  border-radius: 6px;

  border: solid;
  border-color: #f0f0eb;
  -webkit-box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);
  box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);

  width: 400px;
  height: 600px;

  margin-left: 1%;
  background: red;
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
  .input9 {
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
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #854;
    border-radius: 6px;

    border: solid;
    border-color: #f0f0eb;
    -webkit-box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);
    box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);

    width: 450px;
    height: 600px;
    margin-top: -50px;
    /* margin-top: 85px; */
    margin-left: 1%;
    background: red;
    font-size: 22px;

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
    .input9 {
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
      color: #000;
      width: 100%;

      height: 20.7px;
      font-weight: 400;
      font-size: 20px;
      margin-top: 10px;
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
  }

  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #854;
    border-radius: 6px;
    flex-wrap: wrap;

    border: solid;
    border-color: #f0f0eb;
    -webkit-box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);
    box-shadow: 4px 9px 12px 5px rgba(0, 0, 0, 0.36);

    width: 450px;
    height: 650px;
    margin-top: 10px;

    margin-left: 1%;

    font-size: 17px;

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
    .input9 {
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
      color: #000;
      width: 100%;

      height: 20.7px;
      font-weight: 400;
      font-size: 17px;
      margin-top: 10px;
    }
    h3 {
      margin-top: 6px;
      font-size: 26px;
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
