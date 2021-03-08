import React, { useState, useRef } from "react";
import Header from "../../Components/Header";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { FiEyeOff } from "react-icons/fi";
import { useHistory, useParams } from "react-router-dom";
import { Container, Blue } from "./styles";
import api from "../../services/api";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErros";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useToast } from "../../hooks/toast";

interface RouteParams {
  token: string;
}

const RecuperarSenha: React.FC = () => {
  const { token } = useParams<RouteParams>();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  // const {token} = history.location.state;
  // const data = history.location.state as HistoryUserData;

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

  const handleSubmit = async () => {
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
          .min(6, "No minimo 6 dígitos"),
      });

      await schema.validate(
        {
          email,
          senha,
        },
        {
          abortEarly: false,
        }
      );

      // Daí aqui 👇👇👇 você tava chamando a URL errada por 2 motivos
      // 1° /usuarios/trocar_senha?OIAUDHISUHADISUDHAISJKDNAKSJDAIUSDH
      // 2° Porque primeiramente aquela variável 'id_usuario' estava com o valor
      //    de um objeto INTEIRO, por isso desestruturei ela
      //    Depois arrumei a chamada para: /usuarios/trocar_senha/${id_usuario}

      await api.post("autenticar/redefinir_senha", {
        email,
        senha,
        token: token,
      });

      addToast({
        type: "sucess",
        title:
          "Você estará recebendo um e-mail com um link para redefinir sua senha",
      });

      addToast({
        type: "sucess",
        title: "Senha redefinida com sucesso",
      });

      setLoading(false);
      history.push("/");
    } catch (err) {
      setLoading(false);
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        console.log(err);
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      addToast({
        type: "error",
        title: "Erro na cadastro",
        description: `Ocorreu um erro ao alterar senha, tente novamente.`,
      });
    }
  };

  const eye = <FiEyeOff />;

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
            <h3>Definir Nova Senha</h3>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="input1">
                <h2>Informar endereço de E-mail</h2>
                <Input
                  className="input"
                  name="email"
                  value={email}
                  icon={FiMail}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />

                <h2>Informar Senha</h2>
                <Input
                  className="input"
                  name="senha"
                  value={senha}
                  icon={FiLock}
                  type={inputType}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="6 dígitos, mínimo uma letra e um número"
                />

                <Button className="btn" type="submit" isLoading={loading}>
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
