function FinalReportMessage(profit, stock, expenses, sales) {
  return `Relatório Final da Empresa

  Prezados,
  
  Gostaríamos de apresentar a vocês o relatório final da nossa empresa, fornecendo informações sobre os lucros, estoque, gastos e total de vendas. Esses dados são essenciais para avaliar o desempenho financeiro e o crescimento do nosso negócio. A seguir, detalhamos cada uma dessas métricas:
  
  1. Lucros:
  Neste período, nossa empresa obteve um lucro líquido de R$${profit}. Essa é a diferença entre as receitas e os custos operacionais durante o período analisado. O lucro é um indicador importante da saúde financeira da empresa e de sua capacidade de gerar valor.
  
  2. Estoque:
  Atualmente, temos um estoque de ${stock}. Esse valor representa a quantidade de produtos disponíveis para venda em nosso armazém. Gerenciar o estoque de forma eficiente é fundamental para garantir um suprimento adequado de produtos aos clientes e evitar problemas de falta ou excesso de produtos.
  
  3. Gastos:
  Durante o período analisado, nossos gastos totalizaram R$${expenses}. Esses gastos incluem despesas operacionais, como aluguel, salários, marketing, logística, entre outros. Monitorar e controlar os gastos é essencial para garantir a sustentabilidade financeira da empresa e maximizar os lucros.
  
  4. Total de Vendas:
  O total de vendas alcançado foi de ${sales}. Esse valor representa a receita gerada pelas vendas de produtos ou serviços da empresa durante o período analisado. O aumento nas vendas é um indicador positivo do desempenho do negócio e da aceitação dos clientes em relação aos nossos produtos ou serviços.
  
  Agradecemos a confiança e o apoio contínuo de nossos clientes, parceiros e colaboradores. Essas conquistas não seriam possíveis sem o comprometimento de todos os envolvidos. Estamos empenhados em continuar buscando o crescimento e a excelência em nossas operações.
  
  Caso tenham alguma dúvida ou sugestão, não hesitem em entrar em contato conosco. Estamos sempre abertos a ouvir e melhorar.
  
  Atenciosamente,
  Equipe da Empresa`;
}

export { FinalReportMessage };
