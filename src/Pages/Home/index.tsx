//2846445278933444
import React, { useState, useCallback, useRef, useEffect } from "react";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
// import DownLoadFile,{DownloadFileProps} from 'react-downloader-file';
import Header from "../../Components/Header";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { FiMinus } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import {
  Container,
  // Sair,
  // Blue,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  Layout,
  Main,
  MainHeader,
  Content,
  Title,
  TextContainer,
  Subtitle,
  DateContainer,
  DateText,
  RemainingDaysText,
  ButtonsContainer,
  AppStoreButton,
  GoogleStoreButton,
  StoreButtonsContainer,
  StoreLogo,
  FaqButton,
  QAContainer,
  QuestionContainer,
  QuestionButton,
  Question,
  AnswerContainer,
  Answer,
  QuestionContent,
  DropdownToggle,
  ButtonCompra,
  Fundo,
} from "./styles";

import Person from "../../assets/person.svg";
import Appstore from "../../assets/aple1.svg";
import Playstore from "../../assets/play1.svg";
import api from "../../services/api";
import { useToast } from "../../hooks/toast";
import HeaderFundo from "../../assets/headerFundo.png";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
interface ReturnDate {
  time: string;
}
interface LocationProps {
  customerId: number;
  phoneId: number;
  plano: string;
  contractAccepted: boolean;
  officeId: number;
  token: string;
  userId: number;
  userPhone: string;
  userPassword?: string;
  userEmail: string;
  username: string;
  isPromo: boolean;
}
const qaData = [
  {
    id: "0",
    question: "O escritório atua em outras áreas, além da tributária?",
    answer: `Lorem Ipsum é simplesmente uma simulação de texto da
  indústria tipográfica e de impressos, e vem sendo
  utilizado desde o século XVI, quando um impressor
  desconhecido pegou uma bandeja de tipos e os embaralhou
  para fazer um livro de modelos de tipos. Lorem Ipsum
  sobreviveu não só a cinco séculos, como também ao salto
  para a editoração eletrônica, permanecendo
  essencialmente inalterado. Se popularizou na década de
  60, quando a Letraset lançou decalques contendo
  passagens de Lorem Ipsum, e mais recentemente quando
  passou a ser integrado a softwares de editoração
  eletrônica como Aldus PageMaker.`,
  },
  {
    id: "1",
    question: "O que devo fazer para contratar um advogado?",
    answer: `Lorem Ipsum é simplesmente uma simulação de texto da
  indústria tipográfica e de impressos, e vem sendo
  utilizado desde o século XVI, quando um impressor
  desconhecido pegou uma bandeja de tipos e os embaralhou
  para fazer um livro de modelos de tipos. Lorem Ipsum
  sobreviveu não só a cinco séculos, como também ao salto
  para a editoração eletrônica, permanecendo
  essencialmente inalterado. Se popularizou na década de
  60, quando a Letraset lançou decalques contendo
  passagens de Lorem Ipsum, e mais recentemente quando
  passou a ser integrado a softwares de editoração
  eletrônica como Aldus PageMaker.`,
  },
  {
    id: "2",
    question: "Como é a cobrança de honorários?",
    answer: `Lorem Ipsum é simplesmente uma simulação de texto da
  indústria tipográfica e de impressos, e vem sendo
  utilizado desde o século XVI, quando um impressor
  desconhecido pegou uma bandeja de tipos e os embaralhou
  para fazer um livro de modelos de tipos. Lorem Ipsum
  sobreviveu não só a cinco séculos, como também ao salto
  para a editoração eletrônica, permanecendo
  essencialmente inalterado. Se popularizou na década de
  60, quando a Letraset lançou decalques contendo
  passagens de Lorem Ipsum, e mais recentemente quando
  passou a ser integrado a softwares de editoração
  eletrônica como Aldus PageMaker.`,
  },
  {
    id: "3",
    question: "Como faço para contatar o escritório?",
    answer: `Lorem Ipsum é simplesmente uma simulação de texto da
  indústria tipográfica e de impressos, e vem sendo
  utilizado desde o século XVI, quando um impressor
  desconhecido pegou uma bandeja de tipos e os embaralhou
  para fazer um livro de modelos de tipos. Lorem Ipsum
  sobreviveu não só a cinco séculos, como também ao salto
  para a editoração eletrônica, permanecendo
  essencialmente inalterado. Se popularizou na década de
  60, quando a Letraset lançou decalques contendo
  passagens de Lorem Ipsum, e mais recentemente quando
  passou a ser integrado a softwares de editoração
  eletrônica como Aldus PageMaker.`,
  },
];

const Home: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [isTrial, setIsTrial] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(14);
  const [data, setData] = useState({});
  const [qtadeDias, setqtadeDias] = useState(0);
  const [beta, setBeta] = useState("");
  const [officeData, setOfficeData] =
    useState<{
      id_escritorio: number;
      telefone: number;
    }>();

  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const { signOut, user } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const token = localStorage.getItem("@ActionLaw: token");

  async function fetchAPI() {
    const response = await api.get(`escritorios?email=${user?.email}`);

    console.log("responsee", response.data[0]);

    console.log("responsee2", response.data[0]);

    console.log("responsee22", response.data[0]);

    const {
      plano,
      id_escritorio,
      data_final_trial,
      telefone,
      qtde_dias_faltando,
    } = response.data[0];

    console.log("data finale igual a", data_final_trial);
    console.log("quantidade de dias faltando e iguak a", qtde_dias_faltando);
    // setEndDate(data_final_trial);

    console.log("data finale igual ", data_final_trial);
    console.log(
      "quantidade de dias faltando e igual olha aqui",
      qtde_dias_faltando
    );
    setqtadeDias(qtde_dias_faltando);

    //date começa recebendo a data final

    console.log(beta);

    console.log("plano", plano);
    if (plano === "beta") {
      setBeta(plano);
    }

    const data_obj = {
      plano: plano ? plano : "plano1",
      token,
      officeId: id_escritorio,
      userId: user?.id_usuario,
      username: user?.nome,
      userEmail: user?.email,
      userPhone: telefone,
    };

    setData(data_obj);

    // const planIsTrial = plano.includes("trial");
    const planIsTrial = !String(plano).match(/(promo|plano)[1-3]/);
    console.log("planIsTrial", planIsTrial);

    setIsTrial(planIsTrial);

    const { data } = await api.get(
      `vindi/clientes/inadimplentes/${id_escritorio}`
    );

    // console.log("planIsTrial", planIsTrial);

    if (!planIsTrial) {
      const isPromo = !!plano.match(/(promo[1-3])/);
      console.log("Entrou aquii");

      if (!data.customers.length) {
        if (isPromo) {
          history.replace("/contrato", {
            ...data_obj,
            isPromo,
          });
          addToast({
            type: "info",
            title: "Você não adicionou dados de identificação",
            description: "você será redirecionado para a tela de contrato",
          });
          return;
        }

        history.replace("/planos", {
          ...data_obj,
          isPromo,
        });
        addToast({
          type: "info",
          title: "Você não adicionou dados de identificação",
          description: "você será redirecionado para a tela de planos",
        });
        return;
      }

      const vindi_response = await api.get(
        `vindi/escritorios/inadimplentes/${data.customers[0].id}`
      );

      console.log("data aqui", data);
      console.log("vindi_response", vindi_response.data);

      const { subscriptions } = vindi_response.data;

      if (!subscriptions.length) {
        const detailsData = {
          ...data_obj,
          customerId: data.customers[0].id,
          phoneId: data.customers[0].phones[0].id,
          contractAccepted: true,
          isPromo,
        };

        history.replace("/detalhes", detailsData);
        addToast({
          type: "info",
          title: "Você não adicionou dados de pagamento",
          description: "você será redirecionado para a tela de pagamento",
        });
      }
    }

    // console.log("data_final_trial", data_final_trial);
    // setEndDate(data_final_trial);
    //denovo end date recebe data final
    console.log("segunda vez que aparecee" + qtde_dias_faltando);
  }

  useEffect(() => {
    fetchAPI();

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6091c94db1d5182476b5a249/1f4snkm5v";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleDateString());
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const plans = ["plano1", "plano2", "plano3", "promo1", "promo2", "promo3"];

  useEffect(() => {
    // console.log("aqui a valor que vc quer" + endDate);
    // if (isTrial && endDate.length !== 0) {
    //   const today = new Date(
    //     convertISOToFormattedDate(new Date(Date.now()).toISOString())
    //   ).getTime();
    //   const formattedEndDate = new Date(endDate).getTime() + 3_600_000 * 3;
    //   const difference = formattedEndDate - today;
    // if (qtadeDias === 0 && isTrial) {
    //   console.log(data);
    //   const plans2 = "plano2";
    //   history.replace("/planos", [data, plans2]);
    //   addToast({
    //     type: "info",
    //     title: "Seu tempo de teste acabou",
    //     description: "você será redirecionado para a tela de planos",
    //   });
    // }

    if (qtadeDias < 0 && isTrial) {
      console.log(data);
      const plans2 = "plano2";
      history.replace("/planos", [data, plans2]);

      addToast({
        type: "info",
        title: "Seu tempo de teste acabou",
        description: "você será redirecionado para a tela de planos",
      });
    }

    // if (isTrial && qtadeDias) {
    //   // const today = new Date(
    //   //   convertISOToFormattedDate(new Date(Date.now()).toISOString())
    //   // ).getTime();
    //   // const formattedEndDate = new Date(endDate).getTime() + 3_600_000 * 3;
    //   // const difference = formattedEndDate - today;
    //   // const remaining =
    //   //   difference < 0 ? 0 : Number((difference / 86_400_000).toFixed(0));
    //   // console.log("remaining", remaining);
    //   // setDaysRemaining(remaining);
    // }
  }, [isTrial, qtadeDias, data]);

  // const convertISOToFormattedDate = (date: string) =>
  //   `${date.split("T")[0]}T00:00:00Z`;

  // console.log("isTrial", isTrial);

  console.log(beta);
  return (
    <Layout>
      <Header>
        <DropdownToggle onClick={() => setIsShowMenu(!isShowMenu)}>
          <FiUser size={24} className="logo2" />
        </DropdownToggle>
        {isShowMenu && (
          <DropdownContainer>
            <DropdownMenu>
              <DropdownItem>
                <a
                  href="/trocarsenha"
                  className="cool-DropdownItDropdownItemnk1"
                >
                  Trocar Senha
                </a>
                <hr className="linha" />
              </DropdownItem>
              {!isTrial && (
                <DropdownItem>
                  <a href="/meuplano" className="cool-link1">
                    Meu Plano
                  </a>
                  <hr className="linha" />
                </DropdownItem>
              )}
              <DropdownItem>
                <a href="/" onClick={signOut} className="cool-link1">
                  Sair
                </a>
                <hr className="linha" />
              </DropdownItem>
            </DropdownMenu>
          </DropdownContainer>
        )}
      </Header>
      <Container>
        <Main>
          <MainHeader>
            {beta ? (
              <RemainingDaysText></RemainingDaysText>
            ) : (
              qtadeDias !== 0 &&
              isTrial && (
                <RemainingDaysText>
                  {qtadeDias + 1} dias para o fim do Teste Grátis
                </RemainingDaysText>
              )
            )}
            {isTrial && (
              <ButtonCompra onClick={() => history.replace(`/planos`, data)}>
                Adquira seu plano
              </ButtonCompra>
            )}
            <DateContainer>
              <DateText>Data: {date}</DateText>
              <DateText>Hora: {time}</DateText>
            </DateContainer>
          </MainHeader>

          <Content>
            <TextContainer>
              <Title>Bem-Vindo</Title>
              <Subtitle>
                Faça o download do app InovaJuris no seu celular e personalize
                seu escritório.
              </Subtitle>
            </TextContainer>
            <ButtonsContainer>
              <StoreButtonsContainer>
                <GoogleStoreButton
                  className="play"
                  href="https://play.google.com/store/apps/details?id=com.inova.juris"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StoreLogo src={Playstore} className="playlog" />
                  Google Play
                </GoogleStoreButton>
                <AppStoreButton
                  className="apple"
                  href="https://apps.apple.com/us/app/inova-juris/id1553522600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StoreLogo src={Appstore} className="applelog" />
                  App Store
                </AppStoreButton>
              </StoreButtonsContainer>

              {/* <FaqButton
                href="https://inova.blob.core.windows.net/uploadinova/file-02613ae6-5720-466c-b697-ec26a67e2097.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <BsFillQuestionOctagonFill
                  size={24}
                  color="#941AF9"
                  style={{
                    marginRight: 12,
                  }}
                />
                (Manual do aplicativo)
              </FaqButton> */}
            </ButtonsContainer>
            {/* <QAContainer>
              {qaData.map((qa) => (
                <QuestionContainer key={qa.id}>
                  <QuestionContent
                    onClick={() => {
                      setIsShow(selectedId === qa.id ? !isShow : true);
                      setSelectedId(qa.id);
                    }}
                  >
                    <QuestionButton>
                      {isShow && selectedId === qa.id ? (
                        <FiMinus size={28} color="#941AF9" />
                      ) : (
                        <FiPlus size={28} color="#941AF9" />
                      )}
                    </QuestionButton>

                    <Question>{qa.question}</Question>
                  </QuestionContent>
                  {isShow && selectedId === qa.id && (
                    <AnswerContainer>
                      <Answer>{qa.answer}</Answer>
                    </AnswerContainer>
                  )}
                </QuestionContainer>
              ))}
            </QAContainer> */}
          </Content>
        </Main>
      </Container>
    </Layout>
  );
};

export default Home;
