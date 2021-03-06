import React, { useState, useCallback, useRef, useEffect } from "react";

import { FiLock } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import Header2 from "../../Components/Header2";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router-dom";
import { Container, Blue, ContainerInfo } from "./styles";
import api from "../../services/api";
import * as Yup from "yup";
import { AiOutlineInfoCircle } from "react-icons/ai";
import getValidationErrors from "../../utils/getValidationErros";
import Input from "../../Components/Input";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button";
import { useToast } from "../../hooks/toast";
import { useAuth } from "../../hooks/auth";
import { getPlanData } from "../../data";
interface SigInFormData {
  email: string;
  senha: string;
  nome: string;
}
interface LocationState {
  token: string;
}

interface Usuario {
  date_insert: string;
  email: string;
  id_usuario: number;
  ip_insert: string;
  nome: string;
  status_usuario: string;
  time_insert: string;
  tipo_conta: string;
  user_insert: string;
}
interface LoginDTO {
  senha: string;
  email: string;
  nome: string;
}

interface UserData {
  token: string;
  usuario: Usuario;
}

interface PushedHistory {
  loginDTO: LoginDTO;
  userData: UserData;
}

interface SigInFormData {
  email: string;
  senha: string;
}
interface RouteParams {
  plano: string;
}
interface UserResponse {
  id_usuario: number;
  nome: string;
  status_usuario: string;
  tipo_conta: string;
  email: string;
}

interface OfficeResponse {
  data_final_trial: string;
  data_inicio_plano: string;
  documento: string;
  email: string;
  id_escritorio: number;
  nick_name: string;
  nome: string;
  plano: string;
  quantidade_advogados: number;
  status_plano: string;
  telefone: string;
  tipo_documento: string;
  tipo_escritorio: string;
  tipo_pag: string;
}

const NovoCadastro: React.FC = () => {
  const { plano } = useParams<RouteParams>();
  const { signIn, setAuthData } = useAuth();
  console.log(useParams());
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [tel, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [url, setUrl] = useState("");
  // const [errorE, setErrorE] = useState([""]);
  // const [errorS, setErrorS] = useState([""]);
  // const [passwordError, setPasswordError] = useState("");
  // const [passwordShown, setPasswordShown] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [gender, setGender] = useState("cpf");

  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: {
      nome: string;
      email: string;
      telefone: string;
      senha: string;
    }): Promise<void> => {
      console.log("Datatestester", data);

      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required("Nome é obrigatório"),
          email: Yup.string().required("E-mail é obrigatório"),
          telefone: Yup.string()
            .required("Telefone é obrigatório")
            .min(12, "Telefone tem que ter no minimo 8 dígitos"),
          senha: Yup.string()
            .trim()
            .matches(
              /^.*(?=.{6,})((){1})(?=.*\d)((?=.*[a-z]){1}).*$/,
              "senha deve conter pelo menos 6 caracteres, um número"
            )
            .min(6, "No minimo 6 dígitos"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const isPromo = !!plano.match(/(promo[1-3])/);
        const plansData = getPlanData(plano, isPromo);

        console.log("PlansData", plansData);
        const response = await api.post<{
          token: string;
          usuario: UserResponse;
        }>("usuarios", { ...data, perfil: plansData.tipo_escritorio });

        // console.log(response.data);
        // console.log(name + "nome aqui");

        const sendOfficeData = {
          tipo_documento: gender,
          nome: data.nome,
          documento: "cnpj",
          plano: plano,
          // data_inicio_plano: dataFormatadaInicio,
          // data_final_trial: dataFormatadaFim,
          tipo_pag: "cartao_credito",
          nick_name: data.nome,
          email: data.email,
          telefone: data.telefone.replace(/[ ]|[()-]/g, ""),
          qtde_processos: plansData.qtde_processos,
          quantidade_advogados: plansData.quantidade_advogados,
          tipo_escritorio: plansData.tipo_escritorio,
        };

        // console.log("sendOfficeData", sendOfficeData);

        const responseOffice = await api.post<OfficeResponse>(
          "escritorios",
          sendOfficeData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${response.data.token}`,
            },
          }
        );

        // console.log("PLANO", plano);
        // console.log("TOKEN", response.data);
        // console.log(responseOffice.data);
        // console.log(data.nome + "nome aqui");
        let telefoneFormatado = data.telefone
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{5})(\d)/, "$1-$2");
        if (isPromo) {
          return history.push("/contrato", {
            plano,
            token: response.data.token,
            officeId: responseOffice.data.id_escritorio,
            userId: response.data.usuario.id_usuario,
            username: response.data.usuario.nome,
            userEmail: data.email,
            userPhone: telefoneFormatado,
            userPassword: data.senha,
            isPromo,
          });
        }
        history.push("/planos", {
          plano: plano,
          token: response.data.token,
          officeId: responseOffice.data.id_escritorio,
          userId: response.data.usuario.id_usuario,
          username: response.data.usuario.nome,
          userEmail: data.email,
          userPhone: telefoneFormatado,
          userPassword: data.senha,
          isPromo,
        });
        addToast({
          type: "sucess",
          title: "Cadastro realizado com sucesso",
        });
      } catch (err) {
        console.log("Error", err);
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          err.inner.map((error) =>
            addToast({
              type: "error",
              title: "Erro no cadastro",
              description: `${error.message}`,
            })
          );
          return;
        }
        if (err.response?.data) {
          if (typeof err.response?.data.erro !== "string") {
            Object.entries(err.response?.data.erro).map((result) => {
              addToast({
                type: "error",
                title: result[0],
                description: `${result[1]}`,
              });
            });
            return;
          }
          addToast({
            type: "error",
            title: "Erro no cadastro",
            description: err.response?.data.erro,
          });
        }
      }
    },
    [addToast]
  );

  // const endDate = new Date(
  //   new Date().getTime() + 1_209_600_000
  // ).toLocaleString();
  // const startDate = new Date(new Date()).toLocaleString();
  // const dataFormatadaInicio = converteData(startDate, "/", "-");
  // const dataFormatadaFim = converteData(endDate, "/", "-");
  // // console.log(startDate);
  // // console.log(endDate);

  // function converteData(
  //   data: String,
  //   divisorPraSeparar: String,
  //   divisorPraColocar: String
  // ) {
  //   const temp = data.split(`${divisorPraSeparar}`);
  //   // console.log("data", temp);
  //   const ano = temp[2].split(" ");
  //   const dataBanco =
  //     ano[0] +
  //     `${divisorPraColocar}` +
  //     temp[1] +
  //     `${divisorPraColocar}` +
  //     temp[0];
  //   return dataBanco;
  // }
  // console.log(dataFormatadaInicio + "esse");
  // console.log(dataFormatadaFim + "esse");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d335luupugsy2.cloudfront.net/js/loader-scripts/f833fbca-f1e1-485f-8d50-3e15a3c158fc-loader.js";
    script.async = true;

    // script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Header2 />

      <Container>
        <ContainerInfo>
          <>
            <div style={{ marginTop: "10%" }}>
              <h1>
                <span
                  style={{
                    backgroundColor: "#e03f8e",
                    color: "#fff",
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontFamily: "Raleway",
                    fontSize: 25,
                  }}
                >
                  Faça seu cadastro!
                </span>
              </h1>
              <br></br>

              <h3
                style={{
                  fontWeight: "normal",
                  marginBottom: 30,
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontFamily: "Raleway",
                  fontSize: 15,
                }}
              >
                <p>
                  É muito simples, basta preencher o formulário ao lado com as
                  suas informações e seguir os próximos passos.
                </p>
              </h3>
              <h4
                style={{
                  fontWeight: "bold",
                  fontStyle: "italic",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontFamily: "Raleway",
                  fontSize: 15,
                }}
              >
                Inova Juris, o seu escritório jurídico na palma de sua mão.
              </h4>
            </div>
          </>
        </ContainerInfo>
        <Blue>
          <div className="formBox">
            {/* <h3>Cadastrar</h3> */}
            {console.log("Script", document.body.getElementsByTagName("email"))}
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="input1">
                <div className="tituloInput">
                  <h2>Nome</h2>
                  <h2 style={{ marginLeft: "10%" }}>Telefone</h2>
                </div>
                {/* <h2>Nome</h2> */}
                <div className="inputNameTele">
                  <div className="inputName">
                    <Input
                      id="nome"
                      className="input1"
                      name="nome"
                      value={name}
                      icon={FiUser}
                      type="text"
                      placeholder="nome"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {/* <h2>Telefone</h2> */}

                  <div className="inputTelefone">
                    <Input
                      className="input1"
                      name="telefone"
                      icon={FiPhoneCall}
                      type="text"
                      value={tel}
                      maxLength={15}
                      onKeyUp={(e) => {
                        const value = e.currentTarget.value
                          .replace(/\D/g, "")
                          .replace(/(\d{2})(\d)/, "($1) $2")
                          .replace(/(\d{5})(\d)/, "$1-$2");

                        e.currentTarget.value = value;
                        return e;
                      }}
                      preffix
                      placeholder="(xx) xxxxx-xxxx"
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </div>
                </div>
                <h2>Email</h2>
                <Input
                  id="email"
                  className="input"
                  name="email"
                  value={email}
                  icon={FiMail}
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h2 style={{ display: "flex", alignItems: "center" }}>
                  Senha
                  <AiOutlineInfoCircle
                    size={15}
                    data-tip="A senha tem que ter 6 dígitos, um número e uma letra"
                    // color="#e03f8e"
                    style={{
                      marginLeft: "2%",
                      // backgroundColor: "#015",
                    }}
                  />
                  <ReactTooltip
                    place="right"
                    type="info"
                    backgroundColor="#e03f8e"
                  />
                </h2>
                <Input
                  className="input"
                  name="senha"
                  icon={FiLock}
                  value={senha}
                  type={inputType}
                  placeholder="Senha"
                  onChange={(e) => setSenha(e.target.value)}
                />

                <Button className="btnazul" isLoading={loading} type="submit">
                  Cadastrar
                </Button>
              </div>
              <div className="politica">
                <h4>Ao continuar, você concorda com a&nbsp;</h4>

                <a
                  className="policticablue"
                  href="https://www.notion.so/Pol-tica-de-Privacidade-Inova-Juris-6bb6ba55e47a4dc2b35cd4401dd74252"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>
              </div>

              <button type="button" className="possuilogin">
                <a href={`/`}>Já possui login?</a>
              </button>
            </Form>
          </div>
        </Blue>
      </Container>
    </div>
  );
};

export default NovoCadastro;
