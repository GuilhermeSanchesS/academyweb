import React from 'react';
import {
  Footeres,
  Container,
  Content,
  Bottom,
  Left,
  Right,
  SocialMedia,
} from './styles';
import { FaYoutube, FaLinkedin, FaChevronUp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ImWhatsapp } from 'react-icons/im';
import Link from 'next/link';
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Footeres>
      <Container>
        <Content>
          <Left>
            <Link href="/">
              <img src="https://lh3.googleusercontent.com/85d3Ie2-kS66WlmNZutbbR5kXK9Pheap1XQW7wO2RPpKo7GjgM4ZjixWigxnX7O9Qzj9WpQHhqKhXSIOaswREPFwhHMw7g681PL6se_zS-5wLphi57uvyJybNy-w-erzTZ0BrrUlApUT9jG5zF2muPX0WZ0SI7ZuqIRi_tgFV-yl2qw4dAE7oCpbpEIiO6aFrELNLWtgx_173L0eTUkniapzitXQKuF40lCm-DcNSWU-sIq7-hxTjY3twVUc1ZQ2BOs5T79I397wy-Fx7-_ZSVOWlPa3n-HMO7vVOFenp8SHtpmKz-TBqnCBJxKO8bQ7SZmbFc3aMTxaq-8ho16eg_qQhZ4cqW_H5BX0qMO55NEoDaa8nQtELAPF1O2Xp5SU52VdGbzd1H-9ym0y9sRomY0BULfO_XmDbdA4MDF5JQZrWK1YS3SnoLovMZP7rP_HDa94z7pinGkNMc_dK-1ZFC1HigwoeI4zoUv6vC1eias-yVEkZAc2u376y-JszljvEZ8Hc-M47AA0Ud0ZlkQNtczM8Imd4DyqyieTob2575JwikRIKigLLx7ds0ZI4Z_JzA2tqLyGZnD0J9j8nRVtAY1u2tNDK8EsuCEfEmQ9RVD1wJhfBWlMF_WvqMTKOxcSzgY8c0pAMSIhQnezFQ-SwXh7bavisDEyqdMr23Uaihu_rcEuyVYdjHnfpesToX1bMboZ-wL_ON6wW5hPAmvXgZhT=w352-h53-no?authuser=0" />
            </Link>
            <span>
              &reg; Smart Decision Consulting {new Date().getFullYear()} <br />
              Todos os direitos reservados
            </span>
          </Left>
          <Right>
            <ul>
              <span>Programas</span>
              <li>
                <Link href="/">AcademY</Link>
              </li>
              <li>
                <Link href="/">Conteúdo</Link>
              </li>
            </ul>
            <ul>
              <span>Sobre</span>
              <li>
                <Link href="/">O AcademY</Link>
              </li>
              <li>
                <Link href="/">Direitos autorais</Link>
              </li>
              <li>
                <Link href="/">Termos de uso</Link>
              </li>
              <li>
                <Link href="/">Políticas de privacidade</Link>
              </li>
            </ul>
            <ul>
              <span>Dúvidas</span>
              <li>
                <Link href="/">Central de ajuda</Link>
              </li>
            </ul>
          </Right>
        </Content>
        <Bottom>
          <SocialMedia>
            <li>
              <a href="#">
                <FaYoutube size={25} style={{ color: '#1B26FF' }} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin size={24} style={{ color: '#1B26FF' }} />
              </a>
            </li>
            <li>
              <a href="#">
                <SiGmail size={24} style={{ color: '#1B26FF' }} />
              </a>
            </li>
            <li>
              <a href="#">
                <ImWhatsapp size={24} style={{ color: '#1B26FF' }} />
              </a>
            </li>
          </SocialMedia>
          <button type="button">
            <FaChevronUp size={16} style={{ color: '#FFFFFF' }} />
          </button>
        </Bottom>
      </Container>
    </Footeres>
  );
};

export default Footer;
