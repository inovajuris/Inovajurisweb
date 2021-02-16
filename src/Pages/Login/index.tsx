//2846445278933444
import React, { useState, useCallback, useRef } from "react";

import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import getValidationErrors from "../../utils/getValidationErros";
import FacebookLogin from "react-facebook-login";
import { useToast } from "../../hooks/toast";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
import * as Yup from "yup";

import { FiEyeOff } from "react-icons/fi";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import { FormHandles } from "@unform/core";
import Input from "../../Components/Input";
import { Link, useHistory } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Form } from "@unform/web";

import {
  Container,
  Blue,
  GoogleLogin,
  Googleicon,
  Facebokcion,
} from "./styles";

interface SigInFormData {
  email: string;
  senha: string;
}
const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { signIn, setAuthData } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SigInFormData): Promise<void> => {
      setLoading(true);

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
            .min(8, "No minimo 8 dígitos"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          senha: data.senha,
        });

        history.push("/home");
      } catch (err) {
        setLoading(false);
        if (err instanceof Yup.ValidationError) {
          console.log(err);
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao fazer login, cheque as credenciais.",
        });
      }
    },

    [signIn, addToast]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): Promise<void> => {
    if (!("profileObj" in response)) return;
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    const { data } = await api.post("/autenticar", {
      email: response.profileObj.email,
    });
    setAuthData({ user: data.usuario, token: data.token });

    console.log(data);
  };

  const responseGoogleFailed = (response: GoogleLoginResponse): void => {
    console.log(response);
  };

  const responseFacebook = async (response: any) => {
    console.log(response);
    const { data } = await api.post("/autenticar", {
      email: response.userID + "@facebook.com",
    });
    setAuthData({ user: data.usuario, token: data.token });
  };

  const componetClicked = (data: any) => {
    console.warn(data);
  };

  const eye = <FiEyeOff />;
  const [passwordShown, setPasswordShown] = useState(false);
  const [inputType, setInputType] = useState("password");
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown === true ? false : true);
    setInputType(inputType === "password" ? "text" : "password");
  };

  <i onClick={togglePasswordVisiblity}>{eye}</i>;

  return (
    <div>
      <Header />

      <Container>
        <Blue>
          <div className="formBox">
            <h3>Entrar</h3>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="input1">
                <h2>Email</h2>
                <Input
                  className="input"
                  name="email"
                  icon={FiMail}
                  type="email"
                  placeholder="email"
                />

                <h2>Senha</h2>

                <Input
                  className="input"
                  name="senha"
                  icon={FiLock}
                  type={inputType}
                  placeholder="Dica: 8 digitos + 1 caractere especial"
                />

                <Button
                  className="btnazul"
                  type="submit"
                  isLoading={loading}
                  onClick={() => handleSubmit}
                >
                  Entrar
                </Button>
              </div>

              <button className="cadastre">
                <a href={`/novocadastro/plano=plano1`}>Cadastre-se</a>
              </button>
              <button className="esqueci">
                <a href="esquecisenha">Esqueceu sua senha?</a>
              </button>
            </Form>
          </div>
        </Blue>
      </Container>
    </div>
  );
};

export default Login;
