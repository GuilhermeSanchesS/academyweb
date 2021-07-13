import React from 'react';
import Layout from '../componentes/Layout';
import { ThemeProvider } from '../context/theme';

interface academyProps {}

const academy: React.FC<academyProps> = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="SDC Acadmey">
        <h1>SDC Acadmey 2021</h1>
        <p>
          Otimize seu tempo e investimento! Entre em contato para lhe
          fornecermos maiores detalhes clicando aqui
        </p>
      </Layout>
    </ThemeProvider>
  );
};

export default academy;
