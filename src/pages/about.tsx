import React from 'react';
import Layout from '../componentes/Layout';
import { ThemeProvider } from '../context/theme';
import { Sponsors, SponsorContainer, Cards } from '../styles/about/styles';
import { Container } from '../styles/Containers';

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="Quem Somos">
        <Container>
          <div>
            <h3><span>S</span>mart <span>D</span>ecision  <span>C</span>onsulting</h3>
            <p>
              Com 19 anos de experiência, a SDC (Smart Decision Consulting)
              atende o <br /> mercado cloud e on-premisses de venda de licenças,
              consultoria, suporte e <br /> treinamento nas áreas:
              <ul>
                <li>Sistemas Operacionais</li>
                <li>Bancos de Dados</li>
                <li>Business Intelligence</li>
                <li>Advanced Analytics </li>
                <li>Big Data</li>
              </ul>
            </p>
          </div>
          <Cards>
            <div>
              <h3>Missão</h3>
              <p>
                Oferecer ao cliente não apenas nossa experiência nas principais
                ferramentas e soluções tecnológicas do mercado de TI, mas também
                nosso expertise em diversos segmentos da indústria.
              </p>
            </div>
            <div>
              <h3>Visão</h3>
              <p>
                Ser referência em produtos, serviços e inovação tecnológica,
                contribuindo para o crescimento de áreas estratégicas de
                negócios de nossos clientes, competitividade e excelência nos
                resultados. Isto se dá através de amplos e sólidos conhecimentos
                de nossos sócios e colaboradores, valor e qualidade do que
                entregamos, e relações profissionais duradouras.
              </p>
            </div>
            <div>
              <h3>Valores</h3>
              <p>
                Os valores que direcionam nossas ações são: ética, respeito,
                responsabilidade e integridade.
              </p>
            </div>
          </Cards>
          <SponsorContainer>
            <h1>NOSSOS PARCEIROS</h1>
            <Sponsors>
              <a href="">
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
              </a>
              <a href="">
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
              </a>
              <a href="">
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
              </a>
              <a href="">
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
              </a>
              <a href="">
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
              </a>
              <a href="">
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
              </a>
              <a href="">
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
              </a>
              <a href="">
                <img
                  src="https://www.thecloudxperts.net/wp-content/uploads/2021/02/google-cloud-partner.png"
                  alt="Google Cloud"
                />
              </a>
            </Sponsors>
          </SponsorContainer>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default about;
