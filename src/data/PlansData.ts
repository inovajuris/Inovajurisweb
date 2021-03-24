export const getFormattedPlansData = (isPromo: boolean) => {
  const PlansData = [
    {
      id: "0",
      name: "one",
      code: isPromo ? "promo1" : "plano1",
      value: " 49,90",
      offers: [
        { id: "0", name: "plano individual" },
        {
          id: "1",
          name: "Monitoramento de até 50 processos",
        },
        { id: "2", name: "Gestão Financeira (despesas e honorarios)" },
        {
          id: "3",
          name: "Gestão de clientes cadastro e acesso rápido aos clientes",
        },
        {
          id: "4",
          name: "Comunicação efetiva \n entre advogado e cliente - Chat",
        },
        {
          id: "5",
          name: "Gestão de processos andamento processual automático",
        },
        { id: "6", name: "Acesso exclusivo aos clientes" },
        { id: "7", name: "Aplicativo com a cara do seu escritório" },
        // { id: "8", name: "alertas" },
        // { id: "9", name: "mapas" },
      ],
    },
    {
      id: "1",
      name: "office",
      code: isPromo ? "promo2" : "plano2",
      value: " 64,90",
      offers: [
        { id: "0", name: "equipe de até 3 advogados" },
        { id: "1", name: "Monitoramento de até 75 processos" },
        { id: "2", name: "Gestão Financeira (despesas e honorarios)" },
        {
          id: "3",
          name: "Gestão de clientes cadastro e acesso rápido aos clientes",
        },
        {
          id: "4",
          name: "Comunicação efetiva \n entre advogado e cliente - Chat",
        },
        {
          id: "5",
          name: "Gestão de processos andamento processual automático",
        },
        { id: "6", name: "Acesso exclusivo aos clientes" },
        { id: "7", name: "Aplicativo com a cara do seu escritório" },
        { id: "8", name: "Gestão de equipe do escritorio" },
        // { id: "9", name: "mapas" },
      ],
    },
    {
      id: "2",
      name: "office one",
      code: isPromo ? "promo3" : "plano3",
      value: " 79,90",
      offers: [
        { id: "0", name: "equipe de até 6 advogados" },
        { id: "1", name: "Monitoramento de até 100 processos" },
        { id: "2", name: "Gestão Financeira (despesas e honorarios)" },
        {
          id: "3",
          name: "Gestão de clientes cadastro e acesso rápido aos clientes",
        },
        {
          id: "4",
          name: "Comunicação efetiva \n entre advogado e cliente - Chat",
        },
        {
          id: "5",
          name: "Gestão de processos andamento processual automático",
        },
        { id: "6", name: "Acesso exclusivo aos clientes" },
        { id: "7", name: "Aplicativo com a cara do seu escritório" },
        { id: "8", name: "Gestão de equipe do escritorio" },
        // { id: "9", name: "mapas" },
      ],
    },
  ];

  return PlansData;
};
