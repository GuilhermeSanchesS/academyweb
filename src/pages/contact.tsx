import React from 'react';
import Layout from '../componentes/Layout';
import { ThemeProvider } from '../context/theme';
import { Container } from '../styles/Containers';

interface contactProps {}

const contact: React.FC<contactProps> = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="Contato">
        <Container>
          <h1>Fale com nosco</h1>
          <p>
            Otimize seu tempo e investimento! Entre em contato para lhe
            fornecermos maiores detalhes clicando aqui
          </p>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default contact;
