import React from 'react';
import { ThemeProvider } from '../context/theme';
import Layout from '../componentes/Layout';
import {
  Main,
  Section,
  Container,
  Content,
  ImageMobile,
  Button,
  Image,
} from '../styles/home/styles';
import Link from 'next/link';
export default function Home() {
  return (
    <ThemeProvider>
      <Layout pageTitle="Home">
        <Main>
          <Section>
            <Container>
              <ImageMobile></ImageMobile>
              <Content>
                <span>👋 Bem-vindo(a) a SDC Academy 2021</span>
                <h1>
                  Descubra e desenvolver novos talentos na área de tecnologia
                </h1>
                <p>
                  A iniciativa busca além da capacitação, (re)inserir os jovens
                  formandos, recém formados e profissionais experientes no
                  mercado de trabalho
                </p>
                <Button>
                  <Link href="/services">VENHA FAZER PARTE</Link>
                </Button>
              </Content>
              <Image>
                <img
                  src="https://lh3.googleusercontent.com/ur7VY9Sr9BzXMKkmxhaQLtJXmhVUMpaDtcCBXobSJ5HRpdc05fqQVKJHoypT489_5fkYlRvyixhv8xzfqnjywMnYynP6ab5ImHvQsEDSgA7yovBQzFJ82ZQjJS6jQbLlbAOHFx66VBdiMn4kyG5sPmWdXdmrd75-4gc7AyBsOSYfXJLj_yvcr8GLlplV9xiz7kEZqJZTXEdDaDIxj6iNNasD59E-vzoSXPEb3cB_LQIJZEUdCO4lmHPPjsQhkXP5EAUOKpdNjoEqMhzwIPJsNXtdhOzaK_GOFkj_rVlF0M43jJ2P6Q6bbDseJ5hN70DMzJRzENGHcrxFichE4aZquCAVt8UcHF6B_JiP1UXStbxkq_JWj4tL3w2od-V6I9XGvnDLwZDgwSkB--EEX0ZfvFqa8UvKt1LvecQfuikan54UXonmIQUZuG84alFqsVWSxM5emZD8syzok5YejlrL5Fw5f6wlhpVqcZKbSGqWvv5ALqAbfrl0rNKESFcGLxgT3wR4UhkeskOQJXcefuTMHKHVvvsPjl-DaWIb8kwILhGnjVnDn5TUkwqsPq0-yjO7p6Ld0zTYv97x2gqxRRbjrGqyOevpteqz8lfCtqm0pNF964EXgEfdb8OryRXj3lktQH0SOh-J2Pmb4sMR8yQJE9ijcpw_SQ-VKZY3lyNszFpp_Qk2RbiuCuC-1EDgxrjnXXD-pRKIhK1HUsJy9-8_iXii=w517-h571-no?authuser=0"
                  alt="programar"
                />
              </Image>
            </Container>
            <hr />
          </Section>
          <Section>
            <Container>
              <ImageMobile></ImageMobile>
              <Content>
                <span>👋 Bem-vindo(a) a SDC Academy 2021</span>
                <h1>
                  Descubra e desenvolver novos talentos na área de tecnologia
                </h1>
                <p>
                  A iniciativa busca além da capacitação, (re)inserir os jovens
                  formandos, recém formados e profissionais experientes no
                  mercado de trabalho
                </p>
                <Button>
                  <Link href="/services">VENHA FAZER PARTE</Link>
                </Button>
              </Content>
              <Image>
                <img
                  src="https://lh3.googleusercontent.com/ur7VY9Sr9BzXMKkmxhaQLtJXmhVUMpaDtcCBXobSJ5HRpdc05fqQVKJHoypT489_5fkYlRvyixhv8xzfqnjywMnYynP6ab5ImHvQsEDSgA7yovBQzFJ82ZQjJS6jQbLlbAOHFx66VBdiMn4kyG5sPmWdXdmrd75-4gc7AyBsOSYfXJLj_yvcr8GLlplV9xiz7kEZqJZTXEdDaDIxj6iNNasD59E-vzoSXPEb3cB_LQIJZEUdCO4lmHPPjsQhkXP5EAUOKpdNjoEqMhzwIPJsNXtdhOzaK_GOFkj_rVlF0M43jJ2P6Q6bbDseJ5hN70DMzJRzENGHcrxFichE4aZquCAVt8UcHF6B_JiP1UXStbxkq_JWj4tL3w2od-V6I9XGvnDLwZDgwSkB--EEX0ZfvFqa8UvKt1LvecQfuikan54UXonmIQUZuG84alFqsVWSxM5emZD8syzok5YejlrL5Fw5f6wlhpVqcZKbSGqWvv5ALqAbfrl0rNKESFcGLxgT3wR4UhkeskOQJXcefuTMHKHVvvsPjl-DaWIb8kwILhGnjVnDn5TUkwqsPq0-yjO7p6Ld0zTYv97x2gqxRRbjrGqyOevpteqz8lfCtqm0pNF964EXgEfdb8OryRXj3lktQH0SOh-J2Pmb4sMR8yQJE9ijcpw_SQ-VKZY3lyNszFpp_Qk2RbiuCuC-1EDgxrjnXXD-pRKIhK1HUsJy9-8_iXii=w517-h571-no?authuser=0"
                  alt="programar"
                />
              </Image>
            </Container>
            <hr />
          </Section>
          <Section>
            <Container>
              <ImageMobile></ImageMobile>
              <Content>
                <span>👋 Bem-vindo(a) a SDC Academy 2021</span>
                <h1>
                  Descubra e desenvolver novos talentos na área de tecnologia
                </h1>
                <p>
                  A iniciativa busca além da capacitação, (re)inserir os jovens
                  formandos, recém formados e profissionais experientes no
                  mercado de trabalho
                </p>
                <Button>
                  <Link href="/services">VENHA FAZER PARTE</Link>
                </Button>
              </Content>
              <Image>
                <img
                  src="https://lh3.googleusercontent.com/ur7VY9Sr9BzXMKkmxhaQLtJXmhVUMpaDtcCBXobSJ5HRpdc05fqQVKJHoypT489_5fkYlRvyixhv8xzfqnjywMnYynP6ab5ImHvQsEDSgA7yovBQzFJ82ZQjJS6jQbLlbAOHFx66VBdiMn4kyG5sPmWdXdmrd75-4gc7AyBsOSYfXJLj_yvcr8GLlplV9xiz7kEZqJZTXEdDaDIxj6iNNasD59E-vzoSXPEb3cB_LQIJZEUdCO4lmHPPjsQhkXP5EAUOKpdNjoEqMhzwIPJsNXtdhOzaK_GOFkj_rVlF0M43jJ2P6Q6bbDseJ5hN70DMzJRzENGHcrxFichE4aZquCAVt8UcHF6B_JiP1UXStbxkq_JWj4tL3w2od-V6I9XGvnDLwZDgwSkB--EEX0ZfvFqa8UvKt1LvecQfuikan54UXonmIQUZuG84alFqsVWSxM5emZD8syzok5YejlrL5Fw5f6wlhpVqcZKbSGqWvv5ALqAbfrl0rNKESFcGLxgT3wR4UhkeskOQJXcefuTMHKHVvvsPjl-DaWIb8kwILhGnjVnDn5TUkwqsPq0-yjO7p6Ld0zTYv97x2gqxRRbjrGqyOevpteqz8lfCtqm0pNF964EXgEfdb8OryRXj3lktQH0SOh-J2Pmb4sMR8yQJE9ijcpw_SQ-VKZY3lyNszFpp_Qk2RbiuCuC-1EDgxrjnXXD-pRKIhK1HUsJy9-8_iXii=w517-h571-no?authuser=0"
                  alt="programar"
                />
              </Image>
            </Container>
            <hr />
          </Section>
          <Section>
            <Container>
              <ImageMobile></ImageMobile>
              <Content>
                <span>👋 Bem-vindo(a) a SDC Academy 2021</span>
                <h1>
                  Descubra e desenvolver novos talentos na área de tecnologia
                </h1>
                <p>
                  A iniciativa busca além da capacitação, (re)inserir os jovens
                  formandos, recém formados e profissionais experientes no
                  mercado de trabalho
                </p>
                <Button>
                  <Link href="/services">VENHA FAZER PARTE</Link>
                </Button>
              </Content>
              <Image>
                <img
                  src="https://lh3.googleusercontent.com/ur7VY9Sr9BzXMKkmxhaQLtJXmhVUMpaDtcCBXobSJ5HRpdc05fqQVKJHoypT489_5fkYlRvyixhv8xzfqnjywMnYynP6ab5ImHvQsEDSgA7yovBQzFJ82ZQjJS6jQbLlbAOHFx66VBdiMn4kyG5sPmWdXdmrd75-4gc7AyBsOSYfXJLj_yvcr8GLlplV9xiz7kEZqJZTXEdDaDIxj6iNNasD59E-vzoSXPEb3cB_LQIJZEUdCO4lmHPPjsQhkXP5EAUOKpdNjoEqMhzwIPJsNXtdhOzaK_GOFkj_rVlF0M43jJ2P6Q6bbDseJ5hN70DMzJRzENGHcrxFichE4aZquCAVt8UcHF6B_JiP1UXStbxkq_JWj4tL3w2od-V6I9XGvnDLwZDgwSkB--EEX0ZfvFqa8UvKt1LvecQfuikan54UXonmIQUZuG84alFqsVWSxM5emZD8syzok5YejlrL5Fw5f6wlhpVqcZKbSGqWvv5ALqAbfrl0rNKESFcGLxgT3wR4UhkeskOQJXcefuTMHKHVvvsPjl-DaWIb8kwILhGnjVnDn5TUkwqsPq0-yjO7p6Ld0zTYv97x2gqxRRbjrGqyOevpteqz8lfCtqm0pNF964EXgEfdb8OryRXj3lktQH0SOh-J2Pmb4sMR8yQJE9ijcpw_SQ-VKZY3lyNszFpp_Qk2RbiuCuC-1EDgxrjnXXD-pRKIhK1HUsJy9-8_iXii=w517-h571-no?authuser=0"
                  alt="programar"
                />
              </Image>
            </Container>
            <hr />
          </Section>
        </Main>
      </Layout>
    </ThemeProvider>
  );
}
