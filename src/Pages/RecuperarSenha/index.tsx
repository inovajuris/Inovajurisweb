import React, {
  useState,
  useEffect,
  useCallback,
  FormEvent,
  useRef,
  InputHTMLAttributes,
} from "react";
import Header from   "../../Components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import {
  Container,

  
  Blue,
  Lockicon1,
  Draw,
} from "./styles";
import api from "../../services/api";
import Logo from "../../assets/logolaw.svg";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import getValidationErrors from "../../utils/getValidationErros";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useToast } from "../../hooks/toast";

interface LocationState {
  token: string;
}
interface HistoryUserData {
  email: string;
  senha: string;
  user: object;
}
interface RouteParams {
  token: string;
}
const RecuperarSenha: React.FC = () => {
  const { token } = useParams<RouteParams>();
  console.log(useParams());
  const [data2, setData] = useState({});
  const location = useLocation<LocationState>();
  const history = useHistory();
  //  const {token} = history.location.state;
  const data = history.location.state as HistoryUserData;

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  // Aqui brow o getItem pode retornar String ou NULL
  // e esse cara, QUE DEVERIA SER UM OBJETO, vem string
  // const user = localStorage.getItem('@ActionLaw: user')
  // const tokenw  = localStorage.getItem('@ActionLaw: token')

  // Então pra pegar o id do usuário eu tenho que dar um PARSE
  // e transformar ele em um objeto JSON pra depois desestruturar
  // só que o TS EXIGE que tenha validação nisso
  // então eu tenho que validar se o "user" !== null
  // const {id_usuario} = user ? JSON.parse(user) : ''

  const handleSubmit2 = useCallback(
    async (data: object): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required("E-mail obrigatório"),
          senha: Yup.string()
          .trim()
          .matches(
            /^.*(?=.{6,})((){1})(?=.*\d)((?=.*[a-z]){1}).*$/,
            "senha deve conter pelo menos 6 caracteres, um número"
          )
          .min(6, "No minimo 6 dígitos"),

          // senha: Yup.string().trim().matches(
          //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/,
          //   "senha deve conter pelo menos 8 caracteres, um número e um caractere especial"
          // )
          // .min(8, 'No minimo 8 dígitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        // Daí aqui 👇👇👇 você tava chamando a URL errada por 2 motivos
        // 1° /usuarios/trocar_senha?OIAUDHISUHADISUDHAISJKDNAKSJDAIUSDH
        // 2° Porque primeiramente aquela variável 'id_usuario' estava com o valor
        //    de um objeto INTEIRO, por isso desestruturei ela
        //    Depois arrumei a chamada para: /usuarios/trocar_senha/${id_usuario}

        addToast({
          type: "sucess",
          title:
            "Você estará recebendo um e-mail com um link para redefinir sua senha",
        });
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          console.log(err);
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        // addToast({
        //   type: 'error',
        //   title: 'Erro ao alterar senha',
        //    description: `Ocorreu um erro ao informar e-mail, tente novamente.${err}`

        // });
      }
    },
    [addToast]
  );

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [url, setUrl] = useState("");
  const [errorE, setErrorE] = useState([""]);
  const [errorS, setErrorS] = useState([""]);
  const [passwordError, setPasswordError] = useState("");

  var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  var regemail = /^\w+([-+.']\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/;
  const eye = <FiEyeOff />;

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    try {
      await api.post("autenticar/redefinir_senha", {
        email: mail,
        senha: senha,
        token: token || "3bcb3dcf80751c011dbee54cfba74ed8be0a569a",
      });
      addToast({
        type: "sucess",
        title: "Senha redefinida com sucesso",
      });
    } catch (error) {
      addToast({
        type: "error",
        title: "Erro na cadastro",
        description: `Ocorreu um erro ao alterar senha, tente novamente.`,
      });
    }
  }

  const [mail, setMail] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [inputType, setInputType] = useState("password");
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown === true ? false : true);
    setInputType(inputType === "password" ? "text" : "password");
  };

  <i onClick={togglePasswordVisiblity}>{eye}</i>;

  useEffect(() => {
    api.get("usuarios/").then((response) => {
      console.log(response.data);
    });
  }, []);

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void => {
    if (!("profileObj" in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };
  return (
    <div>
    <Header />
    <Container>
    

      <Blue>
      <div className="formBox"> 
      <h3>Definir Nova Senha</h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="input1">
              
          
         

            <h2>Informar endereçe E-mail</h2>
            <Input
              name="email"
              value={mail}
              icon={FiMail}
              type="email"
              onChange={(e) => setMail(e.target.value)}
              placeholder="email"
            />

            <h2>Informar senha</h2>
            <Input
              name="senha"
              value={senha}
              icon={FiLock}
              type={inputType}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Dica: 6 digitos + 1 número"
            />
  
            <Button
              className="btn"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
                handleSubmit2(e);
              }}
            >
              Confirmar
            </Button>
          </div>

        
         
       
    
     

        </Form>
  </div>
      </Blue>
    </Container>
 </div>
  );
};

export default RecuperarSenha;
