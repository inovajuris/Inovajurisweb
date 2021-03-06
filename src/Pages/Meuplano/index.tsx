//2846445278933444
import React, { useState, useCallback, useRef, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Logo from "../../assets/logolaw.svg";
import Header2 from "../../Components/Header2";
import { FiUser } from "react-icons/fi";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { Link } from "react-router-dom";

import {
  DropdownToggle,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  Container,
  GradientText,
  FormContainer,
  Main,
  PricingContainer,
  PricingContainerTitle,
  PlansContainer,
  Plan,
  Offer,
  OffersContainer,
  Layout,
  ConfirmButton,
  ButtonsContainer,
  CancelPlanButton,
} from "./styles";

import FacebookLogin from "react-facebook-login";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { Form } from "@unform/web";
import getValidationErrors from "../../utils/getValidationErros";
import * as Yup from "yup";
import axios from "axios";
import utf8 from "utf8";
import { encode as btoa } from "base-64";

import { FormHandles } from "@unform/core";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import api from "../../services/api";
import { getFormattedPlansData } from "../../data/PlansData";
// async function handleSignIn(){
//   console.log('Logar');
// }

interface SigInFormData {
  email: string;
  senha: string;
}

const MeuPlano: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [planId, setPlanId] = useState(0);
  const [customerId, setCustomerId] = useState(0);
  const [officeId, setOfficeId] = useState(0);
  const [subscriptionId, setSubscriptionId] = useState(0);
  const [productItemId, setProductItemId] = useState(0);
  const [plano, setPlano] = useState("");
  // const [subscription, setSubscription] = useState<{
  //   product_items: { product: { name: string } }[];
  // }>();
  const formRef = useRef<FormHandles>(null);
  const { signIn, setAuthData } = useAuth();
  const history = useHistory();
  const { addToast } = useToast();

  const privateApi = "tey-UhF26q2TMv6cTF43fcMsGwJEy4cdSZFKh-nPQaQ:";
  const bytes = utf8.encode(privateApi);
  const token64 = btoa(bytes);
  const user = localStorage.getItem("@ActionLaw: user");
  const token = localStorage.getItem("@ActionLaw: token");
  const parsedUser: {
    id_usuario: number;
    nome: string;
    status_usuario: string;
    email: string;
    tipo_conta: string;
    perfil: string;
  } = user && JSON.parse(user);
  // console.log("User", parsedUser);

  useEffect(() => {
    api
      .get(`escritorios?email=${parsedUser.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      //pega id do escritorio na vindi
      .then((response) => {
        console.log("EscritorioID", response.data[0].id_escritorio);
        setPlano(response.data[0].plano);
        setOfficeId(response.data[0].id_escritorio);
        api
          .get(`vindi/clientes/${response.data[0].id_escritorio}`)
          .then((response) => {
            console.log("CustomerResponse", response.data);
            setCustomerId(response.data.customers[0].id);
          });
      });
  }, []);
  //pega o id do usuario na vindi

  useEffect(() => {
    console.log("Bem aqui");
    api
      .get(`vindi/escritorios/inadimplentes/${customerId}`, {
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Basic ${token64}`,
        // },
      })
      .then((response) => {
        console.log("RESPONSE", response);
        setSubscriptionId(response.data.subscriptions[0]?.id);
        setPlanId(response.data.subscriptions[0]?.plan.id);
        setProductItemId(response.data.subscriptions[0]?.product_items[0]?.id);
      });
  }, [customerId, loading]);

  console.log("PlanId", planId);
  console.log("CustomerId", customerId);
  console.log("Subscription", subscriptionId);
  console.log("ProductItemId", productItemId);

  // console.log("PLANO", plano);

  const formattedDate = (date: string, time: string) => {
    const splitedDate = date.split("/");
    const changedDate = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`;
    return `${changedDate}T${time}:03.000-03:00`;
  };

  // console.log(
  //   "Data:",
  //   formattedDate(
  //     new Date().toLocaleDateString(),
  //     new Date().toLocaleTimeString()
  //   )
  // );

  const handleSubmit = async () => {
    setLoading(true);

    try {
      formRef.current?.setErrors({});

      console.log("Aqui", officeId, plano, subscriptionId);
      // pega os plano do produto vindi
      // ###########
      const responseProduct = await api.get<{
        products: {
          id: number;
          name: string;
          code: null;
          unit: string;
          status: string;
          description: string;
          invoice: string;
          created_at: string;
          updated_at: string;
          pricing_schema: {
            id: number;
            short_format: string;
            price: string;
            minimum_price: null;
            schema_type: string;
            pricing_ranges: [];
            created_at: string;
          };
          metadata: {};
        }[];
      }>(`/vindi/produtos?query=name=${plano.replace("promo", "plano")}`);

      // const responseProduct = await axios.get<{
      //   products: {
      //     id: number;
      //     name: string;
      //     code: null;
      //     unit: string;
      //     status: string;
      //     description: string;
      //     invoice: string;
      //     created_at: string;
      //     updated_at: string;
      //     pricing_schema: {
      //       id: number;
      //       short_format: string;
      //       price: string;
      //       minimum_price: null;
      //       schema_type: string;
      //       pricing_ranges: [];
      //       created_at: string;
      //     };
      //     metadata: {};
      //   }[];
      // }>(
      //   `http://localhost:3333/vindi/produtos?query=name=${plano.replace(
      //     "promo",
      //     "plano"
      //   )}`
      // );

      console.log("ProductId", responseProduct.data.products[0].id);
      //deletar o id do produto na vindi
      // if (productItemId) {
      //   await api.delete(`/vindi/planos/deletar/${productItemId}`);
      // }

      console.log("product_id", responseProduct.data.products[0].id);
      const updatedSubscription = {
        product_id: responseProduct.data.products[0].id,
        subscription_id: subscriptionId,
        quantity: 1,
      };

      console.log("updatedSubscription", updatedSubscription);
      //atualiza produto na vindi
      // const responseSubscriptions = await api.post(
      //   `/vindi/produtos`,
      //   updatedSubscription,
      //   {
      //     // headers: {
      //     //   "Content-Type": "application/json",
      //     //   Authorization: `Basic ${token64}`,
      //     // },
      //   }
      // );

      // console.log("responseSubscriptions", responseSubscriptions.data);

      // await api.put(
      //   `escritorio/${officeId}`,
      //   {
      //     plano,
      //     data_inicio_plano: new Date(),
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      await api
        .put(
          `trocarPlano/${officeId}`,
          {
            plano,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(async (response) => {
          if (productItemId) {
            await api.delete(`/vindi/planos/deletar/${productItemId}`);
          }
          const responseSubscriptions = await api.post(
            `/vindi/produtos`,
            updatedSubscription,
            {
              // headers: {
              //   "Content-Type": "application/json",
              //   Authorization: `Basic ${token64}`,
              // },
            }
          );
          history.push("/home");
          addToast({
            type: "sucess",
            title: "Plano atualizado com sucesso",
          });
        });
      // .catch((erro) => {
      //   console.log("Errao", erro);
      //   return addToast({
      //     type: "error",
      //     title: "Erro na escolha de plano",
      //     description: `${erro.response}`,
      //   });
      // });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Error", err);
      console.log("Errao", err.response);
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      addToast({
        type: "error",
        title: "Erro na escolha de plano",
        description: `${err.response.data.erro}`,
      });
    }
  };

  const handleCancelSubscription = async () => {
    await api.delete(`vindi/planos/cancelar/${subscriptionId}`);

    // await axios.delete(
    //   `http://localhost:3333/vindi/planos/cancelar/${subscriptionId}`
    // );

    await api.put(
      `escritorio/${officeId}`,
      {
        status_plano: "desabilitado",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    addToast({
      type: "sucess",
      title: "Plano cancelado com sucesso",
    });

    setLoading(false);
  };

  async function handleConfirm() {
    console.log("Estou aqui!");
    const response = window.confirm(
      "Você tem certeza que deseja cancelar o plano? Isso fará com que você seus escritórios e seus clientes percam o acesso ao aplicativo móvel."
    );
    if (response) {
      await handleCancelSubscription();
    }
    signOut();
  }

  const [isShow, setIsShow] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { signOut } = useAuth();
  return (
    <>
      <Header2>
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
              <DropdownItem>
                <a href="/meuplano" className="cool-link1">
                  Meu Plano
                </a>
                <hr className="linha" />
              </DropdownItem>
              <DropdownItem>
                <a href="/" onClick={signOut} className="cool-link1">
                  Sair
                </a>
                <hr className="linha" />
              </DropdownItem>
            </DropdownMenu>
          </DropdownContainer>
        )}
      </Header2>
      <Layout>
        <Container>
          <Main>
            <FormContainer ref={formRef} onSubmit={handleSubmit}>
              <PricingContainer>
                <PricingContainerTitle>Meu Plano</PricingContainerTitle>

                <PlansContainer>
                  {getFormattedPlansData(!!plano.match(/(promo[1-3])/)).map(
                    (plan) => (
                      <Plan
                        key={plan.id}
                        code={plan.code}
                        plano={plano}
                        onClick={() => setPlano(plan.code)}
                      >
                        <GradientText
                          style={{ fontSize: 16 }}
                          code={plan.code}
                          plano={plano}
                        >
                          {plan.name}
                        </GradientText>
                        <GradientText code={plan.code} plano={plano}>
                          R${plan.value}
                        </GradientText>

                        <OffersContainer>
                          {plan.offers.map((offer) => (
                            <Offer
                              style={{
                                color:
                                  plan.code !== plano ? "#000000" : "#ffffff",
                              }}
                              key={offer.id}
                            >
                              {offer.name}
                            </Offer>
                          ))}
                        </OffersContainer>
                      </Plan>
                    )
                  )}
                </PlansContainer>
              </PricingContainer>
              <ButtonsContainer>
                <CancelPlanButton
                  disabled={!planId && !productItemId}
                  onClick={handleConfirm}
                  type="button"
                  isLoading={loading}
                >
                  Cancelar Plano
                </CancelPlanButton>
                <ConfirmButton
                  disabled={!planId && !productItemId}
                  type="submit"
                  isLoading={loading}
                >
                  Confirmar
                </ConfirmButton>
              </ButtonsContainer>
            </FormContainer>
          </Main>
        </Container>
      </Layout>
    </>
  );
};

export default MeuPlano;
