//2846445278933444
import React, { useState, useCallback, useRef } from "react";
import Header from "../../Components/Header";

import { useHistory, useLocation } from "react-router-dom";

import { Container, Blue } from "./styles";

import Button from "../../Components/Button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

const Contrato: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const {
    state: {
      plano,
      officeId,
      userId,
      userEmail,
      userPhone,
      userPassword,
      username,
      token,
      isPromo,
    },
  } =
    useLocation<{
      officeId: number;
      userId: number;
      username: string;
      userEmail: string;
      userPhone: string;
      userPassword?: string;
      plano: string;
      token: string;
      isPromo: boolean;
    }>();

  const handleSubmit = useCallback(async (): Promise<void> => {
    setLoading(true);

    history.push("/dados", {
      contractAccepted: true,
      plano,
      officeId,
      userId,
      userEmail,
      userPhone,
      userPassword,
      username,
      token,
      isPromo,
    });
  }, []);

  return (
    <div>
      <Header />

      <Container>
        <Blue>
          <div className="formBox">
            <h3 className="h3">Contrato de Assinatura</h3>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="box">
                <div className="input1">
                  <h2 className="texto">
                    Contrato de Assinatura de Aplicativo - INOVA JURIS SERVIÇOS
                    EM INFORMÁTICA LTDA Atualizado: 17 de maio de 2021 ESTE
                    CONTRATO TEM POR OBJETIVO REGULAR O USO DO SERVIÇO DO
                    APLICATIVO INOVA JURIS. POR FAVOR, LEIA ESTE CONTRATO. Este
                    Contrato é um acordo legal entre os Assinantes (pessoa
                    física ou jurídica identificada no termo de Adesão) da
                    plataforma online e Aplicativo para Advogados(as)
                    autônomos(as) e Escritórios de Advocacia, doravante,
                    denominado ADERENTE, e a INOVA JURIS SERVIÇOS EM INFORMÁTICA
                    LTDA, pessoa jurídica de direito privado, inscrita no
                    CNPJ/MF nº 35.485.339/0001-00, com sede na Rua Fontoura
                    Xavier, 1433, São Paulo/SP – 08295-300, Brasil, doravante
                    denominada simplesmente CONTRATADA, única e exclusiva
                    proprietária da marca, domínios, plataforma online e
                    Aplicativos denominada INOVA JURIS Advogados(as)
                    autônomos(as) e Escritórios de Advocacia. 1. DAS DEFINIÇÕES
                    PRÉVIAS CONTRATADA: INOVA JURIS SERVIÇOS EM INFORMÁTICA
                    LTDA, pessoa jurídica de direito privado, inscrita no
                    CNPJ/MF nº 35.485.339/0001-00, (“Inova”, “nós”, “nosso/a”,
                    “a gente”), com sede na Rua Fontoura Xavier, 1433, Itaquera,
                    São Paulo/SP – 08295-300, Brasil; ADERENTE: pessoa física ou
                    jurídica que adere ao presente instrumento para utilização
                    da Plataforma e Aplicativo Inova Juris, seja em caráter de
                    experiência, seja em caráter definitivo; APLICATIVO:
                    Significa o software de propriedade exclusiva da CONTRATADA
                    por meio do qual o ADERENTE poderá gerir, controlar e
                    organizar processos judiciais, manter o relacionamento
                    através de chat exclusivo do app, gerir os envios de notas e
                    cobranças de custas, entre outras funcionalidades
                    disponíveis na ferramenta. USUÁRIO: é toda a pessoa física
                    ou jurídica que tenha acesso, mediante login e senha aos
                    serviços disponibilizados através da contratação de um dos
                    planos oferecidos pelo App Inova Juris contratados pelo
                    ADERENTE. PERÍODO DE EXPERIÊNCIA (TRIAL): consiste em um
                    período de teste de 21 (vinte e um) dias da Plataforma que
                    será gratuito. 2. DECLARAÇÃO DE VONTADE 2.1. O ADERENTE
                    DECLARA TER CIÊNCIA DOS DIREITOS E OBRIGAÇÕES DECORRENTES DO
                    PRESENTE CONTRATO DE LICENÇA DE USUÁRIO FINAL ("EULA"),
                    CONSTITUINDO ESTE INSTRUMENTO O ACORDO COMPLETO ENTRE AS
                    PARTES. DECLARA, AINDA, TER LIDO, COMPREENDIDO E ACEITO
                    TODOS OS TERMOS E CONDIÇÕES DESTE INSTRUMENTO. 2.2. A partir
                    do momento em que o ADERENTE aceitar este CONTRATO, as
                    disposições aqui constantes regerão a relação entre a
                    CONTRATADA e o ADERENTE, razão pela qual é recomendável que
                    o ADERENTE imprima uma cópia deste documento para futura
                    referência. 2.3. O ADERENTE se declara ciente de que as
                    operações que corresponderem à aceitação de determinadas
                    opções serão registradas nos bancos de dados da CONTRATADA,
                    juntamente com a data e hora em que o aceite foi manifestado
                    pelo ADERENTE, podendo tal informação ser utilizada como
                    prova da aceitação da opção pelo ADERENTE, independentemente
                    de outra formalidade. 3. INFORMAÇÕES CONFIDENCIAIS E
                    POLÍTICA DE SEGURANÇA DO USUÁRIO 3.1. A CONTRATADA se
                    compromete a manter a confidencialidade, integridade e em
                    segurança quaisquer Informações disponibilizadas pelo
                    ADERENTE relacionadas às Informações Gerais e/ou Informações
                    de Cadastro, ressalvados os dados públicos. 3.2. Com a
                    finalidade de garantir a privacidade do ADERENTE, bem como a
                    segurança de suas Informações, a CONTRATADA se compromete a
                    regularmente reavaliar a sua política de segurança e
                    adaptá-la, conforme necessário. 3.3. Em nenhuma hipótese, a
                    CONTRATADA irá vender ou disponibilizar para terceiros as
                    Informações do ADERENTE ou geradas através do uso do
                    APLICATIVO, sendo certo que somente as utilizará para as
                    seguintes finalidades, com as quais o ADERENTE expressamente
                    concorda e anui: a) Para enviar ao ADERENTE qualquer
                    notificação administrativa, alertas e comunicados relevantes
                    para o mesmo; b) Para cumprir com a finalidade do PORTAL ou
                    do APLICATIVO; c) Identificar o perfil, desejos ou
                    necessidades do ADERENTE a fim de aprimorar os produtos e/ou
                    serviços oferecidos pelo APLICATIVO ou PORTAL; d) Realizar
                    estatísticas para monitoramento de utilização do APLICATIVO;
                    e) Para pesquisas de marketing, planejamento de projetos da
                    CONTRATADA; e; f) Resolução de problemas no PORTAL ou
                    APLICATIVO, verificação e proteção das Informações, do
                    PORTAL ou APLICATIVO contra erros, fraudes ou qualquer outro
                    crime eletrônico. 3.4. Caso haja qualquer alteração nas
                    Informações de cadastro fornecidas pelo ADERENTE, este se
                    compromete a informar a CONTRATADA de tais alterações de
                    modo a garantir o correto uso e funcionamento do Aplicativo.
                    3.5. As Informações do ADERENTE poderão ser transferidas a
                    terceiros em decorrência da venda, aquisição, fusão,
                    reorganização societária ou qualquer outra mudança no
                    controle da CONTRATADA. Caso ocorra qualquer destas
                    hipóteses, no entanto, resultando na transferência das
                    Informações a terceiros, o ADERENTE será informado
                    previamente e caso não deseje prosseguir com a utilização do
                    Aplicativo, poderá excluir sua conta de acesso na forma
                    prevista no Item 10 deste CONTRATO. Nesta hipótese, as
                    Informações do ADERENTE serão apagadas do banco de dados da
                    CONTRATADA e não serão transmitidas a terceiros. 3.6. Não
                    obstante as informações fornecidas pelo ADERENTE estejam
                    seguras nos termos deste CONTRATO, o login e a senha de
                    acesso ao APLICATIVO são confidenciais e de
                    responsabilidades exclusiva do ADERENTE. 3.7. Caso o
                    ADERENTE acredite que seu login e senha de acesso ao Portal
                    tenham sido roubados ou sejam de conhecimento de outras
                    pessoas, por qualquer razão, o ADERENTE deverá imediatamente
                    comunicar a CONTRATADA, sem prejuízo da alteração de senha
                    imediata por meio do PORTAL ou do APLICATIVO. 3.8. As
                    informações do ADERENTE ficam armazenadas em banco de dados
                    na nuvem, cuja administração é de responsabilidade da
                    CONTRATADA. 3.9. A CONTRATADA concorda que o ADERENTE poderá
                    ter acesso as suas informações para resolução de problemas,
                    dúvidas e/ou quaisquer necessidades que exijam acesso as
                    suas informações. Tal acesso deverá ser solicitado via
                    suporte no APLICATIVO. 4. REMUNERAÇÃO E FORMA DE PAGAMENTO
                    4.1. O ADERENTE deve pagar à CONTRATADA o valor do
                    respectivo plano e serviços escolhidos de acordo com a
                    periodicidade definida entre as opções de pagamento
                    disponibilizadas ao ADERENTE no ato da contratação. 4.2. O
                    ADERENTE compreende e aceita que a ativação do plano
                    contratado depende da confirmação, por parte de instituições
                    financeiras, do recebimento do valor referente à contratação
                    do plano e/ou serviços, podendo este período variar de
                    acordo com as instituições financeiras envolvidas, forma de
                    pagamento selecionada e datas úteis para compensação do
                    pagamento, não sendo a CONTRATADA responsável por atrasos ou
                    problemas neste processo. 4.3. Sempre que o usuário alterar
                    alguma característica do plano, tais como, mas não se
                    limitando a ciclo de pagamento (mensal ou anual), número de
                    usuários ou serviços adicionais, a data de faturamento será
                    alterada para a data em que ocorreu a alteração. Em ato
                    contínuo, será gerada uma cobrança conforme as novas
                    características do plano, abatido do valor proporcional já
                    pago até o final do ciclo anterior. 4.4. Em ocorrendo atraso
                    no pagamento dos valores relacionados ao plano contratado, a
                    CONTRATADA suspenderá o acesso ao Aplicativo. Com a
                    regularização dos pagamentos, a CONTRATADA compromete-se a
                    restabelecer o acesso ao Aplicativo ao ADERENTE. 4.5. Caso a
                    suspensão permaneça por prazo superior a 30 (trinta) dias, a
                    CONTRATADA poderá excluir integralmente as informações
                    lançadas no APLICATIVO pelo ADERENTE, sem qualquer prejuízo
                    ou ônus para a CONTRATADA. 4.6. Os valores definidos no
                    plano de licenciamento, quando tratar de prestações
                    periódicas, serão reajustados anualmente pelo IGPM-FGV
                    acumulado no período, ou no caso de extinção deste, de outro
                    índice oficial que vier a sucedê-lo. Para fins deste
                    CONTRATO considera-se o mês da base de cálculo para
                    aplicação do reajuste o mês da contratação do primeiro plano
                    de licenciamento. 4.7. A utilização de códigos promocionais
                    ou condições comerciais diferenciadas não são cumulativas,
                    estando assim limitadas à 1 (um) benefício por conta, que em
                    nenhuma hipótese serão vitalícios e respeitarão o prazo
                    máximo de 12 meses a partir da aplicação. 4.8. Os valores
                    dos planos negociados são sempre com tributos inclusos. Se
                    houver majoração das alíquotas dos tributos que incidem
                    sobre os serviços objeto do presente Contrato ou até mesmo,
                    a criação de um novo tributo, o valor correspondente será
                    reajustado, objetivando contemplar tais alterações. 5. NÍVEL
                    DE SERVIÇO 5.1. A CONTRATADA empreenderá esforços
                    comercialmente razoáveis para tornar o APLICATIVO disponível
                    e acessível ao ADERENTE, no mínimo, 98% (noventa e oito por
                    cento) durante cada Ano. 5.1.1. O compromisso de nível de
                    serviço não se aplica às circunstâncias de indisponibilidade
                    que resultem: a) de uma interrupção do fornecimento de
                    energia elétrica ou paradas emergenciais não superiores a 4
                    (duas) horas ou que ocorram no período das 24:00h até às
                    6:00h; b) forem causadas por fatores que fujam ao cabível
                    controle da CONTRTADA, inclusive casos de força maior ou de
                    acesso à Internet e problemas correlatos; c) resultem de
                    quaisquer atos ou omissões do ADERENTE ou de terceiros; d)
                    resultem do equipamento de TI, software ou outras
                    tecnologias que o ADERENTE usar e/ou do equipamento de TI
                    que impeçam o acesso regular ao Aplicativo; e) resultem de
                    falhas de instâncias individuais não atribuíveis à
                    indisponibilidade do ADERENTE. 6. PROPRIEDADE INTELECTUAL
                    6.1. O ADERENTE não adquire, pelo presente instrumento,
                    nenhum direito de propriedade intelectual ou outros direitos
                    exclusivos, incluindo patentes, desenhos, marcas, direitos
                    autorais ou direitos sobre informações confidenciais ou
                    segredos de negócio, sobre ou relacionados ao APLICATIVO ou
                    nenhuma parte dele. O ADERENTE também não adquire nenhum
                    direito sobre ou relacionado ao APLICATIVO ou qualquer
                    componente dele, além dos direitos de uso do serviço e
                    demais expressamente licenciados ao mesmo sob o presente
                    CONTRATO ou em qualquer outro contrato mutuamente acordado
                    por escrito que o ADERENTE possa ter celebrado com a
                    CONTRATADA. Quaisquer direitos não expressamente concedidos
                    sob o presente instrumento são reservados a CONTRATADA. 6.2.
                    Caso o ADERENTE venha a desenvolver um novo módulo ou
                    produto que caracterize cópia, de todo ou em parte, quer
                    seja do dicionário de dados, quer seja do programa, será
                    considerado como parte do APLICATIVO, ficando, portanto, sua
                    propriedade incorporada pela CONTRATADA e seu uso
                    condicionado a estas cláusulas contratuais. 6.3. Todo e
                    qualquer conteúdo disponibilizado no APLICATIVO ou no
                    PORTAL, tais como, mas não se limitando a textos, gráficos,
                    imagens, logos, ícones, fotografias, conteúdo editorial,
                    notificações, softwares e qualquer outro material, pertencem
                    exclusivamente à CONTRATADA e são protegidos pela lei
                    brasileira no que se refere a propriedade intelectual e aos
                    direitos autorais. 7. ACESSO AO APLICATIVO 7.1. Este Termo
                    concede ao ADERENTE uma licença revogável, onerosa, não
                    exclusiva e intransferível de uso do APLICATIVO, sendo certo
                    que o ADERENTE não poderá utilizar e nem permitir o uso do
                    APLICATIVO para qualquer outra finalidade não expressamente
                    prevista neste instrumento. 7.2. Por meio do APLICATIVO o
                    ADERENTE, entre outros benefícios, terá acesso a uma
                    ferramenta para se relacionar com seus clientes e usuários
                    cadastrados pelo ADERENTE, gerir, controlar e organizar
                    processos judiciais, andamentos processuais e publicações,
                    gerenciar contatos de clientes, entre outros. 7.3. O
                    ADERENTE é responsável pela veracidade, validade e precisão
                    das informações por ele fornecidas no seu cadastro,
                    inclusive em relação à indicação de endereço de e-mail
                    válido de sua titularidade, competindo-lhe, ainda, manter
                    referido cadastro sempre atualizado. 7.4. A CONTRATADA não
                    terá qualquer obrigação de policiar ou fiscalizar as
                    informações fornecidas pelo ADERENTE, mas poderá, ao seu
                    exclusivo critério, excluir as informações que lhe pareçam
                    inverídicas ou ofensivas. 7.5. O login e senhas criados pelo
                    ADERENTE para acesso ao APLICATIVO são confidenciais e de
                    responsabilidade exclusiva do ADERENTE, que deverá entrar em
                    contato com a CONTRATADA, imediatamente, na hipótese de
                    comprometimento do seu sigilo. 7.6. Em nenhuma hipótese, o
                    ADERENTE terá acesso ao código fonte do APLICATIVO ora
                    licenciado, por este se tratar de propriedade intelectual da
                    CONTRATADA. 7.7. Para uso do APLICATIVO, o ADERENTE deverá
                    possuir, Smartphone ou dispositivo similar, com acesso à
                    Internet. Para garantia de uma melhor experiência, indica-se
                    a utilização de Internet banda larga ou rede 3G\4G ou
                    superior, ter no mínimo 4GB de memória RAM. 8. USO DO
                    APLICATIVO 8.1. A CONTRATADA poderá, ao seu exclusivo
                    critério, a qualquer tempo, e sem a necessidade de
                    comunicação prévia ao ADERENTE: a) Encerrar, modificar ou
                    suspender, total ou parcialmente, o acesso do ADERENTE ao
                    APLICATIVO ou ao PORTAL, quando referido acesso ou cadastro
                    estiver em violação das condições estabelecidas neste
                    CONTRATO; b) Excluir, total ou parcialmente, dentro dos
                    limites previstos neste CONTRATO, as informações cadastradas
                    pelo ADERENTE que não estejam em consonância com as
                    disposições deste CONTRATO; e, 8.2. A qualquer tempo,
                    mediante comunicação prévia ao ADERENTE no endereço de
                    e-mail por este indicado em seu cadastro pessoal ou por meio
                    de aviso no próprio Aplicativo ou Portal, a CONTRATADA
                    poderá, ainda: a) Definir preços para oferecimento de
                    determinados conteúdos e/ou serviços, ainda que inicialmente
                    tenham sido ofertados de forma gratuita, sendo a utilização
                    dos mesmos, após o referido aviso, considerada como
                    concordância do ADERENTE com tais preços; e, b) Enviar ao
                    ADERENTE mensagens de e-mail, SMS, notificações push via
                    celular ou outras correspondências de caráter informativo,
                    comercial e/ou promocional, salvo expressa solicitação em
                    contrário pelo ADERENTE. 9. LIMITAÇÕES DE USO 9.1. O
                    ADERENTE não poderá: a) Utilizar o APLICATIVO para divulgar
                    informações de qualquer forma que possa implicar em violação
                    de normas aplicáveis no Brasil, de direitos de propriedade
                    da CONTRATADA e/ou de terceiros ou dos bons costumes,
                    incluindo, sem limitação, a violação de direitos
                    intelectuais, autorais e de privacidade, ou a produção e
                    divulgação de conteúdo ilegal, imoral, inapropriado ou
                    ofensivo; b) Copiar, ceder, sublicenciar, vender, dar em
                    locação ou em garantia, reproduzir, doar, alienar de
                    qualquer forma, transferir total ou parcialmente, sob
                    quaisquer modalidades, gratuita ou onerosamente, provisória
                    ou permanentemente, o Aplicativo, assim como seus módulos,
                    partes, manuais ou quaisquer informações relativas ao mesmo;
                    c) Empregar softwares, técnicas e/ou artifícios com o
                    intuito de utilizar indevidamente o APLICATIVO para práticas
                    nocivas à CONTRATADA ou a terceiros, tais como exploits,
                    spamming, flooding, spoofing, crashing, root kits, etc.; d)
                    Reproduzir, adaptar, modificar e/ou empregar, no todo ou em
                    parte, para qualquer fim, o Aplicativo ou qualquer conteúdo
                    do PORTAL sem a autorização expressa da CONTRATADA; e)
                    Publicar ou transmitir qualquer arquivo que contenha vírus,
                    worms, cavalos de troia ou qualquer outro programa
                    contaminante ou destrutivo, ou que de outra forma possa
                    interferir no bom funcionamento APLICATIVO; f) Utilizar o
                    APLICATIVO para finalidade diversa daquela para a qual foi
                    disponibilizado pela CONTRATADA; e, g) Realizar engenharia
                    reversa. 10. LIMITAÇÃO DE RESPONSABILIDADE E INDENIZAÇÃO
                    10.1. A CONTRATADA não responderá, em nenhuma hipótese,
                    ainda que em caráter solidário ou subsidiário: a) Por
                    eventuais prejuízos sofridos pelo ADERENTE em razão da
                    tomada de decisões com base nas informações disponibilizadas
                    no PORTAL ou APLICATIVO; b) Por eventuais prejuízos sofridos
                    pelo ADERENTE em razão de falhas no sistema de informática
                    ou nos servidores que independam de culpa da CONTRATADA ou
                    em sua conectividade com a internet de modo geral, devendo o
                    ADERENTE manter, às suas expensas, linha de telecomunicação,
                    modem, software de comunicação, endereço de correio
                    eletrônico e outros recursos necessários à comunicação com a
                    CONTRATADA. c) Por situações de caso fortuito ou força
                    maior, nos termos do artigo 393 do Código Civil Brasileiro.
                    10.2. A CONTRATADA não garante que as funções contidas no
                    APLICATIVO atendam às suas necessidades, que a operação do
                    APLICATIVO será ininterrupta ou livre de erros, que qualquer
                    funcionalidade continuará disponível, que os defeitos no
                    APLICATIVO serão corrigidos ou que o APLICATIVO será
                    compatível ou funcione com qualquer Aplicativo, aplicações
                    ou serviços de terceiros. 10.3. O ADERENTE concorda em
                    defender, indenizar e manter indene a CONTRATADA e suas
                    afiliadas, diretores, empregados e agentes, de e contra
                    quaisquer encargos, ações ou demandas, incluindo, mas não
                    limitado a honorários advocatícios razoáveis, resultantes:
                    a) da sua eventual utilização indevida do Portal e do
                    Aplicativo; ou b) da sua violação das condições ora
                    pactuadas. 10.4. Em nenhum caso a CONTRATADA será
                    responsável por danos pessoais ou qualquer prejuízo
                    incidental, especial, indireto ou consequente, lucros
                    cessantes, incluindo, sem limitação, prejuízos por perda de
                    lucro, corrupção ou perda de dados, falha de transmissão ou
                    recepção de dados, não continuidade do negócio ou qualquer
                    outro prejuízo ou perda comercial, decorrentes ou
                    relacionados ao seu uso ou sua inabilidade em usar o
                    APLICATIVO, por qualquer outro motivo. 10.5. Na
                    eventualidade da CONTRATADA ser compelida, por decisão
                    judicial transitada em julgado, a indenizar ou ressarcir o
                    ADERENTE por danos sofridos, apesar do disposto no Item 9.4
                    acima, o valor devido ao ADERENTE será limitado à 20% (vinte
                    por cento) da totalidade da quantia efetivamente paga pelo
                    ADERENTE à CONTRATADA a título de fruição das
                    funcionalidades oferecidas pelo APLICATIVO. 11. VIGÊNCIA E
                    RESCISÃO 11.1. Este CONTRATO vigerá por prazo indeterminado,
                    a partir do aceite do ADERENTE, podendo ser modificado ou
                    rescindido unilateralmente pela CONTRATADA a qualquer tempo,
                    sem qualquer ônus, mediante simples comunicação por meio do
                    próprio PORTAL ou de mensagem para o e-mail indicado no
                    cadastro pessoal do ADERENTE. 11.2. O ADERENTE poderá, a
                    qualquer momento, solicitar a suspensão e/ou a exclusão da
                    sua conta de acesso ao PORTAL e APLICATIVO, encerrando seu
                    relacionamento com a CONTRATADA, mediante solicitação
                    realizada diretamente por meio do APLICATIVO. 11.3. Caso o
                    ADERENTE opte pelo cancelamento de sua conta de acesso ao
                    PORTAL, os serviços prestados pela CONTRATADA ao ADERENTE
                    serão cancelados automaticamente após o término do período
                    previamente contratado, SEM RESTITUIÇÃO DE VALORES, sendo
                    que a partir deste prazo nenhuma nova cobrança será emitida.
                    11.4. O ADERENTE poderá realizar o download de suas
                    Informações contidas no banco de dados da CONTRATADA, nos
                    casos de término, rescisão e resilição deste CONTRATO. As
                    Informações serão exportadas pelo ADERENTE em formato
                    eletrônico (cópia da base de dados), em formato CSV. 12.
                    MODIFICAÇÕES 12.1. A CONTRATADA poderá, a qualquer tempo,
                    alterar este CONTRATO ao seu exclusivo critério. Quaisquer
                    alterações neste CONTRATO serão informadas por meio do
                    PORTAL, APLICATIVO ou e-mail fornecido no momento do
                    cadastro do ADERENTE. 12.2. Será sempre indicada a data da
                    última atualização realizada pela CONTRATADA no CONTRATO.
                    12.3. O ADERENTE entende e concorda que, assim que publicada
                    a alteração deste CONTRATO no PORTAL ou no APLICATIVO, o uso
                    do PORTAL ou do APLICATIVO passa a ser submetido ao CONTRATO
                    atualizado. 13. DISPOSIÇÕES GERAIS 13.1. Este CONTRATO não
                    gera nenhum contrato de sociedade, de mandato, franquia ou
                    relação de trabalho entre a CONTRATADA e o ADERENTE, seus
                    Parceiros e/ou Anunciantes. 13.2. Caso qualquer disposição
                    deste CONTRATO for considerada ilegal, nula ou inexequível
                    por qualquer razão, as restantes disposições não serão
                    afetadas e manter-se-ão válidas e aplicáveis na máxima
                    extensão possível. 13.3. Este CONTRATO constitui a
                    totalidade do acordo sobre as condições de uso do PORTAL e
                    do APLICATIVO. O ADERENTE declara ter ciência dos direitos e
                    obrigações decorrentes do presente CONTRATO, tendo lido,
                    compreendido e aceito todos os termos e condições. 13.4.
                    Qualquer falha da CONTRATADA para impor ou exercer qualquer
                    disposição deste CONTRATO ou direitos conexos, não constitui
                    uma renúncia a esse direito ou disposição. 13.5. A
                    tolerância de uma parte para com a outra quanto ao
                    descumprimento de qualquer uma das obrigações assumidas
                    neste contrato não implicará em novação ou renúncia de
                    direito. A parte tolerante poderá, a qualquer tempo, exigir
                    da outra parte o fiel e cabal cumprimento deste contrato.
                    13.6. O ADERENTE concorda que a CONTRATADA possa divulgar o
                    fechamento deste contrato para fins comerciais, fazendo
                    menção ao nome e à marca do ADERENTE em campanhas
                    comerciais, podendo, inclusive, divulgar mensagens enviadas
                    de forma escrita ou oral, por telefone, para uso em sites,
                    jornais, revistas e outras campanhas, enquanto vigorar o
                    presente CONTRATO. O ADERENTE aceita, ainda, receber
                    notificações via correio eletrônico, dentro do próprio
                    APLICATIVO, SMS ou Push notification via Smartphone sobre
                    treinamentos, parcerias e campanhas relacionadas ao
                    APLICATIVO 14.7. CONTATOS, DÚVIDAS E SOLICITAÇÕES Para
                    esclarecimentos, dúvidas e solicitações de qualquer natureza
                    relacionadas ao tratamento de dados pessoais e aos termos da
                    presente declaração, a CONTRATADA se colocará à disposição
                    para contato por e-mail contato@inovajuris.com.br. Para um
                    contato direto e aprofundado acerca da privacidade e dos
                    termos dessa declaração, consultas e requerimentos podem ser
                    direcionados INOVA JURIS SERVIÇOS EM INFORMÁTICA LTDA,
                    pessoa jurídica de direito privado, inscrita no CNPJ/MF nº
                    35.485.339/0001-00, com sede na Rua Fontoura Xavier, 1433,
                    Itaquera, São Paulo/SP – 08295-300, Brasil. 15. LEGISLAÇÃO
                    APLICÁVEL Para a solução das controvérsias decorrentes do
                    presente instrumento, será aplicado integralmente o direito
                    brasileiro. Foro. Os eventuais litígios deverão ser
                    apresentados no foro da comarca em que se encontra a sede do
                    editor do aplicativo, isto é, no foro central da comarca da
                    Capital do Estado de São Paulo.
                  </h2>
                </div>
                <p className="contrato">
                  Ao clicar em "Concordar e Continuar", você confirma que leu o
                  nosso Contrato de de Assinatura na integra e concorda com ele.
                </p>
                <Button
                  className="btnazul"
                  type="submit"
                  isLoading={loading}
                  onClick={() => handleSubmit}
                >
                  Concordar
                </Button>
              </div>
            </Form>
          </div>
        </Blue>
      </Container>
    </div>
  );
};

export default Contrato;
