import React, { useState, useRef } from "react";
import Header from "../../Components/Header2";
import { FiMail } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { Container, Blue } from "./styles";
import api from "../../services/api";
import * as Yup from "yup";

import getValidationErrors from "../../utils/getValidationErros";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useToast } from "../../hooks/toast";

const EsqueciSenha: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  // Aqui brow o getItem pode retornar String ou NULL
  // e esse cara, QUE DEVERIA SER UM OBJETO, vem string
  const user = localStorage.getItem("@ActionLaw: user");
  const token = localStorage.getItem("@ActionLaw: token");

  // Então pra pegar o id do usuário eu tenho que dar um PARSE
  // e transformar ele em um objeto JSON pra depois desestruturar
  // só que o TS EXIGE que tenha validação nisso
  // então eu tenho que validar se o "user" !== null
  const { id_usuario } = user ? JSON.parse(user) : "";

  const handleSubmit = async () => {
    setLoading(true);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail obrigatório"),
      });
      await schema.validate(
        {
          email,
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

      const response = await api.post("autenticar/esqueceu_senha", {
        email,
      });

      addToast({
        type: "sucess",
        title:
          "Você estará recebendo um e-mail com um link para redefinir sua senha",
      });
      setLoading(false);
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
        description: `Ocorreu um erro ao informar o e-mail, tente novamente`,
        telaBeta: true,
      });
    }
  };

  return (
    <div>
      <Header />

      <Container>
        <Blue>
          <div className="formBox">
            <h3>
              <span style={{ fontFamily: "Raleway" }}>Redefinir Senha</span>
            </h3>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="input1">
                <h2>Email</h2>
                <Input
                  className="input"
                  name="email"
                  icon={FiMail}
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />

                <Button className="btnazul" type="submit" isLoading={loading}>
                  Enviar
                </Button>
              </div>
            </Form>
          </div>
        </Blue>
      </Container>
    </div>
  );
};

export default EsqueciSenha;
