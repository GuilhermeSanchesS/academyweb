import React from 'react';
import Layout from '../componentes/Layout';
import { ThemeProvider } from '../context/theme';
import { Container } from '../styles/Containers';
import {
  Services,
  ServiceItem,
  CardContainer,
} from '../styles/services/styles';
interface servicesProps {}

const services: React.FC<servicesProps> = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="Servicos">
        <Container>
          <h1>Nossas soluçoes e Serviços</h1>
          <p>
            Otimize seu tempo e investimento! Entre em contato para lhe
            fornecermos maiores detalhes clicando aqui
          </p>
          <Services>
            <ServiceItem>
              <CardContainer>
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
                <h3>PROFESSIONL SERVICES</h3>
                <p>
                  Realizamos diversas atividades de consultoria, incluindo a
                  administração, sustentação, atualização e suporte as demandas
                  do dia a dia do seu ambiente.
                </p>
              </CardContainer>
              <CardContainer>
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
                <h3>PROFESSIONL SERVICES</h3>
                <p>
                  Realizamos diversas atividades de consultoria, incluindo a
                  administração, sustentação, atualização e suporte as demandas
                  do dia a dia do seu ambiente.
                </p>
              </CardContainer>
              <CardContainer>
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
                <h3>PROFESSIONL SERVICES</h3>
                <p>
                  Realizamos diversas atividades de consultoria, incluindo a
                  administração, sustentação, atualização e suporte as demandas
                  do dia a dia do seu ambiente.
                </p>
              </CardContainer>
              <CardContainer>
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
                <h3>PROFESSIONL SERVICES</h3>
                <p>
                  Realizamos diversas atividades de consultoria, incluindo a
                  administração, sustentação, atualização e suporte as demandas
                  do dia a dia do seu ambiente.
                </p>
              </CardContainer>
              <CardContainer>
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
                <h3>PROFESSIONL SERVICES</h3>
                <p>
                  Realizamos diversas atividades de consultoria, incluindo a
                  administração, sustentação, atualização e suporte as demandas
                  do dia a dia do seu ambiente.
                </p>
              </CardContainer>
            </ServiceItem>
          </Services>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default services;
