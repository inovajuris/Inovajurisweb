//2846445278933444
import React, { useState, useRef, useEffect } from "react";
import Header2 from "../../Components/Header2";
import { useLocation } from "react-router-dom";

import {
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
  InputCupom,
  ButtonCupom,
} from "./styles";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import getValidationErrors from "../../utils/getValidationErros";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { useToast } from "../../hooks/toast";
import api from "../../services/api";
import { AxiosError } from "axios";
import { getFormattedPlansData } from "../../data/PlansData";

interface SigInFormData {
  email: string;
  senha: string;
}

const Planos: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [planos, setPlanos] = useState("");
  const [promoPlanoId, setPromoPlanoId] = useState("");
  const [textoPromo, setTextoPromo] = useState("");
  const [valorPlano, setValorPlano] = useState(null);
  const [valorPlanoPromo, setValorPlanoPromo] = useState(null);
  const [promoNome, setPromoNome] = useState("");
  const [descontoPromo, setDescontoPromo] = useState(null);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const {
    state: {
      plano,
      officeId,
      userId,
      userEmail,
      userPhone,
      username,
      token,
      contractAccepted,
      customerId,
      phoneId,
      userPassword,
      isPromo,
    },
  } = useLocation<{
    officeId: number;
    plano: string;
    token: string;
    userId: number;
    userPhone: string;
    userEmail: string;
    userPassword: string;
    username: string;
    contractAccepted?: boolean;
    customerId?: number;
    phoneId?: number;
    isPromo: boolean;
  }>();

  useEffect(() => {
    setPlanos(plano);
    setPromoNome(plano);
  }, []);

  console.log("Planos", planos);
  console.log("Planos TOKEN:", token);
  console.log("officeId", officeId);
  console.log("contractAccepted", contractAccepted);

  async function getPromo() {
    const { data } = await api.get("planos/promo", {
      params: { id_plano: promoPlanoId },

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (data && data.length > 0) {
      console.log("Teste pomo", data[0]);
      setTextoPromo(data[0].descricao);
      setDescontoPromo(data[0].promocao_percent_desconto);
    }
    if (!data || data.length === 0) {
      return alert("Cupom invalido");
    }
  }

  function calculoPromo(plano: string): void {
    const valor = parseFloat(plano.replace(/\s/g, "").replace(",", "."));
    const desconto = (descontoPromo * valor) / 100;
    var valorFinal = valor - desconto;
    setValorPlanoPromo(valorFinal);
  }

  useEffect(() => {
    if (descontoPromo && valorPlano) {
      calculoPromo(valorPlano);
    }
  }, [valorPlano, descontoPromo]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      formRef.current?.setErrors({});
      var promoNomeFinal;
      if (isPromo) {
        const numeroPlanoPromo = planos.substring(5);

        const promoNomeSemPromo = promoNome.substring(5);

        promoNomeFinal =
          promoNomeSemPromo != promoPlanoId
            ? promoPlanoId.concat("_" + numeroPlanoPromo)
            : promoNome.concat("_" + numeroPlanoPromo);

        if (promoPlanoId != promoNomeSemPromo) {
          promoNomeFinal = "promo" + promoNomeFinal;
        }
      }
      await api.put(
        `trocarPlano/${officeId}`,
        {
          plano: isPromo && descontoPromo ? promoNomeFinal : planos,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // if (!contractAccepted) {
      //   return history.push({
      //     pathname: "/contrato",
      //     state: {
      //       officeId,
      //       userId,
      //       userEmail,
      //       userPhone,
      //       username,
      //       plano: planos,
      //       token,
      //       userPassword,
      //       isPromo,
      //     },
      //   });
      // }

      // history.push({
      //   pathname: "/dados",
      //   state: {
      //     officeId,
      //     userId,
      //     userEmail,
      //     userPhone,
      //     username,
      //     plano: planos,
      //     token,
      //     contractAccepted,
      //     customerId,
      //     phoneId,
      //     userPassword,
      //     isPromo,
      //   },
      // });

      // addToast({
      //   type: "sucess",
      //   title: "Cadastro realizado com sucesso",
      // });
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err instanceof Yup.ValidationError) {
        console.log(err);
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        // addToast({
        //   type: "error",
        //   title: "Erro na cadastro",
        //   description: `Ocorreu um erro ao fazer cadastro, tente novamente.`,
        // });
      }
      // if (err.response?.data) {
      //   addToast({
      //     type: "error",
      //     title: "Erro na cadastro",
      //     description: `Usuário já cadastrado.
      //     `,
      //   });
      // }
    }
  };

  return (
    <>
      <Header2 />
      <Layout>
        <Container>
          <Main>
            <FormContainer ref={formRef} onSubmit={handleSubmit}>
              <PricingContainer>
                <PricingContainerTitle>
                  <span style={{ fontFamily: "Raleway" }}>Planos e Preços</span>
                </PricingContainerTitle>

                <PlansContainer>
                  {getFormattedPlansData(isPromo).map((plan) => (
                    <Plan
                      key={plan.id}
                      code={plan.code}
                      plano={planos}
                      onClick={() => {
                        setPlanos(plan.code);
                        setValorPlano(plan.value);
                      }}
                    >
                      <GradientText
                        style={{ fontSize: 19 }}
                        code={plan.code}
                        plano={planos}
                      >
                        {plan.name}
                      </GradientText>
                      <GradientText code={plan.code} plano={planos}>
                        R${plan.value}
                      </GradientText>

                      <OffersContainer>
                        {plan.offers.map((offer) => (
                          <Offer
                            style={{
                              color:
                                plan.code !== planos ? "#000000" : "#ffffff",
                            }}
                            key={offer.id}
                          >
                            {offer.name}
                          </Offer>
                        ))}
                      </OffersContainer>
                    </Plan>
                  ))}
                </PlansContainer>
              </PricingContainer>
              <ConfirmButton type="submit" isLoading={loading}>
                Confirmar
              </ConfirmButton>
            </FormContainer>
            {isPromo && (
              <Plan code={"promo"} plano={planos}>
                <GradientText
                  style={{ fontSize: 19 }}
                  code={"promo"}
                  plano={planos}
                >
                  Cupom promocional
                </GradientText>
                <InputCupom
                  placeholder="FLW7468"
                  onChange={(text) => {
                    setPromoPlanoId(text.target.value);
                  }}
                />

                <ButtonCupom
                  onClick={() => {
                    if (!valorPlano) {
                      return alert("Selecione um plano");
                    }
                    if (!promoPlanoId) {
                      return alert("Insira um cupom valído");
                    }
                    getPromo();
                  }}
                >
                  <text>Validar cupom</text>
                </ButtonCupom>
                <GradientText code={"promo"} plano={planos}>
                  {valorPlanoPromo
                    ? valorPlanoPromo.toLocaleString("pt-br", {
                        minimumFractionDigits: 0,
                        style: "currency",
                        currency: "BRL",
                      })
                    : valorPlanoPromo === 0
                    ? `R$ 00,0`
                    : null}
                </GradientText>

                <OffersContainer>
                  {textoPromo ? (
                    <>
                      <text>{textoPromo}</text>
                      <br />
                      <text>Cancele quando quiser!</text>
                    </>
                  ) : (
                    "Cupom não aplicado."
                  )}
                </OffersContainer>
              </Plan>
            )}
          </Main>
        </Container>
      </Layout>
    </>
  );
};

export default Planos;
