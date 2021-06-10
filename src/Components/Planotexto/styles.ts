import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;

  h1 {
    padding-left: 5px;
    padding-bottom: 3px;
    color: white;
    width: 82%;
    background-color: #dc468c;
  }
  .experimente-titulo {
    background-color: transparent;
    color: #575757;
    line-height: 50px;
  }
  .app-inova-h1 {
    width: 50%;
  }
  span {
    color: white;
    background-color: #dc468c;
  }
  p {
    width: 100%;
    font-size: 18px;
    line-height: 40px;
    color: #575757;
    font-weight: 500;
  }
  .oferta {
    color: #333;
  }
  em {
    color: #000;
    margin-top: 10px;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 2%;

    h1 {
      padding-left: 5px;
      padding-bottom: 1px;
      color: white;
      width: 90%;
      background-color: #dc468c;
    }
    .experimente-titulo {
      background-color: transparent;
      color: #575757;
      line-height: 20px;
    }
    .app-inova-h1 {
      width: 60%;
    }
    span {
      color: white;
      background-color: #dc468c;
    }
    p {
      padding-top: 10px;
      width: 100%;
      font-size: 18px;
      margin-top: 10%;
      line-height: 30px;
      color: #575757;
      font-weight: 500;
    }
    .oferta {
      color: #333;
    }
    em {
      color: #000;
      margin-top: 5px;
      font-weight: bold;
    }
    .controle {
      margin-top: 20px;
    }
  }
`;
