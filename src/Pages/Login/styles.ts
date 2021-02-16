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
